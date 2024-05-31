import { Text } from "react-native";

import createStyles from "./styles";
import CustomPressable, {
    CustomPressableProps,
} from "../../../../shared/customPressable/CustomPressable";
import useThemeAwareObject from "../../../../../hooks/useThemeAwareObject";

interface CancelTextPressableProps extends CustomPressableProps {}

const CancelTextPressable: React.FC<CancelTextPressableProps> = ({
    ...props
}: CancelTextPressableProps) => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <CustomPressable
            onPress={props.onPress}
            style={[styles.cancelButton, props.style]}
        >
            <Text style={styles.cancelText}>Cancel</Text>
        </CustomPressable>
    );
};

export default CancelTextPressable;
