import React, { ReactNode, useCallback, useMemo } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { View, Text } from "react-native";

import styles from "./styles";

interface MapBottomSheetProps {
    children: ReactNode;
}

const MapBottomSheet: React.FC = () => {
    const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);
    console.log("rendered bottom sheet");

    const handleSheetChanges = useCallback((index: number) => {
        console.log("handleSheetChanges", index);
    }, []);

    return (
        <GestureHandlerRootView>
            <BottomSheet
                onChange={handleSheetChanges}
                index={0}
                snapPoints={snapPoints}
            >
                <BottomSheetView style={styles.bottomSheetContentContainer}>
                    <Text>"hi"</Text>
                    {/* {children} */}
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

export default MapBottomSheet;
