import React, { useMemo, useCallback } from "react";
import { View, Text } from "react-native";
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ModalType, useModal } from "../../../context/modalContext";
import styles from "./styles";

import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { PlaceData } from "../../../utils/locationUtils";
import SearchResultListItem from "../search/SearchResultListItem";
import { Divider } from "@ui-kitten/components";
import { TouchableOpacity } from "react-native";

interface SearchResultsListProps {
    results: PlaceData[];
}

const SearchResultsList: React.FC<SearchResultsListProps> = (
    props: SearchResultsListProps
) => {
    const renderItem = useCallback(
        ({ item }: { item: PlaceData }) => <SearchResultListItem item={item} />,
        []
    );

    return (
        <>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        paddingLeft: 16,
                        paddingVertical: 12,
                        color: "gray",
                    }}
                >
                    Locations
                </Text>
                <TouchableOpacity
                    style={{ paddingRight: 16 }}
                    onPress={() => console.log("show more locations")}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            paddingLeft: 16,
                            paddingVertical: 12,
                            color: "blue",
                        }}
                    >
                        More
                    </Text>
                </TouchableOpacity>
            </View>
            <Divider style={{ backgroundColor: "gray" }} />
            <BottomSheetFlatList
                data={props.results}
                keyExtractor={(result) => result.placeId}
                renderItem={renderItem}
            />
        </>
    );
};

const ProfileBottomModal: React.FC = () => {
    const { modalRefs, dismissModal, isModalVisible } = useModal();
    const snapPoints = useMemo(() => ["40%"], []);

    const handleSheetChanges = useCallback(
        (index: number) => {
            if (index === -1) {
                dismissModal(ModalType.Profile);
            }
        },
        [dismissModal]
    );

    return (
        <GestureHandlerRootView style={styles.gestureHandlerRootView}>
            <BottomSheetModalProvider>
                <View
                    style={{
                        flex: 1,
                        padding: 24,
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        pointerEvents: isModalVisible(ModalType.Profile)
                            ? undefined
                            : "box-none",
                        backgroundColor: isModalVisible(ModalType.Profile)
                            ? "rgba(128, 128, 128, 0.2)"
                            : undefined,
                    }}
                >
                    <BottomSheetModal
                        ref={modalRefs[ModalType.Profile]}
                        index={0}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                        handleComponent={null}
                    >
                        <BottomSheetView style={styles.contentContainer}>
                            <Text>TODO: Add Profile Stuff Here</Text>
                            {/* <SearchResultsList results={mockData} /> */}
                        </BottomSheetView>
                    </BottomSheetModal>
                </View>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
};

export default ProfileBottomModal;
