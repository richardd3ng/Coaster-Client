import { View } from "react-native";

import createStyles from "./styles";
import TextButton from "../../shared/textButton/TextButton";
import { User } from "../../../types/entities";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface AddButtonProps {
    user: User;
}

const AddButton: React.FC<AddButtonProps> = ({ user }: AddButtonProps) => {
    const styles = useThemeAwareObject(createStyles);
    const handlePress = () => {
        console.log("adding", user.id);
    };

    return (
        <View style={styles.container}>
            <TextButton
                text="ADD"
                onPress={handlePress}
                style={styles.button}
                textStyle={styles.text}
            />
        </View>
    );
};

export default AddButton;
