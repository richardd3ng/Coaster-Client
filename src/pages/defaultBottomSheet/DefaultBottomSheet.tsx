import React from "react";

import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import JamMemsCarousel from "../../components/jamMems/JamMemsCarousel";
import MapBottomSheet from "../../components/map/bottomSheet/MapBottomSheet";
import styles from "./styles";
import { Text } from "@ui-kitten/components";
import { View } from "react-native";

const DefaultBottomSheet = () => {
    return (
        <MapBottomSheet>
            <BottomSheetScrollView
                contentContainerStyle={styles.bottomSheetContentContainer}
                showsVerticalScrollIndicator
            >
                <View style={styles.jamSessionStack}>
                    <Text style={styles.text}>Jam Mems</Text>
                    <JamMemsCarousel />
                </View>
            </BottomSheetScrollView>
        </MapBottomSheet>
    );
};

export default DefaultBottomSheet;
