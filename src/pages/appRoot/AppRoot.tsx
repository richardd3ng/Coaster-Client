import { useMemo, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { BottomSheetProvider } from "../../context/BottomSheetContext";
import { DateFilter, SocialFilter } from "../../types/custom";
import {
    DEFAULT_DATE_FILTER,
    DEFAULT_SOCIAL_FILTER,
} from "../../utils/defaults";
import JamMemBottomModal from "../../components/jamMems/JamMemBottomModal";
import MapBottomSheet from "../../components/map/bottomSheet/MapBottomSheet";
import MapContext from "../../context/MapContext";
import MapIconButton from "../../components/map/MapIconButton";
import { MapRegion } from "../../types/custom";
import MapScreen from "../mapScreen/MapScreen";
import { ModalProvider } from "../../context/ModalContext";
import ProfileBottomModal from "../../components/map/profile/ProfileBottomModal";
import styles from "./styles";
// import useSnapshot from "../../hooks/useSnapshotBackground";

const AppRoot = () => {
    // useSnapshot();
    const [region, setRegion] = useState<MapRegion>(null);

    const [dateFilter, setDateFilter] =
        useState<DateFilter>(DEFAULT_DATE_FILTER);
    const [socialFilter, setSocialFilter] = useState<SocialFilter>(
        DEFAULT_SOCIAL_FILTER
    );
    const [followsUserLocation, setFollowsUserLocation] =
        useState<boolean>(true);

    const SocialFilterStack = useMemo(
        () => (
            <View style={styles.buttonStack}>
                <MapIconButton
                    name="person"
                    onPress={() => setSocialFilter(SocialFilter.ME)}
                    filled={socialFilter === SocialFilter.ME}
                />
                <MapIconButton
                    name="people"
                    onPress={() => setSocialFilter(SocialFilter.FRIENDS)}
                    filled={socialFilter === SocialFilter.FRIENDS}
                />
                <MapIconButton
                    name="globe-2"
                    onPress={() => setSocialFilter(SocialFilter.GLOBAL)}
                    filled={socialFilter === SocialFilter.GLOBAL}
                />
            </View>
        ),
        [socialFilter]
    );

    const BottomSheet = useMemo(
        () => (
            <BottomSheetProvider>
                <ModalProvider>
                    <MapBottomSheet />
                    <JamMemBottomModal />
                    <ProfileBottomModal />
                </ModalProvider>
            </BottomSheetProvider>
        ),
        []
    );

    const NavButton = useMemo(
        () => (
            <MapIconButton
                name="navigation-2"
                onPress={() => setFollowsUserLocation(!followsUserLocation)}
                filled={followsUserLocation}
            />
        ),
        [followsUserLocation]
    );

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <MapContext.Provider
                value={{
                    dateFilter,
                    socialFilter,
                    followsUserLocation,
                    setFollowsUserLocation,
                    region,
                    setRegion,
                }}
            >
                <MapScreen />
                <View style={styles.buttonContainer}>
                    {NavButton}
                    {SocialFilterStack}
                </View>
                {BottomSheet}
            </MapContext.Provider>
        </View>
    );
};

export default AppRoot;
