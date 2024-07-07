import { memo, useState } from "react";

import { Divider, Icon } from "@ui-kitten/components";
import { Popover } from "@ui-kitten/components";

import createStyles from "./styles";
import DeleteButton from "../deleteButton/DeleteButton";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import TextButton from "../../shared/textButton/TextButton";
import { Pressable, View } from "react-native";
import EditButton from "../editButton/EditButton";

interface JamMemActionMenuProps {
    jamMemId: string;
}

const JamMemActionMenu: React.FC<JamMemActionMenuProps> = ({
    jamMemId,
}: JamMemActionMenuProps) => {
    const styles = useThemeAwareObject(createStyles);
    const [visible, setVisible] = useState<boolean>(false);

    if (!jamMemId) {
        return null;
    }
    const MoreOptionsButton = () => (
        <Pressable
            onPress={() => {
                setVisible(true);
            }}
        >
            <Icon
                name="more-vertical"
                fill="gray"
                style={styles.moreOptionsIcon}
            />
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <Popover
                anchor={MoreOptionsButton}
                visible={visible}
                placement={"bottom end"}
                onBackdropPress={() => setVisible(false)}
            >
                <>
                    <EditButton jamMemId={jamMemId} />
                    <Divider />
                    <DeleteButton jamMemId={jamMemId} />
                </>
            </Popover>
        </View>
    );
};

export default memo(JamMemActionMenu);
