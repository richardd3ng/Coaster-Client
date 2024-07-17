import { useCallback, useMemo, useRef, useState } from "react";

import { View } from "react-native";
import { Input } from "@ui-kitten/components";

import BottomModal from "../../shared/bottomModal/BottomModal";
import BottomModalTopRow from "../../shared/bottomModalTopRow/BottomModalTopRow";
import createStyles from "./styles";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useFriendsModal,
} from "../../../hooks/context/ModalContext";
import ErrorView from "../../shared/errorView/ErrorView";
import { fetchMoreResults } from "../../../api/userAPI";
import { filterUsers } from "../../../utils/userUtils";
import FriendsScrollView from "../friendsScrollView/FriendsScrollView";
import FriendsTabNavigator from "../friendsTabNavigator/FriendsTabNavigator";
import LoadingView from "../../shared/loadingView/LoadingView";
import SearchBar from "../../shared/searchBar/SearchBar";
import { useFriends } from "../../../hooks/react-query/useQueryHooks";
import { useMapBottomSheet } from "../../../hooks/context/BottomSheetContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { UserInfoFragment } from "../../../gql/graphql";
import { useUserId } from "../../../hooks/useUserHooks";

const FriendsBottomModal: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { dismiss, value: initialState } = useFriendsModal();
    const { setSnapIndex: setMapBottomSheetSnapIndex } = useMapBottomSheet();
    const snapPoints = useMemo(() => [DEFAULT_SNAP_POINTS[2]], []);
    const currentUserId = useUserId();
    const {
        data: dataFriends,
        isFetching,
        isError,
        error,
        refetch,
    } = useFriends(currentUserId);
    const [moreResults, setMoreResults] = useState<UserInfoFragment[]>([]);
    const [query, setQuery] = useState<string>("");

    const handleSearch = async (searchQuery: string) => {
        if (searchQuery.trim() === "") {
            setMoreResults([]);
        } else {
            setMoreResults(await fetchMoreResults(currentUserId, searchQuery));
        }
    };

    const handleClose = useCallback(() => {
        setMoreResults([]);
        dismiss();
        setMapBottomSheetSnapIndex(0);
    }, [dismiss, setMapBottomSheetSnapIndex]);

    const handleSheetChanges = useCallback(
        (index: number) => {
            if (index === -1) {
                handleClose();
            }
        },
        [handleClose]
    );

    const FriendsContent = useMemo(() => {
        if (isFetching) {
            return <LoadingView />;
        } else if (isError) {
            return <ErrorView message={error.message} onRetry={refetch} />;
        } else if (query.trim() !== "") {
            return (
                <FriendsScrollView
                    friends={filterUsers(dataFriends ?? [], query)}
                    moreResults={moreResults}
                    refetchQuery={() => handleSearch(query)}
                />
            );
        } else {
            return <FriendsTabNavigator initialRouteName={initialState} />;
        }
    }, [isFetching, isError, error, query, moreResults, handleSearch]);

    const SearchBarRow = (
        <View style={styles.searchBarRowContainer}>
            <SearchBar
                placeholder="Add or search friends"
                onSearch={handleSearch}
                onClear={() => setQuery("")}
                onChangeText={setQuery}
                onCancel={() => setQuery("")}
                style={styles.textInput}
            />
        </View>
    );

    return (
        <BottomModal
            modalType={ModalType.Friends}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            onDismiss={handleClose}
        >
            <View style={{ flex: 1 }}>
                <BottomModalTopRow
                    headerText="Friends"
                    modalType={ModalType.Friends}
                    onClose={handleClose}
                />
                {SearchBarRow}
                {FriendsContent}
            </View>
        </BottomModal>
    );
};

export default FriendsBottomModal;
