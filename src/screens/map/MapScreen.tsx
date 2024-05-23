import { BottomSheetProvider } from "../../hooks/context/BottomSheetContext";
import ButtonPanel from "../../components/map/buttonPanel/ButtonPanel";
import ClusterBottomModal from "../../components/map/mapView/clusterBottomModal/clusterBottomModal";
import ClusteredMapView from "../../components/map/mapView/clusteredMapView/ClusteredMapView";
import JamMemBottomModal from "../../components/map/mapBottomSheet/jamMems/jamMemBottomModal/JamMemBottomModal";
import MapBottomSheet from "../../components/map/mapBottomSheet/MapBottomSheet";
import { MapContextProvider } from "../../hooks/context/MapContext";
import { ModalProvider } from "../../hooks/context/ModalContext";
import PreferencesBottomModal from "../../components/map/mapBottomSheet/profile/preferences/preferencesBottomModal/PreferencesBottomModal";
import ProfileBottomModal from "../../components/map/mapBottomSheet/profile/profileBottomModal/ProfileBottomModal";

const MapScreen: React.FC = () => {
    return (
        <MapContextProvider>
            <ModalProvider>
                <BottomSheetProvider>
                    <ClusteredMapView />
                    <ButtonPanel />
                    <ClusterBottomModal />
                    <MapBottomSheet />
                    <JamMemBottomModal />
                    <ProfileBottomModal />
                    <PreferencesBottomModal />
                </BottomSheetProvider>
            </ModalProvider>
        </MapContextProvider>
    );
};
export default MapScreen;
