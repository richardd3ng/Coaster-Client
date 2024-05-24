import { useNavigation } from "@react-navigation/native";

import MapIconButton from "../mapIconButton/MapIconButton";
import { ScreenName, StackNavigation } from "../../../../types/navigation";
import styles from "./styles";

const FriendsButton: React.FC = () => {
    const { navigate } = useNavigation<StackNavigation>();

    return (
        <MapIconButton
            name="people"
            onPress={() => navigate(ScreenName.Friends)}
            filled
            style={styles.button}
        />
    );
};

export default FriendsButton;
