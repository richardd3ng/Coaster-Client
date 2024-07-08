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
import { Divider, Icon } from "@ui-kitten/components";

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
        <Icon
            name="checkmark"
            style={styles.icon}
            fill={isEnabled ? styles.icon.color : "white"}
        />
    );

    return (
        <CustomPressable onPress={onPress}>
            <View style={[styles.container, style]}>
                <Text style={styles.text}>{text}</Text>
                {StatusIndicator}
            </View>
            {!hideDivider && <Divider style={styles.divider} />}
        </CustomPressable>
    );
};

export default PreferencesListItem;
