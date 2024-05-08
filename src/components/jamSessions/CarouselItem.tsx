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

interface CarouselItemProps extends AnimatedProps<ViewProps> {
    style?: StyleProp<ViewStyle>;
    index?: number;
    pretty?: boolean;
    showIndex?: boolean;
    img?: ImageSourcePropType;
}

const CarouselItem: React.FC<CarouselItemProps> = (props) => {
    const {
        style,
        showIndex = true,
        index,
        pretty,
        img,
        testID,
        ...animatedViewProps
    } = props;
    const enablePretty = Constants?.expoConfig?.extra?.enablePretty || false;
    const [isPretty, setIsPretty] = React.useState(pretty || enablePretty);

    return (
        <LongPressGestureHandler
            onActivated={() => {
                setIsPretty(!isPretty);
            }}
        >
            <Animated.View
                testID={testID}
                style={{ flex: 1 }}
                {...animatedViewProps}
            >
                {isPretty || img ? (
                    <CarouselImageItem
                        style={style}
                        index={index}
                        showIndex={typeof index === "number" && showIndex}
                        img={img}
                    />
                ) : (
                    <CarouselImageItem style={style} index={index} />
                )}
            </Animated.View>
        </LongPressGestureHandler>
    );
};

export default CarouselItem;
