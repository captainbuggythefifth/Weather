import React from 'react';
import getPlatformTarget from '../../utils/screen';
import LoginButtonLarge from './LoginButtonLarge';
import LoginButtonMobile from './LoginButtonMobile';

export const loginButtonText = "LOG IN WITH GITHUB"

const LoginButton = () => {
    
    const isMobile = getPlatformTarget() === "mobile";

    return (
        <>
            {isMobile && (
                <LoginButtonMobile title={loginButtonText} />
            )}
            {!isMobile && (
                <LoginButtonLarge title={loginButtonText} />
            )}
        </>
    )
};

export default LoginButton