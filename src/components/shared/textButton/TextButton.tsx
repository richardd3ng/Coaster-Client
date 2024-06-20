import { ButtonProps } from "@ui-kitten/components";
import { Text, TextStyle } from "react-native";

import CustomPressable from "../customPressable/CustomPressable";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import createStyles from "./styles";

interface TextButtonProps extends ButtonProps {
    text: string;
    textStyle?: TextStyle;
}

const TextButton: React.FC<TextButtonProps> = ({
    text,
    textStyle,
    ...props
}) => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <CustomPressable {...props} style={[styles.button, props.style]}>
            {() => <Text style={textStyle}>{text}</Text>}
        </CustomPressable>
    );
};

export default TextButton;
