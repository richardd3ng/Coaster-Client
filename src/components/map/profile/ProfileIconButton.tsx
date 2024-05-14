import { Button, ButtonProps, Icon } from "@ui-kitten/components";

const ProfileIconButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <Button
            appearance="ghost"
            accessoryLeft={<Icon name={"person"} />}
            onPress={props.onPress}
            {...props}
        />
    );
};

export default ProfileIconButton;
