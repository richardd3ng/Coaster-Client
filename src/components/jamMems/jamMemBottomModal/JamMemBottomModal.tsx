import { useMemo } from "react";

import { Icon } from "@ui-kitten/components";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import BottomModal from "../../shared/bottomModal/BottomModal";
import BottomModalTopRow from "../../shared/bottomModalTopRow/BottomModalTopRow";
import {
    BottomSheetType,
    useBottomSheet,
} from "../../../hooks/context/BottomSheetContext";
import createStyles from "./styles";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useModal,
} from "../../../hooks/context/ModalContext";
import { dispatchSetSelectedJamMemId } from "../../../state/storeUtils";
import { INVALID_JAM_MEM_ID } from "../../../state/jamMem/jamMemSlice";
import JamMemTabNavigator from "../jamMemTabNavigator/JamMemTabNavigator";
import { RootState } from "../../../state/store";
import { useJamMem } from "../../../hooks/react-query/useQueryHooks";
import { useMapContext } from "../../../hooks/context/MapContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const JamMemBottomModal: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { dismiss } = useModal();
    const { setSnapIndex } = useBottomSheet();
    const { setClusterFilter, socialFilter } = useMapContext();
    const snapPoints = useMemo(() => DEFAULT_SNAP_POINTS, []);

    const selectedJamMemId = useSelector((state: RootState) => {
        return state.jamMem.selectedJamMemId;
    });

    const { data: selectedJamMem } = useJamMem(selectedJamMemId);

    const handleClose = () => {
        dispatchSetSelectedJamMemId(INVALID_JAM_MEM_ID);
        setClusterFilter({
            type: "social",
            value: socialFilter,
        });
        dismiss(ModalType.JamMem);
        setSnapIndex(BottomSheetType.Map, 1);
    };

    const handleSheetChanges = (index: number) => {
        if (index === -1) {
            handleClose();
        }
    };

    const JamMemHeaderContent = selectedJamMem && (
        <>
            <View style={styles.locationInfoContainer}>
                <Icon name="pin" fill="green" style={styles.icon} />
                <Text style={styles.locationText}>
                    {selectedJamMem.location}
                </Text>
            </View>
            <Text
                style={styles.dateText}
            >{`${selectedJamMem.start.toDateString()} - ${selectedJamMem.end.toDateString()}`}</Text>
        </>
    );

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
                children={JamMemHeaderContent}
            />
            <JamMemTabNavigator />
        </BottomModal>
    );
};

export default JamMemBottomModal;
