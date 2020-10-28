import React from 'react';
import { StyleSheet, Text } from 'react-native';
// import Text from 'components/atoms/Text';


export const helloWorldText = "Hello, World!";


const HelloWorld = () => {
    return (
        <Text style={{
            fontSize: 40,
            fontWeight: "500"
        }}>
            {helloWorldText}
        </Text>
    )
};

export default HelloWorld