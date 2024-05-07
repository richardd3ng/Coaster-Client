import React, { ReactNode, useCallback, useMemo, useRef } from "react";

import BottomSheet, {
    BottomSheetScrollView,
    BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Button, View } from "react-native";

import styles from "./styles";
import SearchBar from "../shared/SearchBar";
import { Icon } from "@ui-kitten/components";
import ProfileIconButton from "./ProfileIconButton";

interface MapBottomSheetProps {
    children: ReactNode;
}

const MapBottomSheet: React.FC<MapBottomSheetProps> = ({ children }) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ["10%", "30%", "95%"], []);

    const handleSheetChanges = useCallback((index: number) => {
        console.log("set index to:", index);
    }, []);

    const TopRow = (
        <View style={styles.bottomSheetTopRow}>
            <View style={styles.bottomSheetTextInputContainer}>
                <SearchBar
                    placeholder="Search Location"
                    onSearch={console.log}
                    style={styles.bottomSheetTextInput}
                />
            </View>
            <View style={styles.bottomSheetProfileIconButtonContainer}>
                <ProfileIconButton
                    onPress={() => console.log("pressed profile")}
                />
            </View>
        </View>
    );

    return (
        <GestureHandlerRootView style={styles.bottomSheetContainer}>
            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                onChange={handleSheetChanges}
                snapPoints={snapPoints}
            >
                {TopRow}
                <BottomSheetScrollView
                    contentContainerStyle={styles.bottomSheetContentContainer}
                >
                    {children}
                </BottomSheetScrollView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

export default MapBottomSheet;
