import React from 'react';
// import 'react-native-gesture-handler';

import { Auth0Provider } from '@auth0/auth0-react';
import getPlatformTarget from './utils/screen';
import { AUTH0_DOMAIN, AUTH0_DOMAIN_CLIENT_ID } from './env';
import Unauthenticated from './navigations/Unauthenticated';
import Navigation from 'navigations/Navigation';
import { View } from 'react-native';
import { AuthenticationProvider } from 'contexts/Authentication';


declare const global: { HermesInternal: null | {} };

const isMobile = getPlatformTarget() === "mobile";


const App = () => {
    return (
        <View style={{
            height: getPlatformTarget() === "large" ? "100vh" : "100%"
        }}>
            <AuthenticationProvider>
                {isMobile && (
                    <Navigation />
                )}
                {!isMobile && (
                    <Auth0Provider
                        domain={AUTH0_DOMAIN}
                        clientId={AUTH0_DOMAIN_CLIENT_ID}
                        redirectUri={"http://localhost:3000"}
                    >
                        <Navigation />
                    </Auth0Provider>
                )}
            </AuthenticationProvider>
        </View>
    );
};

export default App;
