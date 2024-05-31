import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Input } from "@ui-kitten/components";
import { View } from "react-native";

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
import { filterUsers } from "../../../utils/userUtils";
import FriendsScrollView from "../friendsScrollView/FriendsScrollView";
import LoadingView from "../../shared/loadingView/LoadingView";
import SearchBar from "../../shared/searchBar/SearchBar";
import { useFriends } from "../../../hooks/react-query/useQueryHooks";
import { User } from "../../../types/entities";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { fetchMoreResults } from "../../../api/userAPI";

const FriendsBottomModal: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { dismiss } = useModal();
    const { setSnapIndex } = useBottomSheet();
    const snapPoints = useMemo(() => [DEFAULT_SNAP_POINTS[2]], []);
    const {
        data: dataFriends,
        isFetching: isFetchingFriends,
        isError: isErrorFriends,
        error: errorFriends,
        refetch: refetchFriends,
    } = useFriends();
    const [friends, setFriends] = useState<User[]>(dataFriends ?? []);
    const [moreResults, setMoreResults] = useState<User[]>([]);
    const [showCancel, setShowCancel] = useState<boolean>(false);
    const searchBarInputRef = useRef<Input>(null);

    useEffect(() => {
        setFriends(dataFriends ?? []);
    }, [dataFriends]);

    const clearSearch = useCallback(() => {
        searchBarInputRef.current?.blur();
        searchBarInputRef.current?.clear();
        setFriends(dataFriends ?? []);
        setMoreResults([]);
    }, []);

    const handleSearch = useCallback(async (query: string) => {
        setFriends(filterUsers(dataFriends ?? [], query));
        setMoreResults(await fetchMoreResults(query));
    }, []);

    const handleCancel = useCallback(() => {
        clearSearch();
        setShowCancel(false);
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

    const FriendsContent = isFetchingFriends ? (
        <LoadingView />
    ) : isErrorFriends ? (
        <ErrorView message={errorFriends.message} onTryAgain={refetchFriends} />
    ) : friends ? (
        <FriendsScrollView friends={friends} moreResults={moreResults} />
    ) : null;

    const SearchBarRow = (
        <View style={styles.searchBarRowContainer}>
            <SearchBar
                ref={searchBarInputRef}
                placeholder="Add or search friends"
                onSearch={handleSearch}
                onClear={() => setMoreResults([])}
                onFocus={() => setShowCancel(true)}
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
