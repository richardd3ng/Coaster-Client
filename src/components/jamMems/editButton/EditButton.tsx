import { useState } from "react";

import { Icon, Text } from "@ui-kitten/components";
import { View } from "react-native";

import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import EditJamMemDialog from "../editJamMemDialog/EditJamMemDialog";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const EditButton: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const [showDialog, setShowDialog] = useState<boolean>(false);

    return (
        <>
            <CustomPressable onPress={() => setShowDialog(true)}>
                <View style={styles.container}>
                    <Icon
                        name="edit-outline"
                        fill={styles.icon.color}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Edit</Text>
                </View>
            </CustomPressable>
            <EditJamMemDialog
                open={showDialog}
                onClose={() => setShowDialog(false)}
            />
        </>
    );
};
export default EditButton;
