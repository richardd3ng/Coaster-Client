import React from "react";

import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import JamSessionCarousel from "../../components/jamSessions/JamSessionCarousel";
import MapBottomSheet from "../../components/map/MapBottomSheet";
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
                    <Text>hi</Text>
                    <JamSessionCarousel />
                </View>
            </BottomSheetScrollView>
        </MapBottomSheet>
    );
};

export default DefaultBottomSheet;
