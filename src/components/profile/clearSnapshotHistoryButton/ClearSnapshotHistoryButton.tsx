import { useState } from "react";

import { Icon, Text } from "@ui-kitten/components";
import { View } from "react-native";

import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import ClearSnapshotHistoryDialog from "../clearSnapshotHistoryDialog/ClearHistoryDialog";

const ClearHistoryButton: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const [showDialog, setShowDialog] = useState<boolean>(false);

    return (
        <>
            <CustomPressable onPress={() => setShowDialog(true)}>
                <View style={styles.container}>
                    <Icon
                        name="backspace-outline"
                        fill={styles.icon.color}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Clear History</Text>
                </View>
            </CustomPressable>
            <ClearSnapshotHistoryDialog
                open={showDialog}
                onClose={() => setShowDialog(false)}
            />
        </>
    );
};
export default ClearHistoryButton;
