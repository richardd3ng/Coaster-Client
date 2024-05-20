import { useRef } from "react";

import { Image } from "expo-image";
import { ImageURISource, StyleProp, ViewStyle } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";

import {
    BottomSheetType,
    useBottomSheet,
} from "../../../hooks/context/BottomSheetContext";
import { JamMem } from "../../../types/custom";
import { ModalType, useModal } from "../../../hooks/context/ModalContext";
import { setSelectedJamMemIdState } from "../../../state/storeUtils";
import styles from "./styles";

interface CarouselImageItemProps {
    style?: StyleProp<ViewStyle>;
    jamMem: JamMem;
}

export const CarouselImageItem: React.FC<CarouselImageItemProps> = (
    props: CarouselImageItemProps
) => {
    const source = useRef<ImageURISource>({
        uri: `https://picsum.photos/id/0/400/300`,
    }).current;
    const { close } = useBottomSheet();
    const { present, setSnapIndex } = useModal();

    const JamSessionImageItemText = () => {
        return (
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>{props.jamMem.title}</Text>
                <Text style={styles.placeText}>{props.jamMem.place}</Text>
                <Text style={styles.dateText}>{`${new Date(
                    props.jamMem.startTimestamp
                ).toDateString()} - ${new Date(
                    props.jamMem.endTimestamp
                ).toDateString()}`}</Text>
            </View>
        );
    };

    const onPress = () => {
        setSelectedJamMemIdState(props.jamMem.id);
        close(BottomSheetType.Map);
        present(ModalType.JamMem);
        setSnapIndex(ModalType.JamMem, 1);
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.imageItemContainer, props.style]}
        >
            <Image
                cachePolicy={"memory-disk"}
                style={styles.image}
                source={source}
            />
            <JamSessionImageItemText />
        </TouchableOpacity>
    );
};
