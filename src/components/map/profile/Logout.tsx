import { Button, Icon } from "@ui-kitten/components";

import ProfileListItem from "./ProfileListItem";
import { ProfileOption } from "../../../types/custom";

const LogoutIcon = (
    <Button
        style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "red",
        }}
        appearance="ghost"
        accessoryLeft={<Icon name={"log-out"} fill="black" />}
    />
);

const Logout: React.FC = () => {
    return (
        <ProfileListItem
            text={ProfileOption.LOGOUT}
            onPress={() => {}}
            icon={LogoutIcon}
            hideArrow
            hideDivider
            textColor="red"
            style={{
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
            }}
        />
    );
};

export default Logout;