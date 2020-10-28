import React from 'react';
import Authenticated from './Authenticated';
import Unauthenticated from './Unauthenticated';


const Navigation = () => {
    const isAuthenticated = true;
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