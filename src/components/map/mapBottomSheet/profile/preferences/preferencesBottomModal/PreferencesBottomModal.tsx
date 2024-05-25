import { ModalType } from "../../../../../../hooks/context/ModalContext";
import PreferencesList from "../preferencesList/PreferencesList";
import BottomModalTopRow from "../../../../../shared/bottomModalTopRow/BottomModalTopRow";
import BottomModal from "../../../../../shared/bottomModal/BottomModal";

const PreferencesBottomModal: React.FC = () => {
    return (
        <BottomModal modalType={ModalType.Preferences}>
            <BottomModalTopRow
                headerText="Preferences"
                modalType={ModalType.Preferences}
            />
            <PreferencesList />
        </BottomModal>
    );
};

export default PreferencesBottomModal;
