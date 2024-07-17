import { Text, View } from "react-native";

import CreateButton from "../createButton/CreateButton";
import createStyles from "./styles";
import ErrorView from "../../shared/errorView/ErrorView";
import LoadingView from "../../shared/loadingView/LoadingView";
import JamMemCarousel from "../jamMemCarousel/JamMemCarousel";
import {
    useJamMemMetadatas,
    useJamMemMetadatasShared,
} from "../../../hooks/react-query/useQueryHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { useUserId } from "../../../hooks/useUserHooks";

const JamMemStack: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const currentUserId = useUserId();
    const {
        data: jamMemMetadatas,
        isLoading,
        isError,
        error,
        refetch,
    } = useJamMemMetadatas(currentUserId);
    const {
        data: jamMemMetadatasShared,
        isLoading: isLoadingShared,
        isError: isErrorShared,
        error: errorShared,
        refetch: refetchShared,
    } = useJamMemMetadatasShared(currentUserId);

    const JamMemsContent = isLoading ? (
        <LoadingView />
    ) : isError ? (
        <ErrorView message={error.message} onRetry={refetch} />
    ) : jamMemMetadatas ? (
        <JamMemCarousel
            jamMemMetadatas={jamMemMetadatas}
            emptyMessage="You have no Jam Mems. Go make some!"
        />
    ) : null;

    const JamMemsContentShared = isLoadingShared ? (
        <LoadingView />
    ) : isErrorShared ? (
        <ErrorView message={errorShared.message} onRetry={refetchShared} />
    ) : jamMemMetadatasShared ? (
        <JamMemCarousel
            jamMemMetadatas={jamMemMetadatasShared}
            emptyMessage="You have no shared Jam Mems. Ask your friends!"
        />
    ) : null;

    return (
        <View style={styles.jamSessionStack}>
            <Text style={styles.headerText}>Jam Mems</Text>
            <Text style={styles.myJamMemsText}>My Jam Mems</Text>
            <CreateButton />
            {JamMemsContent}
            <Text style={styles.sharedJamMemsText}>Shared Jam Mems</Text>
            {JamMemsContentShared}
        </View>
    );
};

export default JamMemStack;
