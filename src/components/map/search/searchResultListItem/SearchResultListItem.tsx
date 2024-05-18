import { Divider } from "@ui-kitten/components";
import { Region } from "react-native-maps";
import { Text, TouchableOpacity, View } from "react-native";

import {
    BottomSheetType,
    useBottomSheet,
} from "../../../../hooks/context/BottomSheetContext";
import IconButton from "../../../shared/iconButton/IconButton";
import { PlaceData } from "../../../../api/locationAPI";
import styles from "./styles";
import { useMapContext } from "../../../../hooks/context/MapContext";

interface SearchResultListItemProps {
    item: PlaceData;
}

const LocationIcon = () => {
    return (
        <IconButton
            iconName="pin"
            iconColor="green"
            style={{ backgroundColor: "white" }}
        />
    );
};

const SearchResultListItem: React.FC<SearchResultListItemProps> = (
    props: SearchResultListItemProps
) => {
    const { setRegion, setFollowsUserLocation } = useMapContext();
    const { setSnapIndex } = useBottomSheet();

    const handleSelect = () => {
        setFollowsUserLocation(false);
        const region: Region = {
            latitude: props.item.coords.latitude,
            longitude: props.item.coords.longitude,
            latitudeDelta: props.item.latitudeDelta,
            longitudeDelta: props.item.longitudeDelta,
        };
        setRegion(region);
        setSnapIndex(BottomSheetType.Map, 0);
    };

    return (
        <TouchableOpacity onPress={handleSelect}>
            <View style={styles.listItemContainer}>
                <LocationIcon />
                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.placeText}>{props.item.name}</Text>
                        <Text style={styles.addressText}>
                            {props.item.address}
                        </Text>
                    </View>
                </View>
            </View>
            <Divider style={styles.divider} />
        </TouchableOpacity>
    );
};

export default SearchResultListItem;
