import React from "react";
import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";

interface CustomPressableProps extends PressableProps {
    activeOpacity?: number;
    style?: StyleProp<ViewStyle>;
}

const CustomPressable: React.FC<CustomPressableProps> = ({
    style,
    activeOpacity = 0.5,
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
