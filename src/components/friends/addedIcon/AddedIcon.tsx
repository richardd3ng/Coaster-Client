import { View } from "react-native";

import createStyles from "./styles";
import TextButton from "../../shared/textButton/TextButton";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const AddedIcon: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <View style={styles.container}>
            <TextButton
                text="ADDED"
                style={styles.button}
                textStyle={styles.text}
                activeOpacity={1}
            />
        </View>
    );
};

export default AddedIcon;
