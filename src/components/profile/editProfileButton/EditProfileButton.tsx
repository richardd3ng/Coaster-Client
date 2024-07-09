import { useState } from "react";

import { Icon, Text } from "@ui-kitten/components";
import { View } from "react-native";

import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import EditProfileDialog from "../editProfileDialog/EditProfileDialog";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const EditProfileButton: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const [showCreationDialog, setShowCreationDialog] =
        useState<boolean>(false);

    return (
        <>
            <CustomPressable onPress={() => setShowCreationDialog(true)}>
                <View style={styles.container}>
                    <Icon
                        name="edit-outline"
                        fill={styles.icon.color}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Edit Profile</Text>
                </View>
            </CustomPressable>
            <EditProfileDialog
                open={showCreationDialog}
                onClose={() => setShowCreationDialog(false)}
            />
        </>
    );
};
export default EditProfileButton;
