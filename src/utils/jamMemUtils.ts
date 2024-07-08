import { Alert } from "react-native";

const checkMissingDetails = (
    name: string,
    location: string,
    startDate: Date,
    endDate: Date
): string[] => {
    const missingDetails: string[] = [];
    if (!name.trim()) {
        missingDetails.push("name");
    }
    if (!location.trim()) {
        missingDetails.push("location");
    }
    if (!startDate) {
        missingDetails.push("start date");
    }
    if (!endDate) {
        missingDetails.push("end date");
    }
    return missingDetails;
};

const generateAlertMessage = (missingDetails: string[]): string => {
    let alertMessage = "Please provide ";
    if (missingDetails.length === 1) {
        alertMessage += `a ${missingDetails[0]}.`;
    } else if (missingDetails.length === 2) {
        alertMessage += `a ${missingDetails[0]} and ${missingDetails[1]}.`;
    } else {
        alertMessage += "the following details: ";
        alertMessage += missingDetails.slice(0, -1).join(", ");
        alertMessage += `, and ${missingDetails[missingDetails.length - 1]}.`;
    }
    return alertMessage;
};

export const validateInputs = (
    name: string,
    location: string,
    startDate: Date,
    endDate: Date
): boolean => {
    const missingDetails: string[] = checkMissingDetails(
        name,
        location,
        startDate,
        endDate
    );
    if (missingDetails.length > 0) {
        Alert.alert(generateAlertMessage(missingDetails));
        return false;
    }
    return true;
};
