import { useAuthentication } from 'contexts/Authentication';
import React from 'react';
import Button from '../atoms/Button';
import Auth from './../../libs/auth-provider/instance';


interface ILoginButtonMobileProps {
    title: string
}

const LoginButtonMobile = ({title}: ILoginButtonMobileProps) => {
    const { setTokens } = useAuthentication();
    const handlePress = async () => {
        const result = await Auth.execute()
        
        const tokens = {
            accessToken: result.accessToken,
            idToken: result.idToken
        };

        await setTokens(tokens);

        // navigate("")
    }
    
    return (
        <>
            <Button onPress={handlePress}>
                {title}
            </Button>
        </>
    )
};

export default LoginButtonMobile