import { LocationError } from "react-native-background-geolocation";
import Toast from "react-native-toast-message";

export const showGeolocationErrorToast = (error: LocationError) => {
    let text;
    switch (error) {
        case 0:
            text = "GPS signal not found.";
            break;
        case 1:
            text = "Location permission denied.";
            break;
        case 2:
            text = "Network error.";
            break;
        case 3:
            text =
                "Attempt to initiate location-services in background with WhenInUse authorization.";
            break;
        case 408:
            text = "Location request timed out.";
            break;
        case 499:
            text = "Location request canceled.";
            break;
    }
    Toast.show({
        type: "error",
        text1: text,
        visibilityTime: 10000,
    });
};
