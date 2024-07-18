import { ToastConfig } from "react-native-toast-message";

import { ErrorToast } from "../errorToast/ErrorToast";
import { FriendToast } from "../friendsToast/FriendsToast";
import { SnapshotToast } from "../snapshotToast/SnapshotToast";

export enum ToastType {
    Error = "error",
    Friend = "friend",
    Snapshot = "snapshot",
}

const toastConfig: ToastConfig = {
    [ToastType.Error]: (props) => <ErrorToast {...props} />,
    [ToastType.Friend]: (props) => (
        <FriendToast
            {...props}
            profileUrl={props.props?.profileUrl}
            tabName={props.props?.tabName}
        />
    ),
    [ToastType.Snapshot]: (props) => <SnapshotToast {...props} />,
};

export default toastConfig;
