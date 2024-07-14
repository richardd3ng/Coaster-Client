import { ToastConfig } from "react-native-toast-message";

import { ErrorToast } from "../errorToast/ErrorToast";
import { FriendToast } from "../friendsToast/FriendsToast";

export enum ToastType {
    Error = "error",
    Friend = "friend",
}

const toastConfig: ToastConfig = {
    [ToastType.Error]: (props) => (
        <ErrorToast {...props} />
    ),
    [ToastType.Friend]: (props) => (
        <FriendToast {...props} profileUrl={props.props?.profileUrl} />
    ),
};

export default toastConfig;
