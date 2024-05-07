import { Button, Icon } from "@ui-kitten/components";
import styles from "./styles";

interface ProfileIconButtonProps {
    onPress: () => void;
}

const ProfileIconButton: React.FC<ProfileIconButtonProps> = (
    props: ProfileIconButtonProps
) => {
    return (
        <Button
            style={styles.profileIconButton}
            appearance="ghost"
            accessoryLeft={<Icon name={"person"} />}
            onPress={props.onPress}
        />
    );
};

export default ProfileIconButton;
