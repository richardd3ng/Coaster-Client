import { memo, useState } from "react";

import { Icon } from "@ui-kitten/components";
import { Text, View } from "react-native";

import createStyles from "./styles";
import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import { getValidAccessToken } from "../../../api/tokenUtils";
import { SongIdFrequencies } from "../../../utils/superclusterManager";
import SpotifyIcon from "../../login/spotifyIcon/SpotifyIcon";
import { useMutationToCreatePlaylistFromSongIds } from "../../../hooks/react-query/useMutationHooks";
import useMutationErrorToast from "../../../hooks/useMutationErrorToast";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { useUserSpotifyId } from "../../../hooks/useUserHooks";

interface SaveToSpotifyPlaylistButtonProps {
    playlistName: string;
    playlistDescription: string;
    songIdFrequencies: SongIdFrequencies;
}

const SaveToSpotifyPlaylistButton: React.FC<
    SaveToSpotifyPlaylistButtonProps
> = ({
    playlistName,
    playlistDescription,
    songIdFrequencies,
}: SaveToSpotifyPlaylistButtonProps) => {
    const styles = useThemeAwareObject(createStyles);
    const {
        mutate: createSpotifyPlaylist,
        isError,
        error,
        reset,
    } = useMutationToCreatePlaylistFromSongIds();
    useMutationErrorToast({ isError, error, reset });
    const spotifyId = useUserSpotifyId();

    const [showConfirmationDialog, setShowConfirmationDialog] =
        useState<boolean>(false);

    const handleConfirm = async () => {
        createSpotifyPlaylist({
            name: playlistName,
            accessToken: await getValidAccessToken(spotifyId),
            description: playlistDescription,
            songIds: songIdFrequencies.map(([songId, _]) => songId),
        });
    };

    return (
        <>
            <ConfirmationDialog
                title="Confirm save playlist"
                description="This will open Spotify and create a new private playlist in your Spotify account."
                open={showConfirmationDialog}
                onConfirm={handleConfirm}
                onClose={() => setShowConfirmationDialog(false)}
            />
            <View style={styles.buttonContainer}>
                <CustomPressable
                    style={styles.button}
                    onPress={() => setShowConfirmationDialog(true)}
                    activeOpacity={0.8}
                >
                    <SpotifyIcon width={24} height={24} />
                    <Text style={styles.buttonText}>
                        Save to Spotify Playlist
                    </Text>
                    <Icon
                        name="arrow-ios-forward"
                        fill="white"
                        style={styles.arrowIcon}
                    />
                </CustomPressable>
            </View>
        </>
    );
};

export default memo(SaveToSpotifyPlaylistButton);
