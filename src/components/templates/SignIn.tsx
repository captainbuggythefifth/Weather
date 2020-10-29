import Container from 'components/atoms/Container';
import HelloWorld from 'components/molecules/HelloWorld';
import LoginButton from 'components/molecules/LoginButton';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import getPlatformTarget from 'utils/screen';

const styles = StyleSheet.create({
    center: {
        padding: 24,
        alignItems: "center",
        justifyContent: "space-evenly",
        height: getPlatformTarget() === "large" ? "inherit" : "100%"
    }
});

const SignIn = () => {
    return (
        <Container>
            <View style={styles.center}>
                <HelloWorld />
                <LoginButton />
            </View>
        </Container>

    )
};

export default SignIn