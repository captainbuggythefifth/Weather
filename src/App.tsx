import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

// declare const global: {HermesInternal: null | {}};

const App = () => {
    return (
        <SafeAreaView >
            <View>
                <Text style={{
                    fontSize: 20,
                }}>
                    Hello, World!
                </Text>
            </View>
        </SafeAreaView>

    );
};

export default App;
