import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '../atoms/Button';

interface ILoginButtonLargeProps {
    title: string
}

const LoginButtonLarge = ({title}: ILoginButtonLargeProps) => {
    const {
        loginWithRedirect,
    } = useAuth0();

    return (
        <Button onPress={loginWithRedirect}>{title}</Button>
    )
};

export default LoginButtonLarge