import React from 'react'
import { RenderAPI, render, fireEvent } from '@testing-library/react-native'
import Text from 'components/atoms/Text';

describe('Text render', () => {
    let wrapper: RenderAPI;
    const title = "This is the label";
    
    const onPress = jest.fn();
    let props = {
        children: title,
        onPress
    };

    beforeEach(() => {
        wrapper = render(<Text {...props} />)
    });

    it('it should render Text', () => {
        expect(wrapper.getAllByText(title)).toHaveLength(1)
    });
});
