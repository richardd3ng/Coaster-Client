import { Image } from "expo-image";
import { StyleProp, ViewStyle } from "react-native";
import { Text, View } from "react-native";

import {
    BottomSheetType,
    useBottomSheet,
} from "../../../hooks/context/BottomSheetContext";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import createStyles from "./styles";
import { JamMemMetadataFragment } from "../../../gql/graphql";
import { ModalType, useModal } from "../../../hooks/context/ModalContext";
import { dispatchSetSelectedJamMemId } from "../../../state/storeUtils";
import { useMapContext } from "../../../hooks/context/MapContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { DEFAULT_JAM_MEM_COVER_URI } from "../../../constants/defaults";

interface CarouselImageItemProps {
    style?: StyleProp<ViewStyle>;
    jamMem: JamMemMetadataFragment;
}

export const CarouselImageItem: React.FC<CarouselImageItemProps> = ({
    jamMem,
    ...props
}: CarouselImageItemProps) => {
    const styles = useThemeAwareObject(createStyles);
    const { close } = useBottomSheet();
    const { present, setSnapIndex } = useModal();
    const { setClusterFilter } = useMapContext();

    const JamSessionImageItemText = () => {
        return (
            <View style={styles.textContainer}>
                <Text style={styles.nameText}>{jamMem.name}</Text>
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
        dispatchSetSelectedJamMemId(jamMem._id);
        setClusterFilter({
            type: "jamMem",
            value: jamMem._id,
        });
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
                source={
                    jamMem.coverUrl
                        ? {
                              uri: jamMem.coverUrl,
                          }
                        : DEFAULT_JAM_MEM_COVER_URI
                }
            />
            <JamSessionImageItemText />
        </CustomPressable>
    );
};
