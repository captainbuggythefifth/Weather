import React from "react";
import AsyncStorage from "@react-native-community/async-storage";
import Persistence from "helpers/persistance/Persistence";
import { AUTHENTICATION } from 'config';

type Props = {
    children: React.ReactNode
};

export interface IAuthenticationContextProps {
    authenticated: boolean,
    tokens: AUTHENTICATION.IAuthenticationTokens,
    setAuthenticated: Function,
    setTokens: Function,
    logOut: Function
}

export const AuthenticationContext = React.createContext<IAuthenticationContextProps>({
    authenticated: AUTHENTICATION.DEFAULT,
    tokens: AUTHENTICATION.TOKENS,
    setAuthenticated(auth: typeof AUTHENTICATION.DEFAULT) {
        this.authenticated = auth
    },
    setTokens(tokens: AUTHENTICATION.IAuthenticationTokens) {
        this.authenticated = true,
            this.tokens = tokens
    },
    logOut() {
        this.authenticated = false,
        this.tokens = AUTHENTICATION.TOKENS
    }
});

export const AuthenticationProvider = ({ children }: Props) => {

    const persistence = new Persistence(AsyncStorage);

    const [authenticated, setAuthenticated] = React.useState<boolean>(AUTHENTICATION.DEFAULT);
    const [tokens, setTokens] = React.useState<AUTHENTICATION.IAuthenticationTokens>(AUTHENTICATION.TOKENS)

    const setPersistAuthentication = async (tokens: AUTHENTICATION.IAuthenticationTokens) => {
        if(!tokens.accessToken) {
            return
        };

        const tokensStringified = JSON.stringify(tokens); // authenticated.toString();
        persistence.store(AUTHENTICATION.PersistenceKey, tokensStringified);
        setTokens(tokens);
        setAuthenticated(AUTHENTICATION.AUTHENTICATED);
    }

    const logOut = async () => {
        await persistence.remove(AUTHENTICATION.PersistenceKey);
        setAuthenticated(AUTHENTICATION.UNAUTHENTICATED);
        setTokens(AUTHENTICATION.TOKENS);
    }

    React.useEffect(() => {

        const checkAuthenticated = async () => {
            // await persistence.remove(AUTHENTICATION.PersistenceKey);
            const tokens = await persistence.retreive(AUTHENTICATION.PersistenceKey);
            if (typeof tokens === "string") {
                const jsonAuthenticated = JSON.parse(tokens);
                setAuthenticated(true);
                setTokens(jsonAuthenticated);
            }

        };

        checkAuthenticated();

    }, []);


    return (
        <AuthenticationContext.Provider value={{
            authenticated,
            tokens,
            setAuthenticated,
            setTokens: setPersistAuthentication,
            logOut,
        }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export const useAuthentication = () => React.useContext(AuthenticationContext);
