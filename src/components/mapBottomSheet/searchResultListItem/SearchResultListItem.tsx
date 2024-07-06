import { Divider } from "@ui-kitten/components";
import { Region } from "react-native-maps";
import { Text, View } from "react-native";

import {
    BottomSheetType,
    useBottomSheet,
} from "../../../hooks/context/BottomSheetContext";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import createStyles from "./styles";
import IconButton from "../../shared/iconButton/IconButton";
import { Place } from "../../../api/placesAPI";
import { dispatchSetCurrentRegion } from "../../../state/storeUtils";
import { useMapContext } from "../../../hooks/context/MapContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface SearchResultListItemProps {
    item: Place;
}

const SearchResultListItem: React.FC<SearchResultListItemProps> = ({
    item,
}: SearchResultListItemProps) => {
    const styles = useThemeAwareObject(createStyles);
    const { setFollowsUserLocation } = useMapContext();
    const { setSnapIndex } = useBottomSheet();

    const handleSelect = () => {
        setFollowsUserLocation(false);
        const region: Region = {
            latitude: item.latitude,
            longitude: item.longitude,
            latitudeDelta: item.latitudeDelta,
            longitudeDelta: item.longitudeDelta,
        };
        dispatchSetCurrentRegion(region);
        setSnapIndex(BottomSheetType.Map, 0);
    };

    const LocationIcon = () => {
        return (
            <IconButton
                iconName="pin"
                iconColor="green"
                style={styles.iconButton}
            />
        );
    };

    return (
        <CustomPressable onPress={handleSelect}>
            <View style={styles.listItemContainer}>
                <LocationIcon />
                <View style={styles.textContainer}>
                    <Text style={styles.placeText}>{item.name}</Text>
                    <Text style={styles.addressText}>{item.address}</Text>
                </View>
            </View>
            <Divider style={styles.divider} />
        </CustomPressable>
    );
};

export default SearchResultListItem;