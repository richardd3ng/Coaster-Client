import { Divider } from "@ui-kitten/components";
import { Region } from "react-native-maps";
import { Alert, Text, View } from "react-native";

import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import { dispatchSetCurrentRegion } from "../../../state/storeUtils";
import IconButton from "../../shared/iconButton/IconButton";
import { SearchFilterType, SearchResult } from "../../../gql/graphql";
import { SearchResultType } from "../../../gql/graphql";
import { useMapBottomSheet } from "../../../hooks/context/BottomSheetContext";
import { useMapContext } from "../../../hooks/context/MapContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface LocationSearchResultListItemProps {
    item: SearchResult;
}

const LocationSearchResultListItem: React.FC<
    LocationSearchResultListItemProps
> = ({ item }: LocationSearchResultListItemProps) => {
    const styles = useThemeAwareObject(createStyles);
    const { setFollowsUserLocation, clusterFilter, setClusterFilter } =
        useMapContext();
    const { setSnapIndex: setMapBottomSheetSnapIndex } = useMapBottomSheet();

    const handleSelect = () => {
        switch (item.type) {
            case SearchResultType.Place:
                handlePlaceSelect();
                break;
            case SearchResultType.Song:
                handleSongSelect();
                break;
            case SearchResultType.Artist:
                handleArtistSelect();
                break;
        }
        setMapBottomSheetSnapIndex(0);
    };

    const handlePlaceSelect = () => {
        setFollowsUserLocation(false);
        const region: Region = {
            latitude: item.data.latitude,
            longitude: item.data.longitude,
            latitudeDelta: item.data.latitudeDelta,
            longitudeDelta: item.data.longitudeDelta,
        };
        dispatchSetCurrentRegion(region);
    };

    const handleSongSelect = () => {
        if (clusterFilter.type !== "social") {
            Alert.alert(
                "Error",
                "Should not be able to search while a Jam Mem is selected"
            );
            return;
        }
        setClusterFilter({
            type: "social",
            value: clusterFilter.value,
            searchFilter: {
                type: SearchFilterType.Song,
                value: item.name,
            },
        });
    };

    const handleArtistSelect = () => {
        if (clusterFilter.type !== "social") {
            Alert.alert(
                "Error",
                "Should not be able to search while a Jam Mem is selected"
            );
            return;
        }
        setClusterFilter({
            type: "social",
            value: clusterFilter.value,
            searchFilter: {
                type: SearchFilterType.Artist,
                value: item.name,
            },
        });
    };

    const Icon = () => {
        return (
            <IconButton
                iconName={
                    item.type === SearchResultType.Place
                        ? "pin"
                        : item.type === SearchResultType.Song
                        ? "music"
                        : "person"
                }
                iconColor={
                    item.type === SearchResultType.Place
                        ? "green"
                        : item.type === SearchResultType.Song
                        ? "royalblue"
                        : "black"
                }
                style={styles.iconButton}
            />
        );
    };

    return (
        <CustomPressable onPress={handleSelect}>
            <View style={styles.listItemContainer}>
                <Icon />
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{item.name}</Text>
                    <Text style={styles.descriptionText}>
                        {item.type === SearchResultType.Place
                            ? item.data.address
                            : item.type === SearchResultType.Song
                            ? item.data.artists.join(", ")
                            : SearchResultType.Artist}
                    </Text>
                </View>
            </View>
            <Divider style={styles.divider} />
        </CustomPressable>
    );
};

export default LocationSearchResultListItem;
