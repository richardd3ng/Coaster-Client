import { useState } from "react";

import createStyles from "./styles";
import PreferencesListItem from "../preferencesListItem/PreferencesListItem";
import { PreferencesOption } from "../../../../types/navigation";
import { privacyOptions } from "../../snapshotPrivacyDialog/SnapshotPrivacyDialog";
import { SnapshotPrivacy } from "../../../../gql/graphql";
import SnapshotPrivacyDialog from "../../snapshotPrivacyDialog/SnapshotPrivacyDialog";
import useCurrentUser from "../../../../hooks/useCurrentUser";
import useThemeAwareObject from "../../../../hooks/useThemeAwareObject";
import { useUserPreferences } from "../../../../hooks/react-query/useQueryHooks";

const getPrivacyLabel = (privacy: SnapshotPrivacy | undefined): string => {
    const option = privacyOptions.find((opt) => opt.value === privacy);
    return option ? option.label : "Everyone";
};

const SnapshotPrivacyComponent: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const currentUserId = useCurrentUser().id;
    const {
        data: preferences,
        isLoading,
        isPending,
    } = useUserPreferences(currentUserId);

    return (
        <>
            <PreferencesListItem
                text={PreferencesOption.SnapshotPrivacy}
                onPress={() => setShowDialog(true)}
                value={getPrivacyLabel(preferences?.snapshotPrivacy)}
                isPending={isLoading || isPending}
                style={styles.toggledListItem}
                hideDivider
            />
            <SnapshotPrivacyDialog
                open={showDialog}
                onClose={() => setShowDialog(false)}
            />
        </>
    );
};

export default SnapshotPrivacyComponent;
