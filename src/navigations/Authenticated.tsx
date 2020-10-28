import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from 'components/templates/Profile';
import Home from 'components/templates/Home';
import Weather from 'components/templates/Weather';
import getPlatformTarget from 'utils/screen';

const Tab = createBottomTabNavigator();

const Authenticated = () => {
    const isMobile = getPlatformTarget() === "mobile";
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    

                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                    showLabel: true,
                    style: {
                        backgroundColor: "transparent",
                        height: 80,
                    },
                    tabStyle: {
                        position: isMobile ? undefined : "relative",
                        alignContent: "space-around"
                    },
                    labelStyle: {
                        fontSize: isMobile ? 16 : 24
                    }
                }}
            >
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Weather" component={Weather} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Authenticated