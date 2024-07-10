import { useCallback, useState } from "react";

import { Alert, View } from "react-native";
import { Icon, Text } from "@ui-kitten/components";

import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import { dispatchSetSelectedJamMemId } from "../../../state/storeUtils";
import { INVALID_JAM_MEM_ID } from "../../../state/jamMem/jamMemSlice";
import { useJamMemModal } from "../../../hooks/context/ModalContext";
import { useMapBottomSheet } from "../../../hooks/context/BottomSheetContext";
import { useMapContext } from "../../../hooks/context/MapContext";
import { useMutationToDeleteJamMem } from "../../../hooks/react-query/useMutationHooks";
import { useSelectedJamMemId } from "../../../hooks/redux/useSelectorHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import LoadingModal from "../../shared/loadingModal/LoadingModal";

const DeleteButton: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const jamMemId = useSelectedJamMemId();
    const { mutate: deleteJamMem, isPending } = useMutationToDeleteJamMem();
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
    const { dismiss } = useJamMemModal();
    const { setClusterFilter, socialFilter } = useMapContext();
    const { setSnapIndex: setMapBottomSheetSnapIndex } = useMapBottomSheet();

    const handleConfirm = useCallback(() => {
        deleteJamMem(jamMemId, {
            onSuccess: () => {
                dispatchSetSelectedJamMemId(INVALID_JAM_MEM_ID);
                setClusterFilter({
                    type: "social",
                    value: socialFilter,
                });
                dismiss();
                setMapBottomSheetSnapIndex(1);
            },
            onError: (error) => {
                Alert.alert(error.message);
            },
        });
    }, [jamMemId, deleteJamMem]);

    return (
        <>
            <CustomPressable onPress={() => setShowConfirmation(true)}>
                <View style={styles.container}>
                    <Icon
                        name="trash-2-outline"
                        fill={styles.icon.color}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Delete</Text>
                </View>
            </CustomPressable>
            <ConfirmationDialog
                open={showConfirmation}
                title="Confirm Delete"
                description="Are you sure you want to delete this Jam Mem? Your Jam Friends will also be unable to view this Jam Mem anymore."
                onClose={() => setShowConfirmation(false)}
                onConfirm={handleConfirm}
            />
            <LoadingModal visible={isPending} text="Deleting Jam Mem..." />
        </>
    );
};

export default DeleteButton;
