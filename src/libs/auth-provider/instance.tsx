import AuthProvider from "./AuthProvider";
import Auth0 from 'react-native-auth0';
import { AUTH0_DOMAIN, AUTH0_DOMAIN_CLIENT_ID } from "../../env";

const auth0 = new Auth0({
    domain: AUTH0_DOMAIN,
    clientId: AUTH0_DOMAIN_CLIENT_ID
});

const instance = new AuthProvider(auth0);

export default instance