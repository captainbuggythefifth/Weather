import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native';
import getPlatformTarget from '../../utils/screen';

interface IContainerProps {
    children: ReactNode
}

const Container = ({children}: IContainerProps) => {
    return (
        <SafeAreaView style={{
            padding: 16,
            flex: 1,
            height: getPlatformTarget() === "large" ? "100vh" : "100%"
        }}>
            {children}
        </SafeAreaView>
    )
};

export default Container