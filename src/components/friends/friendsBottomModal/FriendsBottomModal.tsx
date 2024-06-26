import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Input } from "@ui-kitten/components";
import { Button, View } from "react-native";

import BottomModal from "../../shared/bottomModal/BottomModal";
import BottomModalTopRow from "../../shared/bottomModalTopRow/BottomModalTopRow";
import {
    BottomSheetType,
    useBottomSheet,
} from "../../../hooks/context/BottomSheetContext";
import CancelTextPressable from "../../map/mapBottomSheet/search/cancelTextPressable/CancelTextPressable";
import createStyles from "./styles";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useModal,
} from "../../../hooks/context/ModalContext";
import ErrorView from "../../shared/errorView/ErrorView";
import { fetchMoreResults } from "../../../api/userAPI";
import { filterUsers } from "../../../utils/userUtils";
import FriendsScrollView from "../friendsScrollView/FriendsScrollView";
import LoadingView from "../../shared/loadingView/LoadingView";
import SearchBar from "../../shared/searchBar/SearchBar";
import {
    useFriends,
    useSentRequests,
} from "../../../hooks/react-query/useQueryHooks";
import { UserInfo } from "../../../types/entities";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const FriendsBottomModal: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { dismiss, present } = useModal();
    const { setSnapIndex } = useBottomSheet();
    const snapPoints = useMemo(() => [DEFAULT_SNAP_POINTS[2]], []);
    const {
        data: dataFriends,
        isFetching,
        isError,
        error,
        refetch,
    } = useFriends();
    const { data: sentRequests } = useSentRequests();
    const [filteredFriends, setFilteredFriends] = useState<UserInfo[]>(
        dataFriends ?? []
    );
    const [moreResults, setMoreResults] = useState<UserInfo[]>([]);
    const [showCancel, setShowCancel] = useState<boolean>(false);
    const searchBarInputRef = useRef<Input>(null);
    const [query, setQuery] = useState<string>("");

    useEffect(() => {
        setFilteredFriends(dataFriends ?? []);
    }, [dataFriends]);

    const clearSearch = useCallback(() => {
        setQuery("");
        searchBarInputRef.current?.blur();
        searchBarInputRef.current?.clear();
        setFilteredFriends(dataFriends ?? []);
        setMoreResults([]);
    }, []);

    const handleSearch = async () => {
        if (query.trim() === "") {
            return;
        }
        setFilteredFriends(filterUsers(dataFriends ?? [], query));
        setMoreResults(await fetchMoreResults(query));
    };

    const handleCancel = useCallback(() => {
        clearSearch();
        setShowCancel(false);
        setQuery("");
    }, []);

    const handleClose = useCallback(() => {
        setShowCancel(false);
        clearSearch();
        dismiss(ModalType.Friends);
        setSnapIndex(BottomSheetType.Map, 0);
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            handleClose();
        }
    }, []);

    const FriendsContent = isFetching ? (
        <LoadingView />
    ) : isError ? (
        <ErrorView message={error.message} onRetry={refetch} />
    ) : filteredFriends ? (
        <FriendsScrollView
            friends={query.trim() !== "" ? filteredFriends : dataFriends}
            moreResults={moreResults}
            refetchQuery={handleSearch}
        />
    ) : null;

    const SearchBarRow = (
        <View style={styles.searchBarRowContainer}>
            <SearchBar
                ref={searchBarInputRef}
                placeholder="Add or search friends"
                onSearch={handleSearch}
                onClear={() => setMoreResults([])}
                onFocus={() => setShowCancel(true)}
                onChangeText={setQuery}
                style={styles.textInput}
            />
            {showCancel && (
                <CancelTextPressable
                    style={styles.cancelButton}
                    onPress={handleCancel}
                />
            )}
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
                <Button
                    title="sent requests"
                    onPress={() => present(ModalType.SentRequests)}
                />
                {FriendsContent}
            </View>
        </BottomModal>
    );
};

export default FriendsBottomModal;
