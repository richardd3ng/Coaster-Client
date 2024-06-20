import { View, Text, Alert } from "react-native";
import { Input } from "@ui-kitten/components";

import createStyles from "./styles";
import { Datepicker } from "@ui-kitten/components";
import { DEFAULT_JAM_MEM_COVER_URI } from "../../../constants/defaults";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { useMutationToCreateJamMem } from "../../../hooks/react-query/useMutationHooks";
import useMutationErrorAlert from "../../../hooks/useMutationErrorAlert";
import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import { useState } from "react";
import LoadingModal from "../../shared/loadingModal/LoadingModal";

interface JamMemCreationDialogProps {
    open: boolean;
    onClose: () => void;
}

const JamMemCreationDialog: React.FC<JamMemCreationDialogProps> = ({
    open,
    onClose,
}: JamMemCreationDialogProps) => {
    const styles = useThemeAwareObject(createStyles);
    const {
        mutate: createJamMem,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToCreateJamMem();
    useMutationErrorAlert({ isError, error, reset });
    const [title, setTitle] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [coverUri, setCoverUri] = useState<string>(DEFAULT_JAM_MEM_COVER_URI);
    const invalidDates: boolean =
        startDate !== null && endDate !== null && startDate > endDate;

    const checkMissingDetails = (): string[] => {
        const missingDetails: string[] = [];
        if (!title.trim()) {
            missingDetails.push("title");
        }
        if (!startDate) {
            missingDetails.push("start date");
        }
        if (!endDate) {
            missingDetails.push("end date");
        }
        return missingDetails;
    };

    const generateAlertMessage = (missingDetails: string[]): string => {
        let alertMessage = "Please provide ";
        if (missingDetails.length === 1) {
            alertMessage += `a ${missingDetails[0]}.`;
        } else {
            alertMessage += "the following details: ";
            alertMessage += missingDetails.slice(0, -1).join(", ");
            alertMessage += `, ${missingDetails[missingDetails.length - 1]}.`;
        }
        return alertMessage;
    };

    const validateInputs = (): boolean => {
        const missingDetails: string[] = checkMissingDetails();
        if (missingDetails.length > 0) {
            Alert.alert(generateAlertMessage(missingDetails));
            return false;
        }
        return true;
    };

    const handleCreate = () => {
        if (!validateInputs()) {
            return;
        }
        createJamMem({
            title: title,
            location: "Miami, FL",
            start: new Date(),
            end: new Date(),
            coverUri: "https://source.unsplash.com/random/200x200",
        });
        handleClose();
    };

    const handleClose = () => {
        setTitle("");
        setLocation("");
        setStartDate(null);
        setEndDate(null);
        setCoverUri(DEFAULT_JAM_MEM_COVER_URI);
        onClose();
    };

    const DialogContent = (
        <View style={styles.container}>
            <Input
                onChangeText={setTitle}
                placeholder="Title*"
                style={styles.input}
            />
            <Datepicker
                placeholder="Start Date*"
                date={startDate}
                onSelect={setStartDate}
                max={new Date()}
                style={styles.datepicker}
                status={invalidDates ? "danger" : "basic"}
            />
            <Datepicker
                placeholder="End Date*"
                date={endDate}
                onSelect={setEndDate}
                max={new Date()}
                style={styles.datepicker}
                status={invalidDates ? "danger" : "basic"}
            />
            {invalidDates && (
                <Text style={styles.errorText}>
                    Please provide a valid date range.
                </Text>
            )}
        </View>
    );

    return (
        <>
            <ConfirmationDialog
                title="Create Jam Mem"
                open={open}
                onClose={onClose}
                onConfirm={handleCreate}
                preventDefaultConfirm
                children={DialogContent}
                disableConfirm={invalidDates}
                sameButtonTextStyle
            />
            {isPending && <LoadingModal text="Creating Jam Mem..." />}
        </>
    );
};

export default JamMemCreationDialog;
