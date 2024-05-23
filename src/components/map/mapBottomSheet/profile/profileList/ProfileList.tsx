import { useCallback } from "react";

import { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import Account from "../account/Account";
import createStyles from "./styles";
import Logout from "../logout/Logout";
import Preferences from "../preferences/Preferences";
import { ProfileOption } from "../../../../../types/navigation";
import useThemeAwareObject from "../../../../../hooks/useThemeAwareObject";

const componentMap = new Map<ProfileOption, JSX.Element>([
    [ProfileOption.Account, <Account />],
    [ProfileOption.Preferences, <Preferences />],
    [ProfileOption.Logout, <Logout />],
]);

const ProfileList: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
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
