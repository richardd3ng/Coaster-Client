import React from "react";

import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";

export interface CustomPressableProps extends PressableProps {
    activeOpacity?: number;
    style?: StyleProp<ViewStyle>;
}

const CustomPressable: React.FC<CustomPressableProps> = ({
    activeOpacity = 0.5,
    style,
    ...props
}) => {
    return (
        <Pressable
            style={({ pressed }) => [
                { opacity: pressed ? activeOpacity : 1.0 },
                style,
            ]}
            {...props}
        />
    );
};

export default CustomPressable;
