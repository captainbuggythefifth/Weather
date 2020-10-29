
import Container from 'components/atoms/Container';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import jwtDecode from "jwt-decode";
import { useAuthentication } from 'contexts/Authentication';
import ProfileImage from 'components/molecules/ProfileImage';
import Spacer from 'components/atoms/Spacer';
import { fetcherGitHubUserDetails } from 'services/github';
import useSWR from 'swr'
import Button from 'components/atoms/Button';
import Geolocation from '@react-native-community/geolocation';
import { useAuth0 } from '@auth0/auth0-react';

interface IDToken {
    aud: string,
    exp: number,
    iat: number,
    iss: string,
    name: string,
    nickname: string,
    picture: string,
    sub: string
}

export interface ICoordination {
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
}

const styles = StyleSheet.create({
    center: {
        alignContent: "center",
        alignItems: "center"
    },
    userName: {
        fontSize: 32,
        fontWeight: "500"
    },
    userUrl: {
        textAlign: "center",
        fontSize: 24,
        color: "blue"
    },
    coordination: {
        textAlign: "center",
        fontSize: 22,
        color: "blue"
    }
});

const Profile = () => {
    const { tokens, logOut } = useAuthentication();
    const decoded = jwtDecode(tokens.idToken) as IDToken;
    const [coordination, setCoordination] = useState<ICoordination | null>(null)
    const { data } = useSWR(`${decoded.nickname}`, fetcherGitHubUserDetails);
    const handleCheckLocation = () => {
        Geolocation.getCurrentPosition(info => {
            setCoordination(info.coords)
        });
    }

    const { logout
    } = useAuth0()

    return (
        <Container>
            <ScrollView>
                <Spacer height={5} />
                <View style={styles.center}>
                    <ProfileImage link={decoded.picture} />
                </View>
                <Spacer height={5} />
                <View style={styles.center}>
                    <Text style={styles.userName}>
                        {decoded.name}
                    </Text>
                </View>
                <Spacer height={3} />
                <View style={styles.center}>
                    <Text style={styles.userUrl}>
                        {data?.html_url}
                    </Text>
                </View>
                <Spacer height={9} />
                <View>
                    <Text style={styles.coordination}>
                        {coordination?.latitude ? `Latitude: ${coordination?.latitude}` : ""}
                    </Text>
                    <Spacer height={1} />
                    <Text style={styles.coordination}>
                        {coordination?.longitude ? `Longitude: ${coordination?.longitude}` : ""}
                    </Text>
                </View>
                <Spacer height={9} />
                <View style={{
                    padding: 20
                }}>
                    <Button onPress={handleCheckLocation}>
                        Check My Location
                </Button>
                </View>
                <View style={{
                    padding: 20
                }}>
                    <Button onPress={
                        async () => {
                            await logOut();
                            logout();
                        }
                    }>
                        Log Out
                </Button>
                </View>
            </ScrollView>
        </Container>
    )
};

export default Profile