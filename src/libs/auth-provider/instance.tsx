import AuthProvider from "./AuthProvider";
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
    domain: 'gaudcaptain.au.auth0.com',
    clientId: 'HEBFNvMhp2djP281aj2cxsTKEUnjurAL',
});

const instance = new AuthProvider(auth0);

export default instance