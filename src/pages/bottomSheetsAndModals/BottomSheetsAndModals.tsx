import ClusterBottomModal from "../../components/clusters/clusterBottomModal/clusterBottomModal";
import MapBottomSheet from "../../components/map/mapBottomSheet/MapBottomSheet";
import JamMemBottomModal from "../../components/jamMems/jamMemBottomModal/JamMemBottomModal";
import ProfileBottomModal from "../../components/map/profile/profileBottomModal/ProfileBottomModal";

const BottomSheetsAndModals: React.FC = () => (
    <>
        <ClusterBottomModal />
        <MapBottomSheet />
        <JamMemBottomModal />
        <ProfileBottomModal />
    </>
);

export default BottomSheetsAndModals;
