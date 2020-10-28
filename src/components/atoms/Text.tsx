import React from 'react';
import { Text as ThirdPartyText, TextProps } from 'react-native-elements';

export interface ITextProps extends TextProps {}

const Text = (props: ITextProps) => {
    return (
        <ThirdPartyText {...props} />
    )
};

export default Text