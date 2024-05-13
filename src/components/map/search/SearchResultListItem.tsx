import { Text, TouchableOpacity, View } from "react-native";
import { Button, Divider, Icon } from "@ui-kitten/components";

import styles from "./styles";
import { PlaceData } from "../../../utils/locationUtils";

interface SearchResultListItems {
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

const SearchResultListItem = (props: SearchResultListItems) => {
    return (
        <TouchableOpacity
            onPress={() => console.log("pressed:", props.item.address)}
        >
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
