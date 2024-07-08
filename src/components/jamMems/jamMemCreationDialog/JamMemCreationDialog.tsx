import { useState } from "react";

import { Datepicker } from "@ui-kitten/components";
import FastImage from "react-native-fast-image";
import { Input } from "@ui-kitten/components";
import { Text, View } from "react-native";

import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { DEFAULT_JAM_MEM_COVER_URI } from "../../../constants/defaults";
import { encodeBase64 } from "../../../utils/fileSystemUtils";
import { ImagePickerButton } from "../imagePickerButton/ImagePickerButton";
import LoadingModal from "../../shared/loadingModal/LoadingModal";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { useFriends } from "../../../hooks/react-query/useQueryHooks";
import useMutationErrorAlert from "../../../hooks/useMutationErrorAlert";
import { useMutationToCreateJamMem } from "../../../hooks/react-query/useMutationHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { validateInputs } from "../../../utils/jamMemUtils";
import AddFriendsDropdown from "../addFriendsDropdown/AddFriendsDropdown";

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
    const { data: friends } = useFriends(currentUserId);
    const [name, setName] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [coverUri, setCoverUri] = useState<string>("");
    const invalidDates: boolean =
        startDate !== null && endDate !== null && startDate > endDate;
    const [friendIds, setFriendIds] = useState<string[]>([]);

    const handleCreate = async () => {
        if (!validateInputs(name, location, startDate!, endDate!)) {
            return;
        }
        createJamMem(
            {
                ownerId: currentUserId,
                name,
                location,
                start: startDate!,
                end: endDate!,
                coverImage: coverUri ? await encodeBase64(coverUri) : undefined,
                friends: friendIds.length > 0 ? friendIds : undefined,
            },
            {
                onSuccess: handleClose,
            }
        );
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
                <FastImage
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
            <View style={styles.dropdownContainer}>
                <AddFriendsDropdown
                    friends={friends ?? []}
                    onSelect={(selectedIndex) => {
                        setFriendIds(
                            selectedIndex.map(
                                (index) => (friends ?? [])[index.row]._id
                            )
                        );
                    }}
                    placeholder="Add Friends"
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
            <LoadingModal visible={isPending} text="Creating Jam Mem..." />
        </>
    );
};

export default JamMemCreationDialog;
