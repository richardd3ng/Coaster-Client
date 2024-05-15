import { useContext } from "react";

import { Region } from "react-native-maps";
import { Text, TouchableOpacity, View } from "react-native";
import { Button, Divider, Icon } from "@ui-kitten/components";

import MapBottomSheetContext, {
    MapBottomSheetContextType,
} from "../../../context/mapBottomSheetContext";
import MapContext, { MapContextType } from "../../../context/mapContext";
import { PlaceData } from "../../../utils/locationUtils";
import styles from "./styles";

interface SearchResultListItemProps {
    item: PlaceData;
}

const LocationIcon = () => {
    return (
        <Button
            style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "white",
            }}
            appearance="ghost"
            accessoryLeft={<Icon name={"pin"} fill="green" />}
        />
    );
};

const SearchResultListItem: React.FC<SearchResultListItemProps> = (
    props: SearchResultListItemProps
) => {
    const { setRegion, setFollowsUserLocation } =
        useContext<MapContextType>(MapContext);
    const { setSnapPointIndex } = useContext<MapBottomSheetContextType>(
        MapBottomSheetContext
    );

    const handleSelect = () => {
        setFollowsUserLocation(false);
        const region: Region = {
            latitude: props.item.coords.latitude,
            longitude: props.item.coords.longitude,
            latitudeDelta: props.item.latitudeDelta,
            longitudeDelta: props.item.longitudeDelta,
        };
        console.log("traveling to:", region);
        setRegion(region);
        setSnapPointIndex(0);
    };

    return (
        <TouchableOpacity onPress={handleSelect}>
            <View style={styles.searchResultsItemContainer}>
                <LocationIcon />
                <View
                    style={{
                        paddingLeft: 16,
                        justifyContent: "center",
                        paddingRight: 32,
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 16 }}>{props.item.name}</Text>
                        <Text style={{ fontSize: 14 }}>
                            {props.item.address}
                        </Text>
                    </View>
                </View>
            </View>
            <Divider style={{ backgroundColor: "gray", marginLeft: 72 }} />
        </TouchableOpacity>
    );
};

export default SearchResultListItem;
