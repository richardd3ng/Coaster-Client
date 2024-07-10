import { useCallback, useEffect, useMemo, useState } from "react";

import { Radio, RadioGroup } from "@ui-kitten/components";
import { Text, View } from "react-native";

import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import LoadingModal from "../../shared/loadingModal/LoadingModal";
import useMutationErrorAlert from "../../../hooks/useMutationErrorAlert";
import { useMutationToClearSnapshotHistory } from "../../../hooks/react-query/useMutationHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import useCurrentUser from "../../../hooks/useCurrentUser";

interface ClearSnapshotHistoryDialogProps {
    open: boolean;
    onClose: () => void;
}

const ClearSnapshotHistoryDialog: React.FC<ClearSnapshotHistoryDialogProps> = ({
    open,
    onClose,
}: ClearSnapshotHistoryDialogProps) => {
    const styles = useThemeAwareObject(createStyles);
    const userId = useCurrentUser().id;
    const timeframes = useMemo(
        () => ["Last hour", "Today", "Today and yesterday", "All history"],
        []
    );
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const {
        mutate: clearSnapshotHistory,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToClearSnapshotHistory();
    useMutationErrorAlert({ isError, error, reset });

    useEffect(() => {
        if (open) {
            setSelectedIndex(0);
        }
    }, [open]);

    const handleConfirm = useCallback(() => {
        const end = new Date();
        let start = new Date(end);
        switch (selectedIndex) {
            case 0:
                start.setHours(end.getHours() - 1);
                break;
            case 1:
                start.setHours(0, 0, 0, 0);
                break;
            case 2:
                start.setDate(end.getDate() - 1);
                start.setHours(0, 0, 0, 0);
                break;
            case 3:
                start = new Date(2000, 0, 1);
                break;
        }
        console.log(userId, start.toISOString(), end.toISOString());

        clearSnapshotHistory(
            {
                userId,
                start,
                end,
            },
            {
                onSuccess: onClose,
            }
        );
    }, []);

    const DialogContent = (
        <View style={styles.dialogContainer}>
            <Text style={styles.descriptionText}>
                Select the timeframe for which you would like to clear your
                snapshot history. Note that cleared snapshots will also be
                removed from Jam Mems.
            </Text>
            <RadioGroup
                selectedIndex={selectedIndex}
                onChange={setSelectedIndex}
            >
                {timeframes.map((timeframe, index) => (
                    <Radio key={index}>
                        {() => (
                            <Text style={styles.radioItemText}>
                                {timeframe}
                            </Text>
                        )}
                    </Radio>
                ))}
            </RadioGroup>
        </View>
    );

    return (
        <ConfirmationDialog
            title="Clear History"
            open={open}
            onClose={onClose}
            onConfirm={handleConfirm}
            preventDefaultConfirm
            children={
                <>
                    {DialogContent}
                    <LoadingModal
                        visible={isPending}
                        text="Clearing History..."
                    />
                </>
            }
            sameButtonTextStyle
        />
    );
};

export default ClearSnapshotHistoryDialog;
