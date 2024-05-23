import { Divider } from "@ui-kitten/components";
import { StyleProp, Switch, Text, View, ViewStyle } from "react-native";

import CustomPressable from "../../../../../shared/customPressable/CustomPressable";
import createStyles from "./styles";
import { PreferencesOption } from "../../../../../../types/navigation";
import useThemeAwareObject from "../../../../../../hooks/useThemeAwareObject";

export interface ToggledListItemProps {
    text: PreferencesOption;
    onPress: () => void;
    hideDivider?: boolean;
    style?: StyleProp<ViewStyle>;
    isEnabled: boolean;
}

const ToggledListItem: React.FC<ToggledListItemProps> = ({
    text,
    onPress,
    hideDivider,
    style,
    isEnabled,
}: ToggledListItemProps) => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <CustomPressable onPress={onPress}>
            <View style={[styles.container, style]}>
                <Text style={styles.text}>{text}</Text>
                <Switch
                    trackColor={{
                        false: styles.switch.backgroundColor,
                        true: "#32CD32",
                    }}
                    value={isEnabled}
                    onValueChange={onPress}
                    style={{
                        pointerEvents: isEnabled ? "none" : undefined,
                    }}
                />
            </View>
            {!hideDivider && <Divider style={styles.divider} />}
        </CustomPressable>
    );
};

export default ToggledListItem;
