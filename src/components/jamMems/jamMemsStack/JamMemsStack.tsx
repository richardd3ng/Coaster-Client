import { Text, View } from "react-native";

import CreateButton from "../createButton/CreateButton";
import createStyles from "./styles";
import ErrorView from "../../shared/errorView/ErrorView";
import LoadingView from "../../shared/loadingView/LoadingView";
import JamMemsCarousel from "../jamMemsCarousel/JamMemsCarousel";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { useJamMemMetadatas } from "../../../hooks/react-query/useQueryHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const JamMemsStack: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const currentUserId = useCurrentUser().id;
    const {
        data: jamMemMetadatas,
        isLoading,
        isError,
        error,
        refetch,
    } = useJamMemMetadatas(currentUserId);

    const JamMemsContent = isLoading ? (
        <LoadingView containerStyle={styles.errorLoadingContainer} />
    ) : isError ? (
        <ErrorView
            message={error.message}
            onRetry={refetch}
            containerStyle={styles.errorLoadingContainer}
        />
    ) : jamMemMetadatas ? (
        <JamMemsCarousel jamMemMetadatas={jamMemMetadatas} />
    ) : null;

    return (
        <>
            <View style={styles.jamSessionStack}>
                <Text style={styles.headerText}>Jam Mems</Text>
                <CreateButton />
                {JamMemsContent}
            </View>
        </>
    );
};

export default JamMemsStack;
