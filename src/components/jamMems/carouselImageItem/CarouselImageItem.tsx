import FastImage from "react-native-fast-image";
import { StyleProp, ViewStyle } from "react-native";
import { Text, View } from "react-native";

import CustomPressable from "../../shared/customPressable/CustomPressable";
import createStyles from "./styles";
import { DEFAULT_JAM_MEM_COVER_URI } from "../../../constants/assets";
import { JamMemMetadataFragment } from "../../../gql/graphql";
import { useMapBottomSheet } from "../../../hooks/context/BottomSheetContext";
import { useMapContext } from "../../../hooks/context/MapContext";
import { useJamMemModal } from "../../../hooks/context/ModalContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface CarouselImageItemProps {
    style?: StyleProp<ViewStyle>;
    jamMem: JamMemMetadataFragment;
}

export const CarouselImageItem: React.FC<CarouselImageItemProps> = ({
    jamMem,
    ...props
}: CarouselImageItemProps) => {
    const styles = useThemeAwareObject(createStyles);
    const { close: closeMapBottomSheet } = useMapBottomSheet();
    const { present, setSnapIndex } = useJamMemModal();
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
        setClusterFilter({
            type: "jamMem",
            value: jamMem._id,
        });
        closeMapBottomSheet();
        present({
            jamMemId: jamMem._id,
        });
        setSnapIndex(1);
    };

    return (
        <CustomPressable
            onPress={onPress}
            style={[styles.imageItemContainer, props.style]}
        >
            <FastImage
                source={
                    jamMem.coverUrl
                        ? {
                              uri: jamMem.coverUrl,
                          }
                        : DEFAULT_JAM_MEM_COVER_URI
                }
                style={styles.image}
            />
            <JamSessionImageItemText />
        </CustomPressable>
    );
};
