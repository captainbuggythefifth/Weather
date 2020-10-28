import React from 'react';
import HelloWorld from '../molecules/HelloWorld';
import Button from '../atoms/Button';
import { View } from 'react-native';
import Container from '../atoms/Container';
import getPlatformTarget from '../../utils/screen';


const Welcome = () => {
    return (
        <Container>
            <View style={{
                alignItems: "center",
                justifyContent: "space-evenly",
                height: getPlatformTarget() === "large" ? "inherit" : "100%"
            }}>
                <View>
                    <HelloWorld />
                </View>
                <View>
                    <Button>alalal</Button>
                </View>
            </View>
        </Container>
    )
};

export default Welcome