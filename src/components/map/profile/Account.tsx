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
            profileOption={ProfileOption.ACCOUNT}
            onPress={() => {}}
            icon={AccountIcon}
        />
    );
};

export default Account;
