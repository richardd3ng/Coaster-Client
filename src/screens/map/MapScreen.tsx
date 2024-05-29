import AccountBottomModal from "../../components/profile/account/accountBottomModal/AccountBottomModal";
import { BottomSheetProvider } from "../../hooks/context/BottomSheetContext";
import ButtonPanel from "../../components/map/buttonPanel/ButtonPanel";
import ClusterBottomModal from "../../components/clusters/clusterBottomModal/ClusterBottomModal";
import ClusteredMapView from "../../components/map/clusteredMapView/ClusteredMapView";
import JamMemBottomModal from "../../components/jamMems/jamMemBottomModal/JamMemBottomModal";
import MapBottomSheet from "../../components/map/mapBottomSheet/MapBottomSheet";
import { MapContextProvider } from "../../hooks/context/MapContext";
import { ModalProvider } from "../../hooks/context/ModalContext";
import PreferencesBottomModal from "../../components/profile/preferences/preferencesBottomModal/PreferencesBottomModal";
import ProfileBottomModal from "../../components/profile/profileBottomModal/ProfileBottomModal";

const MapScreen: React.FC = () => {
    return (
        <MapContextProvider>
            <ModalProvider>
                <BottomSheetProvider>
                    <ClusteredMapView />
                    <ButtonPanel />
                    <MapBottomSheet />
                    <JamMemBottomModal />
                    <ClusterBottomModal />
                    <ProfileBottomModal />
                    <AccountBottomModal />
                    <PreferencesBottomModal />
                </BottomSheetProvider>
            </ModalProvider>
        </MapContextProvider>
    );
};

export default MapScreen;
