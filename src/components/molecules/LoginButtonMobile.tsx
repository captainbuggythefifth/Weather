import React from 'react';
import Button from '../atoms/Button';
import Auth from './../../libs/auth-provider/instance';

interface ILoginButtonMobileProps {
    title: string
}

const LoginButtonMobile = ({title}: ILoginButtonMobileProps) => {
    const handlePress = async () => {
        const result = await Auth.execute()
        console.log("result: ", result);
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