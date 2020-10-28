import React from 'react'
import { RenderAPI, render, fireEvent } from '@testing-library/react-native'
import Button, {IButtonProps } from 'components/atoms/Button';

describe('Button render', () => {
    let wrapper: RenderAPI;
    const title = "This is the label";
    
    const onPress = jest.fn();
    let props: IButtonProps = {
        title,
        onPress
    };

    beforeEach(() => {
        wrapper = render(<Button {...props} />)
    });

    it('it should render Button', () => {
        expect(wrapper.getAllByText(title)).toHaveLength(1)
    });
});

describe('Button interaction', () => {
    let wrapper: RenderAPI;
    const title = "This is the label";
    
    const onPress = jest.fn();
    let props: IButtonProps = {
        title,
        onPress
    };

    beforeEach(() => {
        wrapper = render(<Button {...props} />)
    });

    it('it should call onPress', () => {
        const target = wrapper.getByText(title);
        fireEvent.press(target)
        expect(onPress).toBeCalledTimes(1)
    });
});