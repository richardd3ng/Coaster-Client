import { ActivityIndicator, Alert, Button, Text, View } from "react-native";

import createStyles from "./styles";
import ErrorView from "../../../../shared/errorView/ErrorView";
import LoadingView from "../../../../shared/loadingView/LoadingView";
import JamMemsCarousel from "../jamMemsCarousel/JamMemsCarousel";
import { useJamMemMetadatas } from "../../../../../hooks/react-query/useQueryHooks";
import { useMutationToCreateJamMem } from "../../../../../hooks/react-query/useMutationHooks";
import useThemeAwareObject from "../../../../../hooks/useThemeAwareObject";
import { useEffect } from "react";

const JamMemsStack: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const {
        data: jamMemMetadatas,
        isLoading,
        isError,
        error,
        refetch,
    } = useJamMemMetadatas();
    const {
        mutate: createJamMem,
        isPending,
        isError: createJamMemIsError,
        error: createJamMemError,
        reset,
    } = useMutationToCreateJamMem();

    useEffect(() => {
        if (createJamMemIsError && createJamMemError) {
            Alert.alert(createJamMemError.message);
        }
        reset();
    }, [createJamMemIsError]);

    const JamMemsContent = isLoading ? (
        <LoadingView containerStyle={styles.errorLoadingContainer} />
    ) : isError ? (
        <ErrorView
            message={error.message}
            onTryAgain={refetch}
            containerStyle={styles.errorLoadingContainer}
        />
    ) : jamMemMetadatas ? (
        <JamMemsCarousel jamMemMetadatas={jamMemMetadatas} />
    ) : null;

    return (
        <View style={styles.jamSessionStack}>
            <Text style={styles.headerText}>Jam Mems</Text>
            {!isPending ? (
                <Button
                    title="+ Jam Mem"
                    onPress={() => {
                        createJamMem({
                            title: "Flo Rida 2.0",
                            location: "Miami, FL",
                            start: new Date(),
                            end: new Date(),
                            coverUri:
                                "https://source.unsplash.com/random/200x200",
                        });
                    }}
                />
            ) : (
                <ActivityIndicator />
            )}
            {JamMemsContent}
        </View>
    );
};

export default JamMemsStack;
