import { useState } from "react";

import { Alert, Image, Text, View } from "react-native";
import { Input } from "@ui-kitten/components";
import { Datepicker } from "@ui-kitten/components";

import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { DEFAULT_JAM_MEM_COVER_URI } from "../../../constants/defaults";
import { encodeBase64 } from "../../../utils/fileSystemUtils";
import { ImagePickerButton } from "../imagePickerButton/ImagePickerButton";
import LoadingModal from "../../shared/loadingModal/LoadingModal";
import useCurrentUser from "../../../hooks/useCurrentUser";
import useMutationErrorAlert from "../../../hooks/useMutationErrorAlert";
import { useMutationToCreateJamMem } from "../../../hooks/react-query/useMutationHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

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
    const currentUserId = useCurrentUser().id;
    const [name, setName] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [coverUri, setCoverUri] = useState<string>("");
    const invalidDates: boolean =
        startDate !== null && endDate !== null && startDate > endDate;

    const checkMissingDetails = (): string[] => {
        const missingDetails: string[] = [];
        if (!name.trim()) {
            missingDetails.push("name");
        }
        if (!location.trim()) {
            missingDetails.push("location");
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
        } else if (missingDetails.length === 2) {
            alertMessage += `a ${missingDetails[0]} and ${missingDetails[1]}.`;
        } else {
            alertMessage += "the following details: ";
            alertMessage += missingDetails.slice(0, -1).join(", ");
            alertMessage += `, and ${
                missingDetails[missingDetails.length - 1]
            }.`;
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

    const handleCreate = async () => {
        if (!validateInputs()) {
            return;
        }
        createJamMem({
            ownerId: currentUserId,
            name,
            location,
            start: startDate!,
            end: endDate!,
            coverImage: await encodeBase64(coverUri),
        });
        handleClose();
    };

    const handleClose = () => {
        setName("");
        setLocation("");
        setStartDate(null);
        setEndDate(null);
        setCoverUri("");
        onClose();
    };

    const DialogContent = (
        <View style={styles.dialogContainer}>
            <Input
                onChangeText={setName}
                placeholder="Name"
                style={styles.nameInput}
            />
            <Input
                onChangeText={setLocation}
                placeholder="Location"
                style={styles.locationInput}
            />
            <Datepicker
                placeholder="Start Date"
                date={startDate}
                onSelect={setStartDate}
                max={new Date()}
                style={styles.datepicker}
                status={invalidDates ? "danger" : "basic"}
            />
            <Datepicker
                placeholder="End Date"
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
            <View style={styles.imagePickerContainer}>
                <Image
                    source={
                        coverUri ? { uri: coverUri } : DEFAULT_JAM_MEM_COVER_URI
                    }
                    style={styles.image}
                />
                <ImagePickerButton
                    onImagePicked={setCoverUri}
                    style={styles.imagePickerButton}
                />
            </View>
        </View>
    );

    return (
        <>
            <ConfirmationDialog
                title="Create Jam Mem"
                open={open}
                onClose={handleClose}
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
