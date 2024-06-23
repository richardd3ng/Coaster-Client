import { useMemo } from "react";

import { View } from "react-native";

import BottomModal from "../../shared/bottomModal/BottomModal";
import BottomModalTopRow from "../../shared/bottomModalTopRow/BottomModalTopRow";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
} from "../../../hooks/context/ModalContext";
import ErrorView from "../../shared/errorView/ErrorView";
import FriendsScrollView from "../friendsScrollView/FriendsScrollView";
import LoadingView from "../../shared/loadingView/LoadingView";
import { useSentRequests } from "../../../hooks/react-query/useQueryHooks";

const SentRequestsBottomModal: React.FC = () => {
    // const styles = useThemeAwareObject(createStyles);
    const snapPoints = useMemo(() => [DEFAULT_SNAP_POINTS[2]], []);
    const {
        data: sentRequests,
        isFetching,
        isError,
        error,
        refetch,
    } = useSentRequests();

    const SentRequestsContent = isFetching ? (
        <LoadingView />
    ) : isError ? (
        <ErrorView message={error.message} onRetry={refetch} />
    ) : sentRequests ? (
        <FriendsScrollView sentRequests={sentRequests} moreResults={[]} />
    ) : null;

    return (
        <BottomModal modalType={ModalType.SentRequests} snapPoints={snapPoints}>
            <View style={{ flex: 1 }}>
                <BottomModalTopRow
                    headerText="Sent Requests"
                    modalType={ModalType.SentRequests}
                />
                {SentRequestsContent}
            </View>
        </BottomModal>
    );
};

export default SentRequestsBottomModal;
