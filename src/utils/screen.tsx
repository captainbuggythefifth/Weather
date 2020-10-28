import { Platform } from "react-native";
import { SCREEN_TARGET } from "../constants";

import { Dimensions } from "react-native";

const { height } = Dimensions.get('window');

export const getEquivalentHeight = (percentage: number) => {
    return height * (percentage / 100);
}

const getPlatformTarget = (): SCREEN_TARGET.PLATFORM_TARGETS => {
    
    switch(Platform.OS) {
        case "android": case "ios":
            return SCREEN_TARGET.MOBILE
        default:
            return SCREEN_TARGET.LARGE
    }
}

export default getPlatformTarget