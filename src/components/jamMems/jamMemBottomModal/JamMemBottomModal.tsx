import { useCallback, useMemo } from "react";

import { Icon } from "@ui-kitten/components";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import BottomModal from "../../shared/bottomModal/BottomModal";
import BottomModalTopRow from "../../shared/bottomModalTopRow/BottomModalTopRow";
import createStyles from "./styles";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useJamMemModal,
} from "../../../hooks/context/ModalContext";
import { dispatchSetSelectedJamMemId } from "../../../state/storeUtils";
import { INVALID_JAM_MEM_ID } from "../../../state/jamMem/jamMemSlice";
import JamMemActionMenu from "../jamMemActionMenu/JamMemActionMenu";
import JamMemTabNavigator from "../jamMemTabNavigator/JamMemTabNavigator";
import { RootState } from "../../../state/store";
import { useJamMem } from "../../../hooks/react-query/useQueryHooks";
import { useMapBottomSheet } from "../../../hooks/context/BottomSheetContext";
import { useMapContext } from "../../../hooks/context/MapContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const JamMemBottomModal: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { dismiss } = useJamMemModal();
    const { setSnapIndex: setMapBottomSheetSnapIndex } = useMapBottomSheet();
    const { setClusterFilter, socialFilter } = useMapContext();
    const snapPoints = useMemo(() => DEFAULT_SNAP_POINTS, []);

    const selectedJamMemId = useSelector(
        (state: RootState) => state.jamMem.selectedJamMemId
    );

    const { data: selectedJamMem } = useJamMem(selectedJamMemId);

    const handleClose = useCallback(() => {
        dispatchSetSelectedJamMemId(INVALID_JAM_MEM_ID);
        setClusterFilter({
            type: "social",
            value: socialFilter,
        });
        dismiss();
        setMapBottomSheetSnapIndex(1);
    }, [dismiss, setClusterFilter, socialFilter, setMapBottomSheetSnapIndex]);

    const handleSheetChanges = useCallback(
        (index: number) => {
            if (index === -1) {
                handleClose();
            }
        },
        [handleClose]
    );

    const JamMemHeaderContent = () => {
        if (!selectedJamMem) return null;
        return (
            <View style={styles.headerContentContainer}>
                <View style={styles.metadataContainer}>
                    <View style={styles.locationInfoContainer}>
                        <Icon
                            name="pin"
                            fill="green"
                            style={styles.locationIcon}
                        />
                        <Text style={styles.locationText}>
                            {selectedJamMem.location}
                        </Text>
                    </View>
                    <Text style={styles.dateText}>
                        {`${selectedJamMem.start.toDateString()} - ${selectedJamMem.end.toDateString()}`}
                    </Text>
                </View>
                <JamMemActionMenu />
            </View>
        );
    };

    return (
        <BottomModal
            modalType={ModalType.JamMem}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
        >
            <BottomModalTopRow
                headerText={selectedJamMem?.name ?? ""}
                modalType={ModalType.JamMem}
                onClose={handleClose}
                children={<JamMemHeaderContent />}
            />
            <JamMemTabNavigator />
        </BottomModal>
    );
};

export default JamMemBottomModal;
