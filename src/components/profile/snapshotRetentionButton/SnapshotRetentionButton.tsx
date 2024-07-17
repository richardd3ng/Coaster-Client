import { useState } from "react";

import createStyles from "./styles";
import PreferencesListItem from "../preferencesListItem/PreferencesListItem";
import { PreferencesOption } from "../../../types/navigation";
import SnapshotRetentionDialog, {
    retentionOptions,
} from "../snapshotRetentionDialog/SnapshotRetentionDialog";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { useUserPreferences } from "../../../hooks/react-query/useQueryHooks";
import { useUserId } from "../../../hooks/useUserHooks";
import { SnapshotRetention } from "../../../gql/graphql";

const getRetentionLabel = (
    retention: SnapshotRetention | undefined
): string => {
    const option = retentionOptions.find((opt) => opt.value === retention);
    return option ? option.label : "1 Week";
};

const SnapshotRetentionButton: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const currentUserId = useUserId();
    const {
        data: preferences,
        isLoading,
        isPending,
    } = useUserPreferences(currentUserId);

    return (
        <>
            <PreferencesListItem
                text={PreferencesOption.SnapshotRetention}
                onPress={() => setShowDialog(true)}
                value={getRetentionLabel(preferences?.snapshotRetention)}
                isPending={isLoading || isPending}
                style={styles.toggledListItem}
                hideDivider
            />
            <SnapshotRetentionDialog
                open={showDialog}
                onClose={() => setShowDialog(false)}
            />
        </>
    );
};

export default SnapshotRetentionButton;
