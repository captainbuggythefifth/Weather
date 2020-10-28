
import Container from 'components/atoms/Container';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import jwtDecode from "jwt-decode";
import { useAuthentication } from 'contexts/Authentication';
import ProfileImage from 'components/molecules/ProfileImage';
import Spacer from 'components/atoms/Spacer';
import { getGitHubUserDetails } from 'services/github';

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

interface IGithubUser {
    html_url: string
}

const githubUrl = "https://api.github.com/users/"

const styles = StyleSheet.create({
    center: {
        alignContent: "center",
        alignItems: "center"
    }
})

const Profile = () => {
    const { tokens } = useAuthentication();
    const [ user, setUser ] = useState<null | IGithubUser>(null)
    const decoded = jwtDecode(tokens.idToken) as IDToken;

    useEffect(() => {
        const getUser = async () => {
            const userDetails = await getGitHubUserDetails(decoded.nickname);

            if (userDetails) {
                setUser(userDetails.response.data)
            }
        };

        getUser()

        return () => {
            
        }
    }, [decoded.nickname])

    return (
        <Container>
            <Spacer height={5} />
            <View style={styles.center}>
                <ProfileImage link={decoded.picture} />
            </View>
            <Spacer height={5} />
            <View style={styles.center}>
                <Text style={{
                    fontSize: 32,
                    fontWeight: "500"
                }}>
                    {decoded.name}
                </Text>
            </View>
            <Spacer height={3} />
            <View style={styles.center}>
                <Text style={{
                    fontSize: 24,
                    color: "blue"
                }}>
                    {user?.html_url}
                </Text>
            </View>
        </Container>
    )
};

export default Profile