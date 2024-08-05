import { LocationError } from "react-native-background-geolocation";
import Toast from "react-native-toast-message";

import { FriendsTabName, JamMemTabName } from "../types/navigation";
import { ToastType } from "../components/shared/toastConfig/toastConfig";

const DEFAULT_VISIBILITY_TIME = 5000;
const FRIENDS_VISIBILITY_TIME = 10000;

export const showErrorToast = (error: string | Error) => {
    Toast.show({
        type: ToastType.Error,
        text1: typeof error === "string" ? error : error.message,
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

export const showSnapshotToast = (count: number) => {
    Toast.show({
        type: ToastType.Snapshot,
        text1: `Successfully recorded ${count} snapshot${count !== 1 ? "s" : ""}!`,
        visibilityTime: DEFAULT_VISIBILITY_TIME,
    });
};

export interface JamMemToastArgs {
    displayName: string;
    profileUrl: string;
}
export const showIncomingFriendRequestToast = ({
    displayName,
    profileUrl,
}: JamMemToastArgs) => {
    Toast.show({
        type: ToastType.Friend,
        text1: `${displayName} sent you a friend request!`,
        visibilityTime: FRIENDS_VISIBILITY_TIME,
        props: { profileUrl, tabName: FriendsTabName.Requests },
    });
};

export const showFriendRequestAcceptedToast = ({
    displayName,
    profileUrl,
}: JamMemToastArgs) => {
    Toast.show({
        type: ToastType.Friend,
        text1: `You and ${displayName} are now friends!`,
        visibilityTime: FRIENDS_VISIBILITY_TIME,
        props: { profileUrl },
    });
};

export interface JamMemToastArgs {
    jamMemId: string;
    displayName: string;
    profileUrl: string;
}
export const showAddedToJamMemToast = ({
    jamMemId,
    displayName,
    profileUrl,
}: JamMemToastArgs) => {
    Toast.show({
        type: ToastType.JamMem,
        text1: `${displayName} added you to a Jam Mem!`,
        visibilityTime: FRIENDS_VISIBILITY_TIME,
        props: { jamMemId, profileUrl, tabName: JamMemTabName.JamFriends },
    });
};
