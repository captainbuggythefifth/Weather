import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from 'components/templates/SignIn';

const Stack = createStackNavigator();

const Unauthenticated = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName="SignIn"
                headerMode="screen"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "transparent",
                        height: 64
                    },
                    headerTintColor: '#fff',
                    headerTitle: "",
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: "transparent"
                    },
                }}
            >
                <Stack.Screen name="SignIn" component={SignIn} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Unauthenticated