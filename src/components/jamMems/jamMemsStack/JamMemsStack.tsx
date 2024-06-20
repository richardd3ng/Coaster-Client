import { useState } from "react";

import { Button, Text, View } from "react-native";

import createStyles from "./styles";
import ErrorView from "../../shared/errorView/ErrorView";
import LoadingView from "../../shared/loadingView/LoadingView";
import JamMemsCarousel from "../jamMemsCarousel/JamMemsCarousel";
import JamMemCreationDialog from "../jamMemCreationDialog/JamMemCreationDialog";
import { useJamMemMetadatas } from "../../../hooks/react-query/useQueryHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const JamMemsStack: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const {
        data: jamMemMetadatas,
        isLoading,
        isError,
        error,
        refetch,
    } = useJamMemMetadatas();
    const [showCreationDialog, setShowCreationDialog] =
        useState<boolean>(false);

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
        <>
            <View style={styles.jamSessionStack}>
                <Text style={styles.headerText}>Jam Mems</Text>
                <Button
                    title="+ Jam Mem"
                    onPress={() => setShowCreationDialog(true)}
                />
                {JamMemsContent}
            </View>
            <JamMemCreationDialog
                open={showCreationDialog}
                onClose={() => setShowCreationDialog(false)}
            />
        </>
    );
};

export default JamMemsStack;
