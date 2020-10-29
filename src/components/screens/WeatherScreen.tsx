
import Container from 'components/atoms/Container';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetcherGitHubUserDetails } from 'services/github';
import useSWR from 'swr'
import Geolocation from '@react-native-community/geolocation';
import { fetcherWeatherDetails } from 'services/weather';
import { ICoordination } from 'components/templates/Profile';
import Weather from 'components/templates/Weather';

const WeatherScreen = () => {

    const [coordination, setCoordination] = useState<ICoordination | null>(null)
    
    useEffect(() => {
        const handleCheckLocation = () => {
            Geolocation.getCurrentPosition(info => {
                console.log("nfo: ", info);
                
                setCoordination(info.coords)
            });
        }

        handleCheckLocation();

        return () => {
            
        }
    }, []);

    

    return (
        <Container>
            {coordination && coordination.latitude && coordination.longitude && (
                <Weather coordinate={coordination} />
            )}
            
        </Container>
    )
};

export default WeatherScreen