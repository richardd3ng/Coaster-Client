import { useState } from "react";

import PreferencesListItem from "../preferencesListItem/PreferencesListItem";
import { PreferencesOption } from "../../../types/navigation";
import { privacyOptions } from "../snapshotPrivacyDialog/SnapshotPrivacyDialog";
import { SnapshotPrivacy } from "../../../gql/graphql";
import SnapshotPrivacyDialog from "../snapshotPrivacyDialog/SnapshotPrivacyDialog";
import { useUserPreferences } from "../../../hooks/react-query/useQueryHooks";
import { useUserId } from "../../../hooks/useUserHooks";

const getPrivacyLabel = (privacy: SnapshotPrivacy | undefined): string => {
    const option = privacyOptions.find((opt) => opt.value === privacy);
    return option ? option.label : "Everyone";
};

const SnapshotPrivacyButton: React.FC = () => {
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
                text={PreferencesOption.SnapshotPrivacy}
                onPress={() => setShowDialog(true)}
                value={getPrivacyLabel(preferences?.snapshotPrivacy)}
                isPending={isLoading || isPending}
            />
            <SnapshotPrivacyDialog
                open={showDialog}
                onClose={() => setShowDialog(false)}
            />
        </>
    );
};

export default SnapshotPrivacyButton;
