import { Button, Icon } from "@ui-kitten/components";

import ProfileListItem from "./ProfileListItem";
import { ProfileOption } from "../../../types/custom";

const PreferencesIcon = (
    <Button
        style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "gray",
        }}
        appearance="ghost"
        accessoryLeft={<Icon name={"settings"} fill="black" />}
    />
);

const Preferences: React.FC = () => {
    return (
        <ProfileListItem
            profileOption={ProfileOption.PREFERENCES}
            onPress={() => {}}
            icon={PreferencesIcon}
        />
    );
};

export default Preferences;
