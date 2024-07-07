import { useState } from "react";

import { Image, Text, View } from "react-native";
import { Input } from "@ui-kitten/components";
import { Datepicker } from "@ui-kitten/components";

import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { DEFAULT_JAM_MEM_COVER_URI } from "../../../constants/defaults";
import { ImagePickerButton } from "../imagePickerButton/ImagePickerButton";
import LoadingModal from "../../shared/loadingModal/LoadingModal";
import useCurrentUser from "../../../hooks/useCurrentUser";
import useMutationErrorAlert from "../../../hooks/useMutationErrorAlert";
import { useMutationToCreateJamMem } from "../../../hooks/react-query/useMutationHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { validateInputs } from "../../../utils/jamMemUtils";
import { useJamMem } from "../../../hooks/react-query/useQueryHooks";

interface JamMemEditDialogProps {
    open: boolean;
    onClose: () => void;
    jamMemId: string;
}

const JamMemEditDialog: React.FC<JamMemEditDialogProps> = (
    props: JamMemEditDialogProps
) => {
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
    const { data: jamMem } = useJamMem(props.jamMemId);
    const [name, setName] = useState<string>(jamMem?.name ?? "");
    const [location, setLocation] = useState<string>(jamMem?.location ?? "");
    const [startDate, setStartDate] = useState<Date | null>(
        jamMem?.start ?? null
    );
    const [endDate, setEndDate] = useState<Date | null>(jamMem?.end ?? null);
    const [coverUri, setCoverUri] = useState<string>(jamMem?.coverUrl ?? "");
    const invalidDates: boolean =
        startDate !== null && endDate !== null && startDate > endDate;

    console.log("jamMem:", jamMem);

    const handleConfirm = async () => {
        if (!validateInputs(name, location, startDate!, endDate!)) {
            return;
        }
        props.onClose();
    };

    const handleClose = () => {
        setName(jamMem?.name ?? "");
        setLocation(jamMem?.location ?? "");
        setStartDate(jamMem?.start ?? null);
        setEndDate(jamMem?.end ?? null);
        setCoverUri(jamMem?.coverUrl ?? "");
        props.onClose();
    };

    const DialogContent = (
        <View style={styles.dialogContainer}>
            <Input
                onChangeText={setName}
                placeholder="Name"
                value={name}
                style={styles.nameInput}
            />
            <Input
                onChangeText={setLocation}
                placeholder="Location"
                value={location}
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
                title="Update Jam Mem"
                open={props.open}
                onClose={handleClose}
                onConfirm={handleConfirm}
                preventDefaultConfirm
                children={DialogContent}
                disableConfirm={invalidDates}
                sameButtonTextStyle
            />
            {isPending && <LoadingModal text="Creating Jam Mem..." />}
        </>
    );
};

export default JamMemEditDialog;
