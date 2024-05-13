import React from "react";

import type {
    StyleProp,
    ViewStyle,
    ViewProps,
    ImageSourcePropType,
} from "react-native";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import Constants from "expo-constants";
import { AnimatedProps } from "react-native-reanimated";
import { CarouselImageItem } from "./CarouselImageItem";
import { JamMem } from "../../types/custom";

interface CarouselItemProps extends AnimatedProps<ViewProps> {
    style?: StyleProp<ViewStyle>;
    index?: number;
    pretty?: boolean;
    img?: ImageSourcePropType;
    jamMem: JamMem;
}

const CarouselItem: React.FC<CarouselItemProps> = (
    props: CarouselItemProps
) => {
    const { style, index, pretty, img, jamMem, ...animatedViewProps } = props;
    const enablePretty = Constants?.expoConfig?.extra?.enablePretty || false;
    const [isPretty, setIsPretty] = React.useState(pretty || enablePretty);

    return (
        <LongPressGestureHandler
            onActivated={() => {
                setIsPretty(!isPretty);
            }}
        >
            <Animated.View style={{ flex: 1 }} {...animatedViewProps}>
                {isPretty || img ? (
                    <CarouselImageItem
                        style={style}
                        index={index}
                        img={img}
                        jamMem={jamMem}
                    />
                ) : (
                    <CarouselImageItem
                        style={style}
                        index={index}
                        jamMem={jamMem}
                    />
                )}
            </Animated.View>
        </LongPressGestureHandler>
    );
};

export default CarouselItem;
