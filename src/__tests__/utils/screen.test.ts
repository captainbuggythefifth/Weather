import React from 'react';
import { Platform } from 'react-native';
import { SCREEN_TARGET } from '../../constants';
import getPlatformTarget from '../../utils/screen';



describe('screen', () => {
    it('should get large from web', () => {
        Platform.OS = "web"
        const result = getPlatformTarget();
        expect(result).toEqual(SCREEN_TARGET.LARGE)
    });

    it('should get large from macos', () => {
        Platform.OS = "macos"
        const result = getPlatformTarget();
        expect(result).toEqual(SCREEN_TARGET.LARGE)
    });

    it('should get mobile from ios', () => {
        Platform.OS = "ios"
        const result = getPlatformTarget();
        expect(result).toEqual(SCREEN_TARGET.MOBILE)
    });

    it('should get mobile from android', () => {
        Platform.OS = "android"
        const result = getPlatformTarget();
        expect(result).toEqual(SCREEN_TARGET.MOBILE)
    })
})