import { useCallback } from "react";

import { Icon, Text } from "@ui-kitten/components";
import { View } from "react-native";

import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface EditButtonProps {
    jamMemId: string;
}

const EditButton: React.FC<EditButtonProps> = ({
    jamMemId,
}: EditButtonProps) => {
    const styles = useThemeAwareObject(createStyles);

    const handlePress = useCallback(() => {
        console.log("Edit: ", jamMemId);
    }, [jamMemId]);

    return (
        <CustomPressable onPress={handlePress}>
            <View style={styles.container}>
                <Icon name="edit-outline" fill="royalblue" style={styles.icon} />
                <Text style={styles.text}>Edit</Text>
            </View>
        </CustomPressable>
    );
};
export default EditButton;
