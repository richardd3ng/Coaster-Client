import { useCallback } from "react";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import Account from "./Account";
import Logout from "./Logout";
import Preferences from "./Preferences";
import { ProfileOption } from "../../../types/custom";
import styles from "./styles";

const componentMap = new Map<ProfileOption, JSX.Element>([
    [ProfileOption.ACCOUNT, <Account />],
    [ProfileOption.PREFERENCES, <Preferences />],
    [ProfileOption.LOGOUT, <Logout />],
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
            style={styles.profileBottomSheetFlatList}
        />
    );
};

export default ProfileList;
