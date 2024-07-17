import { memo, useState } from "react";

import { Divider, Icon } from "@ui-kitten/components";
import { Popover } from "@ui-kitten/components";
import { Pressable, View } from "react-native";

import createStyles from "./styles";
import DeleteButton from "../deleteButton/DeleteButton";
import EditButton from "../editButton/EditButton";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const JamMemActionMenu: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const [visible, setVisible] = useState<boolean>(false);

    const MoreOptionsButton = () => (
        <Pressable
            onPress={() => {
                setVisible(true);
            }}
        >
            <Icon
                name="more-vertical"
                style={styles.icon}
                fill={styles.icon.color}
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
                    <EditButton />
                    <Divider />
                    <DeleteButton />
                </>
            </Popover>
        </View>
    );
};

export default memo(JamMemActionMenu);
