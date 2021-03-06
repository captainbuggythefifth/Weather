
import Container from 'components/atoms/Container';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import getPlatformTarget from 'utils/screen';
import Welcome from './Welcome';

const styles = StyleSheet.create({
    center: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "flex-end",
        height: getPlatformTarget() === "large" ? "inherit" : "100%"
    }
});

const Home = () => {
    return (
        <Container>
            <View style={styles.center}>
                <View></View>
            <Welcome />
            </View>
        </Container>
    )
};

export default Home