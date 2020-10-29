
import Container from 'components/atoms/Container';
import React from 'react';
import { View, Text } from 'react-native';
import useSWR from 'swr'
import { ICoordination } from './Profile';
import { fetcherWeatherDetails } from 'services/weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from 'env';
import getPlatformTarget from 'utils/screen';
import Spacer from 'components/atoms/Spacer';

interface IWeatherProps {
    coordinate: ICoordination,
}

const Weather = ({ coordinate }: IWeatherProps) => {
    const url = `${WEATHER_API_URL}?appid=${WEATHER_API_KEY}&lat=${coordinate.latitude}&lon=${coordinate.longitude}`
    const { data } = useSWR(url, fetcherWeatherDetails);

    let today = new Date().toLocaleDateString();
    const isMobile = getPlatformTarget() === "mobile";

    console.log("data: ", data);
    

    return (
        <Container>
            <View style={{
                padding: 24
            }}>
                <Text style={{
                    textAlign: "right",
                    fontSize: 32
                }}>
                    {today}
                </Text>
                <View style={{
                    justifyContent: "center",
                    height: "100%"
                }}>
                    {data && data.main && (
                        <View>
                            {!isMobile && (
                                <Spacer height={15} />
                            )}
                            <Text style={{
                                textAlign: "center",
                                fontSize: 80
                            }}>
                                F{`${data.main.temp}°`}
                            </Text>
                            {!isMobile && (
                                <>
                                    <Spacer height={15} />
                                    <Text style={{
                                        textAlign: "right",
                                        fontSize: 24
                                    }}>
                                        Description: Sky is clear
                                    </Text>
                                    <Text style={{
                                        textAlign: "right",
                                        fontSize: 24
                                    }}>
                                        Main: Clear
                                    </Text>
                                    <Text style={{
                                        textAlign: "right",
                                        fontSize: 24
                                    }}>
                                        Pressure: {data.main.pressure}
                                    </Text>

                                    <Text style={{
                                        textAlign: "right",
                                        fontSize: 24
                                    }}>
                                        Humidity: {data.main.humidity}
                                    </Text>
                                </>
                            )}
                        </View>

                    )}
                </View>
            </View>
        </Container>
    )
};

export default Weather