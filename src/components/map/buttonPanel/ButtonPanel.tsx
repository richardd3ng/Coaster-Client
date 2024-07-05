import { View } from "react-native";

import NavButton from "../navButton/NavButton";
import SocialFilterStack from "../socialFilterStack/SocialFilterStack";
import styles from "./styles";
import FriendsButton from "../friendsButton/FriendsButton";

const ButtonPanel = () => {
    return (
        <>
            <View style={styles.leftButtonPanel}>
                <FriendsButton />
            </View>
            <View style={styles.rightButtonPanel}>
                <NavButton />
                <SocialFilterStack />
            </View>
        </>
    );
};

export default ButtonPanel;
