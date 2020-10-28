import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Welcome from './components/templates/Welcome';
import Button from './components/atoms/Button';


import { Auth0Provider } from '@auth0/auth0-react';
import getPlatformTarget from './utils/screen';
import { AUTH0_DOMAIN, AUTH0_DOMAIN_CLIENT_ID } from './env';
// declare const global: {HermesInternal: null | {}};

const isMobile = getPlatformTarget() === "mobile";

const App = () => {
    return (
        <>
            {isMobile && (
                <Welcome />
            )}
            {!isMobile && (
                <Auth0Provider
                    domain={AUTH0_DOMAIN}
                    clientId={AUTH0_DOMAIN_CLIENT_ID}
                    redirectUri={"http://localhost:3000"}
                >
                    <Welcome />
                </Auth0Provider>
            )}

        </>
    );
};

export default App;
