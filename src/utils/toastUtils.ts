import { ErrorEvent, TimeoutEvent, ExceptionEvent } from "react-native-sse";
import { LocationError } from "react-native-background-geolocation";
import Toast from "react-native-toast-message";

import { FriendsTabName } from "../types/navigation";
import { ToastType } from "../components/shared/toastConfig/toastConfig";

const DEFAULT_VISIBILITY_TIME = 5000;

export const showErrorToast = (error: string | Error) => {
    Toast.show({
        type: ToastType.Error,
        text1: typeof error === "string" ? error : error.message,
        visibilityTime: DEFAULT_VISIBILITY_TIME,
    });
};

export const showConnectionLostErrorToast = (
    error: string | ErrorEvent | TimeoutEvent | ExceptionEvent
) => {
    Toast.show({
        type: ToastType.Error,
        text1:
            typeof error === "string"
                ? error
                : "message" in error
                ? error.message
                : "Connection timed out",
        visibilityTime: DEFAULT_VISIBILITY_TIME,
    });
};

export const showGeolocationErrorToast = (error: LocationError) => {
    let text1;
    switch (error) {
        case 0:
            text1 = "GPS signal not found.";
            break;
        case 1:
            text1 = "Location permission denied.";
            break;
        case 2:
            text1 = "Network error.";
            break;
        case 3:
            text1 =
                "Attempt to initiate location-services in background with WhenInUse authorization.";
            break;
        case 408:
            text1 = "Location request timed out.";
            break;
        case 499:
            text1 = "Location request canceled.";
            break;
    }
    Toast.show({
        type: ToastType.Error,
        text1,
        visibilityTime: DEFAULT_VISIBILITY_TIME,
    });
};

export interface FriendToastArgs {
    displayName: string;
    profileUrl: string;
}
export const showIncomingFriendRequestToast = ({
    displayName,
    profileUrl,
}: FriendToastArgs) => {
    Toast.show({
        type: ToastType.Friend,
        text1: `${displayName} sent you a friend request!`,
        visibilityTime: DEFAULT_VISIBILITY_TIME,
        props: { profileUrl, tabName: FriendsTabName.Requests },
    });
};

export const showFriendRequestAcceptedToast = ({
    displayName,
    profileUrl,
}: FriendToastArgs) => {
    Toast.show({
        type: ToastType.Friend,
        text1: `You and ${displayName} are now friends!`,
        visibilityTime: DEFAULT_VISIBILITY_TIME,
        props: { profileUrl },
    });
}
