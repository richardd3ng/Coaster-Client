import {
    ActivityIndicator,
    StyleProp,
    Text,
    View,
    ViewStyle,
} from "react-native";

import CustomPressable from "../../../shared/customPressable/CustomPressable";
import createStyles from "./styles";
import { PreferencesOption } from "../../../../types/navigation";
import useThemeAwareObject from "../../../../hooks/useThemeAwareObject";
import IconButton from "../../../shared/iconButton/IconButton";
import { Divider } from "@ui-kitten/components";

export interface PreferencesListItemProps {
    text: PreferencesOption;
    onPress: () => void;
    isEnabled: boolean;
    isPending: boolean;
    style?: StyleProp<ViewStyle>;
    hideDivider?: boolean;
}

const PreferencesListItem: React.FC<PreferencesListItemProps> = ({
    text,
    onPress,
    isEnabled,
    isPending,
    style,
    hideDivider = false,
}: PreferencesListItemProps) => {
    const styles = useThemeAwareObject(createStyles);

    const StatusIndicator = isPending ? (
        <ActivityIndicator style={styles.spinner} />
    ) : (
        <IconButton
            iconName="arrow-ios-forward"
            iconColor={isEnabled ? "black" : "white"}
            onPress={onPress}
            style={styles.button}
        />
    );

    return (
        <CustomPressable onPress={onPress}>
            <View style={style || styles.container}>
                <Text style={styles.text}>{text}</Text>
                {StatusIndicator}
            </View>
            {!hideDivider && <Divider style={styles.divider} />}
        </CustomPressable>
    );
};

export default PreferencesListItem;
