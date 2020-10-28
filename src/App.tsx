import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

// declare const global: {HermesInternal: null | {}};

const App = () => {
    return (
        <SafeAreaView>
            <View>
                <Text style={{
                    fontSize: 20,
                    color: "black",
                    fontWeight: "bold"
                }}>
                    Hello, World!
                </Text>
            </View>
        </SafeAreaView>

    );
};

export default App;
