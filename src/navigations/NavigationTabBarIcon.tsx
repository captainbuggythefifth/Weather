import React from 'react';
import { Text } from 'react-native';

interface INavigationTabBarIconProps {
    name: string,
    size: number,
    color: string
}

const NavigationTabBarIcon = ({ name, size, color }: INavigationTabBarIconProps) => {
    return (
        <Text>
            {name}
        </Text>
    );
};

export default NavigationTabBarIcon