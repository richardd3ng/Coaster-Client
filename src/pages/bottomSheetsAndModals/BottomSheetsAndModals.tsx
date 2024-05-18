import { BottomSheetProvider } from "../../hooks/context/BottomSheetContext";
import MapBottomSheet from "../../components/map/mapBottomSheet/MapBottomSheet";
import { ModalProvider } from "../../hooks/context/ModalContext";
import JamMemBottomModal from "../../components/jamMems/jamMemBottomModal/JamMemBottomModal";
import ProfileBottomModal from "../../components/map/profile/profileBottomModal/ProfileBottomModal";

const BottomSheetsAndModals: React.FC = () => (
    <BottomSheetProvider>
        <ModalProvider>
            <MapBottomSheet />
            <JamMemBottomModal />
            <ProfileBottomModal />
        </ModalProvider>
    </BottomSheetProvider>
);

export default BottomSheetsAndModals;
