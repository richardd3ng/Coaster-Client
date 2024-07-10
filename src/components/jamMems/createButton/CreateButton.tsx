import { useState } from "react";

import { Icon, Text } from "@ui-kitten/components";
import { View } from "react-native";

import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import CreateJamMemDialog from "../createJamMemDialog/CreateJamMemDialog";

const CreateButton: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const [showDialog, setShowDialog] =
        useState<boolean>(false);

    return (
        <>
            <CustomPressable onPress={() => setShowDialog(true)}>
                <View style={styles.container}>
                    <Icon
                        name="plus-square-outline"
                        fill={styles.icon.color}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Create</Text>
                </View>
            </CustomPressable>
            <CreateJamMemDialog
                open={showDialog}
                onClose={() => setShowDialog(false)}
            />
        </>
    );
};
export default CreateButton;
