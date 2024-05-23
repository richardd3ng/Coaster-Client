import { Divider } from "@ui-kitten/components";
import { StyleProp, Switch, Text, View, ViewStyle } from "react-native";

import CustomPressable from "../../../../../shared/customPressable/CustomPressable";
import globalStyles from "../../../../../../constants/theme/globalStyles";
import { PreferencesOption } from "../../../../../../types/navigation";
import styles from "./styles";

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
    return (
        <CustomPressable onPress={onPress}>
            <View style={[styles.container, style]}>
                <Text style={styles.text}>{text}</Text>
                <Switch
                    trackColor={{
                        false: globalStyles.common.backgroundColor,
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
