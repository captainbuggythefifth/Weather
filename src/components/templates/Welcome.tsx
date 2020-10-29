import React from 'react';
import HelloWorld from '../molecules/HelloWorld';
import Button from '../atoms/Button';
import { StyleSheet, View } from 'react-native';
import Container from '../atoms/Container';
import getPlatformTarget from '../../utils/screen';
import LoginButton from '../molecules/LoginButton';



const Welcome = () => {
    return (
        <Container>
            <HelloWorld />
        </Container>
    )
};

export default Welcome