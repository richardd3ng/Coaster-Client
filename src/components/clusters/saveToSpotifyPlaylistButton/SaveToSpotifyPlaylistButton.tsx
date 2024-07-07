import { memo, useState } from "react";

import { Icon } from "@ui-kitten/components";
import { Text, View } from "react-native";

import createStyles from "./styles";
import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import SpotifyIcon from "../../login/spotifyIcon/SpotifyIcon";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface SaveToSpotifyPlaylistButtonProps {
    onPress: () => void;
}

const SaveToSpotifyPlaylistButton: React.FC<
    SaveToSpotifyPlaylistButtonProps
> = ({ onPress }: SaveToSpotifyPlaylistButtonProps) => {
    const styles = useThemeAwareObject(createStyles);
    const [showConfirmationDialog, setShowConfirmationDialog] =
        useState<boolean>(false);

    return (
        <>
            <ConfirmationDialog
                title="Confirm save playlist"
                description="This will open Spotify and create a new private playlist in your Spotify account."
                open={showConfirmationDialog}
                onConfirm={onPress}
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
