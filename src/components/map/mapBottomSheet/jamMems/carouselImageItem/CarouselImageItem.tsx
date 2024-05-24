import { useRef } from "react";

import { Image } from "expo-image";
import { ImageURISource, StyleProp, ViewStyle } from "react-native";
import { Text, View } from "react-native";

import {
    BottomSheetType,
    useBottomSheet,
} from "../../../../../hooks/context/BottomSheetContext";
import CustomPressable from "../../../../shared/customPressable/CustomPressable";
import createStyles from "./styles";
import { JamMemMetadata } from "../../../../../types/entities";
import { ModalType, useModal } from "../../../../../hooks/context/ModalContext";
import { dispatchSetSelectedJamMemId } from "../../../../../state/storeUtils";
import useThemeAwareObject from "../../../../../hooks/useThemeAwareObject";

interface CarouselImageItemProps {
    style?: StyleProp<ViewStyle>;
    jamMem: JamMemMetadata;
}

export const CarouselImageItem: React.FC<CarouselImageItemProps> = ({
    jamMem,
    ...props
}: CarouselImageItemProps) => {
    const styles = useThemeAwareObject(createStyles);
    const source = useRef<ImageURISource>({
        uri: jamMem.coverImage,
    }).current;
    const { close } = useBottomSheet();
    const { present, setSnapIndex } = useModal();

    const JamSessionImageItemText = () => {
        return (
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>{jamMem.title}</Text>
                <Text style={styles.placeText}>{jamMem.location}</Text>
                <Text style={styles.dateText}>{`${new Date(
                    jamMem.start
                ).toDateString()} - ${new Date(
                    jamMem.end
                ).toDateString()}`}</Text>
            </View>
        );
    };

    const onPress = () => {
        dispatchSetSelectedJamMemId(jamMem.id);
        close(BottomSheetType.Map);
        present(ModalType.JamMem);
        setSnapIndex(ModalType.JamMem, 1);
    };

    return (
        <CustomPressable
            onPress={onPress}
            style={[styles.imageItemContainer, props.style]}
        >
            <Image
                cachePolicy={"memory-disk"}
                style={styles.image}
                source={source}
            />
            <JamSessionImageItemText />
        </CustomPressable>
    );
};
