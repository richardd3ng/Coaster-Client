import { useState } from "react";

import { Icon, Text } from "@ui-kitten/components";
import { View } from "react-native";

import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import JamMemCreateUpdateDialog from "../jamMemCreationDialog/JamMemCreationDialog";

const CreateButton: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const [showCreationDialog, setShowCreationDialog] =
        useState<boolean>(false);

    return (
        <>
            <CustomPressable onPress={() => setShowCreationDialog(true)}>
                <View style={styles.container}>
                    <Icon
                        name="plus-square-outline"
                        fill="royalblue"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Create</Text>
                </View>
            </CustomPressable>
            <JamMemCreateUpdateDialog
                open={showCreationDialog}
                onClose={() => setShowCreationDialog(false)}
            />
        </>
    );
};
export default CreateButton;
