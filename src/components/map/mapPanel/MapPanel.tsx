import { View } from "react-native";

import FriendsButton from "../friendsButton/FriendsButton";
import NavButton from "../navButton/NavButton";
import SocialFilterStack from "../socialFilterStack/SocialFilterStack";
import styles from "./styles";
import TrackingIndicator from "../trackingIndicator/TrackingIndicator";

const ButtonPanel = () => {
    return (
        <>
            <View style={styles.trackingIndicatorContainer}>
                <TrackingIndicator />
            </View>
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
