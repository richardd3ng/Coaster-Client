import { useCallback } from "react";

import { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import Account from "../account/Account";
import Logout from "../logout/Logout";
import Preferences from "../preferences/Preferences";
import { ProfileOption } from "../../../../../types/custom";
import styles from "./styles";

const componentMap = new Map<ProfileOption, JSX.Element>([
    [ProfileOption.Account, <Account />],
    [ProfileOption.Preferences, <Preferences />],
    [ProfileOption.Logout, <Logout />],
]);

const ProfileList: React.FC = () => {
    const renderItem = useCallback(
        ({ item }: { item: ProfileOption }) => componentMap.get(item)!,
        []
    );

    return (
        <BottomSheetFlatList
            data={Array.from(componentMap.keys())}
            keyExtractor={(profileOption) => profileOption.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            style={styles.flatlist}
        />
    );
};

export default ProfileList;
