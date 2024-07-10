import { useState } from "react";

import { Alert, Text, View } from "react-native";
import { Datepicker } from "@ui-kitten/components";
import FastImage from "react-native-fast-image";
import { Input } from "@ui-kitten/components";

import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { DEFAULT_JAM_MEM_COVER_URI } from "../../../constants/assets";
import { encodeBase64 } from "../../../utils/fileSystemUtils";
import { ImagePickerButton } from "../imagePickerButton/ImagePickerButton";
import LoadingModal from "../../shared/loadingModal/LoadingModal";
import useMutationErrorAlert from "../../../hooks/useMutationErrorAlert";
import { useMutationToUpdateJamMem } from "../../../hooks/react-query/useMutationHooks";
import { useSelectedJamMemId } from "../../../hooks/redux/useSelectorHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { useJamMem } from "../../../hooks/react-query/useQueryHooks";
import { validateJamMemInputs } from "../../../utils/validationUtils";

interface EditJamMemDialogProps {
    open: boolean;
    onClose: () => void;
}

const EditJamMemDialog: React.FC<EditJamMemDialogProps> = ({
    open,
    onClose,
}: EditJamMemDialogProps) => {
    const styles = useThemeAwareObject(createStyles);
    const {
        mutate: updateJamMem,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToUpdateJamMem();
    useMutationErrorAlert({ isError, error, reset });
    const { data: jamMem } = useJamMem(useSelectedJamMemId());
    const [name, setName] = useState<string>(jamMem?.name ?? "");
    const [location, setLocation] = useState<string>(jamMem?.location ?? "");
    const [startDate, setStartDate] = useState<Date | null>(
        jamMem?.start ?? null
    );
    const [endDate, setEndDate] = useState<Date | null>(jamMem?.end ?? null);
    const [coverUri, setCoverUri] = useState<string>(jamMem?.coverUrl ?? "");
    const invalidDates: boolean =
        startDate !== null && endDate !== null && startDate > endDate;

    const handleConfirm = async () => {
        if (
            !jamMem ||
            !validateJamMemInputs(name, location, startDate!, endDate!)
        ) {
            Alert.alert("Error: unable to retrieve Jam Mem");
        }
        updateJamMem(
            {
                id: jamMem!.id,
                record: {
                    name: name !== jamMem!.name ? name : undefined,
                    location:
                        location !== jamMem!.location ? location : undefined,
                    start:
                        startDate !== jamMem!.start && startDate
                            ? startDate
                            : undefined,
                    end:
                        endDate !== jamMem!.end && endDate
                            ? endDate
                            : undefined,
                    coverImage:
                        coverUri !== jamMem!.coverUrl
                            ? await encodeBase64(coverUri)
                            : undefined,
                },
            },
            {
                onSuccess: onClose,
            }
        );
    };

    const handleClose = () => {
        setName(jamMem?.name ?? "");
        setLocation(jamMem?.location ?? "");
        setStartDate(jamMem?.start ?? null);
        setEndDate(jamMem?.end ?? null);
        setCoverUri(jamMem?.coverUrl ?? "");
        onClose();
    };

    return (
        <ConfirmationDialog
            title="Edit Jam Mem"
            open={open}
            onClose={handleClose}
            onConfirm={handleConfirm}
            preventDefaultConfirm
            children={
                <>
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
                            <FastImage
                                source={
                                    coverUri
                                        ? { uri: coverUri }
                                        : DEFAULT_JAM_MEM_COVER_URI
                                }
                                style={styles.image}
                            />
                            <ImagePickerButton
                                title="Cover Image"
                                onImagePicked={setCoverUri}
                                style={styles.imagePickerButton}
                            />
                        </View>
                    </View>
                    <LoadingModal
                        visible={isPending}
                        text="Updating Jam Mem..."
                    />
                </>
            }
            disableConfirm={invalidDates}
            sameButtonTextStyle
        />
    );
};

export default EditJamMemDialog;
