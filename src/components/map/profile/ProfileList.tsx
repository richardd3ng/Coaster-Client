import { useCallback } from "react";

import { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import Account from "./Account";
import Logout from "./Logout";
import Preferences from "./Preferences";
import { ProfileOption } from "../../../types/custom";
import styles from "./styles";

const data: ProfileOption[] = [
    ProfileOption.ACCOUNT,
    ProfileOption.PREFERENCES,
    ProfileOption.LOGOUT,
];

const map = {
    [ProfileOption.ACCOUNT]: <Account />,
    [ProfileOption.PREFERENCES]: <Preferences />,
    [ProfileOption.LOGOUT]: <Logout />,
};

const ProfileList: React.FC = () => {
    const renderItem = useCallback(
        ({ item }: { item: ProfileOption }) => map[item],
        []
    );

    return (
        <BottomSheetFlatList
            data={data}
            keyExtractor={(profileOption) => profileOption.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            style={styles.profileBottomSheetFlatList}
            scrollEnabled // TODO: find out why this behaves weird
        />
    );
};

export default ProfileList;
