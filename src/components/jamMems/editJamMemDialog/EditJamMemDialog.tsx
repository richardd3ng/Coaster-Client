import { useState } from "react";

import { Alert, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import FastImage from "react-native-fast-image";
import { Input } from "@ui-kitten/components";

import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { DEFAULT_JAM_MEM_COVER_URI } from "../../../constants/assets";
import { encodeBase64 } from "../../../utils/fileSystemUtils";
import { ImagePickerButton } from "../imagePickerButton/ImagePickerButton";
import LoadingModal from "../../shared/loadingModal/LoadingModal";
import useMutationErrorToast from "../../../hooks/useMutationErrorToast";
import { useMutationToUpdateJamMem } from "../../../hooks/react-query/useMutationHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { useJamMem } from "../../../hooks/react-query/useQueryHooks";
import { useJamMemModal } from "../../../hooks/context/ModalContext";
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
    useMutationErrorToast({ isError, error, reset });
    const { options } = useJamMemModal();
    const selectedJamMemId: string = options?.jamMemId;
    const { data: jamMem } = useJamMem(selectedJamMemId);
    const [name, setName] = useState<string>(jamMem?.name ?? "");
    const [location, setLocation] = useState<string>(jamMem?.location ?? "");
    const [start, setStart] = useState<Date>(jamMem?.start ?? new Date());
    const [end, setEnd] = useState<Date>(jamMem?.end ?? new Date());
    const [coverUri, setCoverUri] = useState<string>(jamMem?.coverUrl ?? "");
    const invalidDates: boolean = start !== null && end !== null && start > end;

    const handleConfirm = async () => {
        if (!jamMem || !validateJamMemInputs(name, location, start!, end!)) {
            Alert.alert("Error: unable to retrieve Jam Mem");
        }
        updateJamMem(
            {
                id: jamMem!.id,
                record: {
                    name: name !== jamMem!.name ? name : undefined,
                    location:
                        location !== jamMem!.location ? location : undefined,
                    start: start !== jamMem!.start && start ? start : undefined,
                    end: end !== jamMem!.end && end ? end : undefined,
                    coverImage:
                        coverUri && coverUri !== jamMem!.coverUrl
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
        setStart(jamMem?.start ?? new Date());
        setEnd(jamMem?.end ?? new Date());
        setCoverUri(jamMem?.coverUrl ?? "");
        onClose();
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
            <View style={styles.datepickerContainer}>
                <Text style={styles.dateText}>Start</Text>
                <DateTimePicker
                    value={start}
                    onChange={(_e, date) => setStart(date ?? new Date())}
                    style={styles.datepicker}
                    mode="datetime"
                    maximumDate={new Date()}
                />
            </View>
            <View style={styles.datepickerContainer}>
                <Text style={styles.dateText}>End</Text>
                <DateTimePicker
                    value={end}
                    onChange={(_e, date) => setEnd(date ?? new Date())}
                    style={styles.datepicker}
                    mode="datetime"
                    maximumDate={new Date()}
                />
            </View>
            {invalidDates && (
                <Text style={styles.errorText}>
                    Please provide a valid date range.
                </Text>
            )}
            <View style={styles.imagePickerContainer}>
                <FastImage
                    source={
                        coverUri ? { uri: coverUri } : DEFAULT_JAM_MEM_COVER_URI
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
    );
    return (
        <ConfirmationDialog
            title="Edit Jam Mem"
            open={open}
            onClose={handleClose}
            onConfirm={handleConfirm}
            preventDefaultConfirm
            disableConfirm={invalidDates}
            sameButtonTextStyle
        >
            {DialogContent}
            <LoadingModal visible={isPending} text="Updating Jam Mem..." />
        </ConfirmationDialog>
    );
};

export default EditJamMemDialog;
