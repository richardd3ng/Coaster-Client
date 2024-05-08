import React from "react";

import type {
    StyleProp,
    ViewStyle,
    ImageURISource,
    ImageSourcePropType,
} from "react-native";
import { ActivityIndicator, Text, View } from "react-native";
import { Image } from "expo-image";

import styles from "./styles";

interface CarouselImageItemProps {
    style?: StyleProp<ViewStyle>;
    index?: number;
    showIndex?: boolean;
    img?: ImageSourcePropType;
}

export const CarouselImageItem: React.FC<CarouselImageItemProps> = ({
    style,
    index: _index,
    showIndex = true,
    img,
}) => {
    const index = _index ?? 0;
    const source = React.useRef<ImageURISource>({
        uri: `https://picsum.photos/id/${index}/400/300`,
    }).current;

    return (
        <View style={[styles.imageItemContainer, style]}>
            <ActivityIndicator size="small" />
            <Image
                cachePolicy={"memory-disk"}
                key={index}
                style={styles.image}
                source={img ?? source}
            />
            {showIndex && <Text style={styles.text}>{index}</Text>}
        </View>
    );
};
