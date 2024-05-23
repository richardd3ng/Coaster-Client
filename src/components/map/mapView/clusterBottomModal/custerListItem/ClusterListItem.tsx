import { Image, Text, View } from "react-native";

import CustomPressable from "../../../../shared/customPressable/CustomPressable";
import styles from "./styles";
import { SongFrequency } from "../ClusterBottomModal";
import { openSongInSpotify } from "../../../../../utils/spotifyUtils";

interface ClusterListItemProps {
    songFrequency: SongFrequency;
}

const ClusterListItem: React.FC<ClusterListItemProps> = ({
    songFrequency,
}: ClusterListItemProps) => {
    const handleSelect = () => {
        openSongInSpotify(songFrequency.uri);
    };

    return (
        <CustomPressable onPress={handleSelect}>
            <View style={styles.listItemContainer}>
                <View style={styles.frequencyContainer}>
                    <Text style={styles.frequncyText}>
                        {`${songFrequency.frequency}`}
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
                        }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{songFrequency.title}</Text>
                    <Text style={styles.artistText}>
                        {songFrequency.artist}
                    </Text>
                </View>
                <View style={styles.frequencyContainer}>
                    <Text style={styles.frequncyText}>
                        {songFrequency.frequency}
                    </Text>
                </View>
            </View>
        </CustomPressable>
    );
};

export default ClusterListItem;
