import { View } from "react-native";

import { BaseToast } from "react-native-toast-message";
import { BaseToastProps } from "react-native-toast-message";
import { Icon } from "@ui-kitten/components";

import createStyles from "./styles";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

export const SnapshotToast = ({ ...props }: BaseToastProps) => {
    const styles = useThemeAwareObject(createStyles);

    const SnapshotIcon = () => {
        return (
            <View style={styles.iconContainer}>
                <Icon
                    name="music"
                    style={styles.icon}
                    fill={styles.icon.color}
                />
            </View>
        );
    };

    return (
        <BaseToast
            text1={props.text1}
            text1Style={styles.text}
            contentContainerStyle={styles.contentContainer}
            renderLeadingIcon={SnapshotIcon}
            style={styles.toast}
        />
    );
};
