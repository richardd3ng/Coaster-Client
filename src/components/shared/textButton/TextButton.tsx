import { Button, ButtonProps } from "@ui-kitten/components";
import { Text, TextStyle } from "react-native";

interface TextButtonProps extends ButtonProps {
    text: string;
    textStyle?: TextStyle;
}

const TextButton: React.FC<TextButtonProps> = ({
    text,
    textStyle,
    ...props
}) => {
    return (
        <Button {...props}>
            {() => <Text style={textStyle}>{text}</Text>}
        </Button>
    );
};

export default TextButton;
