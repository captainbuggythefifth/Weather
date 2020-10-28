import React from 'react';
import Button from '../atoms/Button';
import Auth from './../../libs/auth-provider/instance';

export const loginButtonText = "LOG IN WITH GITHUB"

const LoginButton = () => {
    const handlePress = async () => {

        const result = await Auth.execute()

        console.log("result: ", result);
        
        
    }
    return (
        <Button onPress={handlePress}>
            {loginButtonText}
        </Button>
    )
};

export default LoginButton