import Toast from "react-native-toast-message";

import AccountBottomModal from "../../components/profile/accountBottomModal/AccountBottomModal";
import { BottomSheetProvider } from "../../hooks/context/BottomSheetContext";
import ButtonPanel from "../../components/map/mapPanel/MapPanel";
import ClusterBottomModal from "../../components/clusters/clusterBottomModal/ClusterBottomModal";
import ClusteredMapView from "../../components/map/clusteredMapView/ClusteredMapView";
import FriendsBottomModal from "../../components/friends/friendsBottomModal/FriendsBottomModal";
import JamMemBottomModal from "../../components/jamMems/jamMemBottomModal/JamMemBottomModal";
import MapBottomSheet from "../../components/mapBottomSheet/MapBottomSheet";
import { MapContextProvider } from "../../hooks/context/MapContext";
import { ModalProvider } from "../../hooks/context/ModalContext";
import PreferencesBottomModal from "../../components/profile/preferences/preferencesBottomModal/PreferencesBottomModal";
import ProfileBottomModal from "../../components/profile/profileBottomModal/ProfileBottomModal";
import SearchResultsBottomModal from "../../components/map/searchResultsBottomModal/SearchResultsBottomModal";
import SentRequestsBottomModal from "../../components/friends/sentRequestsBottomModal/SentRequestsBottomModal";
import toastConfig from "../../components/shared/toastConfig/toastConfig";

const MapScreen: React.FC = () => {
    return (
        <MapContextProvider>
            <ModalProvider>
                <BottomSheetProvider>
                    <ClusteredMapView />
                    <ButtonPanel />
                    <MapBottomSheet />
                    <FriendsBottomModal />
                    <SentRequestsBottomModal />
                    <JamMemBottomModal />
                    <SearchResultsBottomModal />
                    <ClusterBottomModal />
                    <ProfileBottomModal />
                    <AccountBottomModal />
                    <PreferencesBottomModal />
                    <Toast config={toastConfig} />
                </BottomSheetProvider>
            </ModalProvider>
        </MapContextProvider>
    );
};

export default MapScreen;
