
import Container from 'components/atoms/Container';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import jwtDecode from "jwt-decode";
import { useAuthentication } from 'contexts/Authentication';
import ProfileImage from 'components/molecules/ProfileImage';
import Spacer from 'components/atoms/Spacer';

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
    const [ user, serUser ] = useState<null | IGithubUser>(null)
    const decoded = jwtDecode(tokens.idToken) as IDToken;

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
            <View style={styles.center}>
                <Text style={{
                    fontSize: 24
                }}>
                    {decoded.nickname}
                </Text>
            </View>
        </Container>
    )
};

export default Profile