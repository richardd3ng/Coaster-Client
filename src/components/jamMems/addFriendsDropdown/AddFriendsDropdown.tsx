import { ReactElement, useCallback, useEffect, useState } from "react";

import { IndexPath, Select, SelectItem } from "@ui-kitten/components";

import styles from "./styles";
import { UserInfoFragment } from "../../../gql/graphql";

interface AddFriendsDropdownProps {
    friends: UserInfoFragment[];
    onSelect: (selectedIndex: IndexPath[]) => void;
    placeholder?: string;
}

const AddFriendsDropdown: React.FC<AddFriendsDropdownProps> = ({
    friends,
    onSelect,
    placeholder = "Select",
}: AddFriendsDropdownProps) => {
    const [selectedIndex, setSelectedIndex] = useState<IndexPath[]>([]);

    useEffect(() => {
        return () => {
            handleSelect([]);
        };
    }, []);

    const renderOption = useCallback(
        (friend: UserInfoFragment): ReactElement => (
            <SelectItem
                key={friend._id}
                title={`${friend.displayName} (${friend.username})`}
            />
        ),
        []
    );

    const handleSelect = useCallback(
        (index: IndexPath[]) => {
            setSelectedIndex(index);
            onSelect(index);
        },
        [setSelectedIndex, onSelect]
    );

    return (
        <Select
            selectedIndex={selectedIndex}
            placeholder={placeholder}
            style={styles.select}
            multiSelect
            onSelect={(index) => {
                handleSelect(index as IndexPath[]);
            }}
            value={selectedIndex
                .map((index) => friends[index.row].displayName)
                .join(", ")}
        >
            {friends.map(renderOption)}
        </Select>
    );
};

export default AddFriendsDropdown;
