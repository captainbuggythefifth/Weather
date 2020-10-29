import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '../atoms/Button';
import { useAuthentication } from 'contexts/Authentication';

interface ILoginButtonLargeProps {
    title: string
}

const LoginButtonLarge = ({ title }: ILoginButtonLargeProps) => {
    const {
        loginWithRedirect,
        getIdTokenClaims,
        isAuthenticated,
        getAccessTokenSilently,
        getAccessTokenWithPopup,
        logout
    } = useAuth0();

    const { setTokens } = useAuthentication()

    const getClaims = async () => {
        const result = await getIdTokenClaims();

        if (result && result.__raw) {
            setTokens({
                idToken: result.__raw
            })
        }
    }

    getClaims();

    return (
        <Button onPress={loginWithRedirect}>{title}</Button>
    )
};

export default LoginButtonLarge