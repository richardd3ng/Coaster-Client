import { View } from "react-native";

import NavButton from "./navButton/NavButton";
import SocialFilterStack from "./socialFilterStack/SocialFilterStack";
import styles from "./styles";

const ButtonPanel = () => {
    return (
        <View style={styles.buttonContainer}>
            <NavButton />
            <SocialFilterStack />
        </View>
    );
};

export default ButtonPanel;
