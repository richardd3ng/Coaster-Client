import {
    createContext,
    MutableRefObject,
    ReactNode,
    useCallback,
    useContext,
    useRef,
    useState,
} from "react";

import { BottomSheetModal } from "@gorhom/bottom-sheet";

export enum ModalType {
    Profile,
}

interface ModalContextType {
    presentModal: (modalType: ModalType) => void;
    dismissModal: (modalType: ModalType) => void;
    modalRefs: Record<ModalType, MutableRefObject<BottomSheetModal | null>>;
    isModalVisible: (modalType: ModalType) => boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const modalRefs: Record<
        ModalType,
        MutableRefObject<BottomSheetModal | null>
    > = {
        [ModalType.Profile]: useRef<BottomSheetModal>(null),
    };
    const [visibleModals, setVisibleModals] = useState<
        Record<ModalType, boolean>
    >({
        [ModalType.Profile]: false,
    });

    const presentModal = useCallback((modalType: ModalType) => {
        modalRefs[modalType]?.current?.present();
        setVisibleModals((prev) => ({ ...prev, [modalType]: true }));
    }, []);

    const dismissModal = useCallback((modalType: ModalType) => {
        modalRefs[modalType]?.current?.dismiss();
        setVisibleModals((prev) => ({ ...prev, [modalType]: false }));
    }, []);

    const isModalVisible = useCallback(
        (modalType: ModalType) => !!visibleModals[modalType],
        [visibleModals]
    );

    return (
        <ModalContext.Provider
            value={{ presentModal, dismissModal, modalRefs, isModalVisible }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
