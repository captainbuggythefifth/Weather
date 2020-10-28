export const PersistenceKey = "AuthenticationPersistenceKey";
export const AUTHENTICATED = true;
export const UNAUTHENTICATED = false
export const DEFAULT = UNAUTHENTICATED;
export const TOKENS: IAuthenticationTokens = {
    accessToken: "",
    refreshToken: "",
    idToken: ""
} 
export interface IAuthenticationTokens {
    accessToken: string,
    refreshToken: string,
    idToken: string
}
export const TYPE = typeof DEFAULT