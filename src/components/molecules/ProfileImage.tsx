import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { getEquivalentHeight } from 'utils/screen';

interface IProfileImageProps {
    link: string
}

const size = getEquivalentHeight(24);

const styles = StyleSheet.create({
    image: {
        height: size,
        width: size,
        borderRadius: size / 2
    }
})

const ProfileImage = ({ link }: IProfileImageProps) => {
    return <Image source={{
        uri: link
    }} style={styles.image} />
};

export default ProfileImage