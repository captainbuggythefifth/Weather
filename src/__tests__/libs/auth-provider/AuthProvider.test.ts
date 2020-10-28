import React from 'react';
import AuthProvider from "../../../libs/auth-provider/AuthProvider";

describe('AuthProvider', () => {
    let instance: AuthProvider;
    const result = true;
    const webAuth = {
        authorize: jest.fn().mockResolvedValue({
            result
        })
    }
    const auth = {
        webAuth
    }

    beforeEach(() => {
        instance = new AuthProvider(auth);
    });

    it('should match the library set by the constructor', () => {
        const library = instance.getLibrary()
        expect(auth).toEqual(library)
    });

    it('should match the library set by the setLibrary', () => {
        
        const auth1 = jest.fn().mockReturnValue(() => {
            webAuth1: {
                authorize1: jest.fn().mockResolvedValue(() => {
                    result1: true
                })
            }
        });

        instance.setLibrary(auth1)
        const library = instance.getLibrary()
        expect(auth1).toEqual(library)
    });

    it('should execute', async () => {
        const res = await instance.execute();

        expect(res).toEqual({result})        
    });
})