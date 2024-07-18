import { useCallback, useMemo } from "react";

import { Icon } from "@ui-kitten/components";
import { Text, View } from "react-native";

import BottomModal from "../../shared/bottomModal/BottomModal";
import BottomModalTopRow from "../../shared/bottomModalTopRow/BottomModalTopRow";
import createStyles from "./styles";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useJamMemModal,
} from "../../../hooks/context/ModalContext";
import JamMemActionMenu from "../jamMemActionMenu/JamMemActionMenu";
import { JamMemTabName } from "../../../types/navigation";
import JamMemTabNavigator from "../jamMemTabNavigator/JamMemTabNavigator";
import { useJamMem } from "../../../hooks/react-query/useQueryHooks";
import { useMapBottomSheet } from "../../../hooks/context/BottomSheetContext";
import { useMapContext } from "../../../hooks/context/MapContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { useUserId } from "../../../hooks/useUserHooks";

const JamMemBottomModal: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { dismiss, options: jamMemModalOptions } = useJamMemModal();
    const { setSnapIndex: setMapBottomSheetSnapIndex } = useMapBottomSheet();
    const { setClusterFilter, socialFilter } = useMapContext();
    const snapPoints = useMemo(() => DEFAULT_SNAP_POINTS, []);
    const userId = useUserId();
    const selectedJamMemId: string = jamMemModalOptions?.jamMemId;
    const tabName: JamMemTabName | undefined =
        jamMemModalOptions?.tabName;

    const { data: selectedJamMem } = useJamMem(selectedJamMemId);

    const handleClose = useCallback(() => {
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
                            {selectedJamMem?.location ?? "Unknown Location"}
                        </Text>
                    </View>
                    <Text style={styles.dateText}>
                        {`${
                            selectedJamMem?.start.toDateString() ??
                            "Unknown Start"
                        } - ${
                            selectedJamMem?.end.toDateString() ?? "Unknown End"
                        }`}
                    </Text>
                </View>
                {userId === selectedJamMem?.ownerId && <JamMemActionMenu />}
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
            >
                <JamMemHeaderContent />
            </BottomModalTopRow>
            <JamMemTabNavigator initialRouteName={tabName} />
        </BottomModal>
    );
};

export default JamMemBottomModal;
