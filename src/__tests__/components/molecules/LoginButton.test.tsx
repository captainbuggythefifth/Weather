import React from 'react';
import { RenderAPI, render } from '@testing-library/react-native'
import LoginButton, { loginButtonText } from '../../../components/molecules/LoginButton';


describe('LoginButton render', () => {
    let wrapper: RenderAPI;

    beforeEach(() => {
        wrapper = render(<LoginButton />)
    });

    it('should render loginButtonText', () => {
        expect(wrapper.getAllByText(loginButtonText)).toHaveLength(1);
    });
});
