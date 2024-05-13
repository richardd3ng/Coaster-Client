import React from "react";

import type {
    StyleProp,
    ViewStyle,
    ImageURISource,
    ImageSourcePropType,
} from "react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";

import { JamMem } from "../../types/custom";
import styles from "./styles";

interface CarouselImageItemProps {
    style?: StyleProp<ViewStyle>;
    index?: number;
    showIndex?: boolean;
    img?: ImageSourcePropType;
    jamMem: JamMem;
}

export const CarouselImageItem: React.FC<CarouselImageItemProps> = (
    props: CarouselImageItemProps
) => {
    const index = props.index ?? 0;
    const source = React.useRef<ImageURISource>({
        uri: `https://picsum.photos/id/${index}/400/300`,
    }).current;

    const JamSessionImageItemText = () => {
        return (
            <View
                style={{
                    flexDirection: "column",
                    alignSelf: "flex-start",
                }}
            >
                <Text style={styles.titleText}>{props.jamMem.title}</Text>
                <Text style={styles.placeText}>{props.jamMem.place}</Text>
                <Text
                    style={styles.dateText}
                >{`${props.jamMem.start.toDateString()} - ${props.jamMem.end.toDateString()}`}</Text>
            </View>
        );
    };

    return (
        <TouchableOpacity
            onPress={() => console.log("pressed:", props.jamMem.title)}
            style={[styles.imageItemContainer, props.style]}
        >
            <Image
                cachePolicy={"memory-disk"}
                key={index}
                style={styles.image}
                source={props.img ?? source}
            />
            <JamSessionImageItemText />
        </TouchableOpacity>
    );
};
