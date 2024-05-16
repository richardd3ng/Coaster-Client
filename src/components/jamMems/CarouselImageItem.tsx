import { useRef } from "react";

import type {
    StyleProp,
    ViewStyle,
    ImageURISource,
    ImageSourcePropType,
} from "react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";

import {
    BottomSheetType,
    useBottomSheet,
} from "../../context/BottomSheetContext";
import { JamMem } from "../../types/custom";
import { setSelectedJamMemId } from "../../state/jamMem/jamMemSlice";
import store from "../../state/store";
import styles from "./styles";
import { ModalType, useModal } from "../../context/ModalContext";

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
    const source = useRef<ImageURISource>({
        uri: `https://picsum.photos/id/${index}/400/300`,
    }).current;
    const { presentModal } = useModal();
    const { setSnapIndex: setBottomSheetSnapIndex } = useBottomSheet();

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
                <Text style={styles.dateText}>{`${new Date(
                    props.jamMem.startTimestamp
                ).toDateString()} - ${new Date(
                    props.jamMem.endTimestamp
                ).toDateString()}`}</Text>
            </View>
        );
    };

    return (
        <TouchableOpacity
            onPress={() => {
                setBottomSheetSnapIndex(BottomSheetType.Map, 1);
                store.dispatch({
                    type: setSelectedJamMemId.type,
                    payload: props.jamMem.id,
                });
                presentModal(ModalType.JamMem);
            }}
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
