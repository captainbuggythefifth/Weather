import React from 'react';
import Authenticated from './Authenticated';
import Unauthenticated from './Unauthenticated';
import { useAuthentication } from 'contexts/Authentication';

const Navigation = () => {
    const { authenticated } = useAuthentication();
    const isAuthenticated = authenticated;
    return (
        <>
            {isAuthenticated && (
                <Authenticated />
            )}
            {!isAuthenticated && (
                <Unauthenticated />
            )}
        </>
    )
};

export default Navigation