import React, { ReactNode } from 'react';
import { SafeAreaView, View } from 'react-native';
import getPlatformTarget from '../../utils/screen';

interface IContainerProps {
    children: ReactNode
}

const Container = ({ children }: IContainerProps) => {
    const isMobile = getPlatformTarget() === "mobile"
    return (
        <SafeAreaView style={{
            padding: isMobile ? 24 : 40,
            flex: 1,
            height: getPlatformTarget() === "large" ? "100vh" : "100%"
        }}>
            {children}
        </SafeAreaView>
    )
};

export default Container