import React, { ReactNode } from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { SCREEN_TARGET } from '../../constants';
import getPlatformTarget from '../../utils/screen';


export interface IButtonProps {
    children: ReactNode | string | number
}

const styles = StyleSheet.create({
    titleStyle: {
        color: "white",
        fontSize: 32,
        fontWeight: "500"
    },
    buttonStyle: {
        padding: 16,
        backgroundColor: "black"
    },
    button: {
        borderRadius: 16,
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: "black",
        width: getPlatformTarget() === SCREEN_TARGET.LARGE ? "fit-content" : "100%",
    },
    text: {
        color: "white",
        fontSize: 24,
        fontWeight: "400",
        textAlign: "center",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    }
})

const Button = (props: IButtonProps) => {

    return (
        <TouchableOpacity {...props} style={styles.button} >
            <Text style={
                styles.text
            }>
            {props.children}    
            </Text>
            
        </TouchableOpacity>
    )
};


export default Button