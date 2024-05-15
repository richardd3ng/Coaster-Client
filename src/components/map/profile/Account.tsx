import { Button, Icon } from "@ui-kitten/components";

import ProfileListItem from "./ProfileListItem";
import { ProfileOption } from "../../../types/custom";

const AccountIcon = (
    <Button
        style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "yellow",
        }}
        appearance="ghost"
        accessoryLeft={<Icon name={"person"} fill="black" />}
    />
);

const Account: React.FC = () => {
    return (
        <ProfileListItem
            text={ProfileOption.ACCOUNT}
            onPress={() => {}}
            icon={AccountIcon}
            style={{
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
            }}
        />
    );
};

export default Account;
