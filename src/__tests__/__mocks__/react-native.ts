import * as ReactNative from "react-native";

export const Platform = {
    ...ReactNative.Platform,
    OS: "ios",
    Version: 123,
    isTesting: true,
    select: (objs: any) => objs["ios"]
};

export default Object.setPrototypeOf(
    {
        Platform
    },
    ReactNative
);