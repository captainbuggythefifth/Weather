import React from 'react';
import { View } from 'react-native';
import { getEquivalentHeight } from 'utils/screen';

export const spacerTestID = "spacerTestID";

interface ISpacerProps {
    height?: number,
    isFixed?: boolean
}

const Spacer = ({height = 1, isFixed = false}: ISpacerProps) => {
    const styleHeight = isFixed ? height : getEquivalentHeight(height);
    return (
        <View
            style={{
                height: styleHeight
            }}
            testID={spacerTestID}
        />
    )
};

export default Spacer