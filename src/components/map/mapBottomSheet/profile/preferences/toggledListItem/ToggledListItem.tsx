import { Divider } from "@ui-kitten/components";
import { StyleProp, Switch, Text, View, ViewStyle } from "react-native";

import CustomPressable from "../../../../../shared/customPressable/CustomPressable";
import { PreferencesOption } from "../../../../../../types/custom";
import styles from "./styles";

export interface ToggledListItemProps {
    text: PreferencesOption;
    onPress: () => void;
    hideDivider?: boolean;
    style?: StyleProp<ViewStyle>;
    isEnabled: boolean;
}

const ToggledListItem: React.FC<ToggledListItemProps> = (
    props: ToggledListItemProps
) => {
    return (
        <CustomPressable onPress={props.onPress}>
            <View style={[styles.container, props.style]}>
                <Text style={styles.text}>{props.text}</Text>
                <Switch
                    trackColor={{ false: "#EAEAEA", true: "#32CD32" }}
                    value={props.isEnabled}
                    onValueChange={props.onPress}
                    style={{
                        pointerEvents: props.isEnabled ? "none" : undefined,
                    }}
                />
            </View>
            {!props.hideDivider && <Divider style={styles.divider} />}
        </CustomPressable>
    );
};

export default ToggledListItem;
