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
    JamMem,
}

interface ModalContextType {
    presentModal: (modalType: ModalType) => void;
    dismissModal: (modalType: ModalType) => void;
    modalRefs: Record<ModalType, MutableRefObject<BottomSheetModal | null>>;
    isModalVisible: (modalType: ModalType) => boolean;
    snapIndexes: Record<ModalType, number>;
    setSnapIndex: (modalType: ModalType, index: number) => void;
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
        [ModalType.JamMem]: useRef<BottomSheetModal>(null),
    };

    const [visibleModals, setVisibleModals] = useState<
        Record<ModalType, boolean>
    >({
        [ModalType.Profile]: false,
        [ModalType.JamMem]: false,
    });

    const [snapIndexes, setSnapIndexes] = useState<Record<ModalType, number>>({
        [ModalType.Profile]: 0,
        [ModalType.JamMem]: 0,
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

    const setSnapIndex = useCallback((modalType: ModalType, index: number) => {
        setSnapIndexes((prev) => ({ ...prev, [modalType]: index }));
    }, []);

    return (
        <ModalContext.Provider
            value={{
                presentModal,
                dismissModal,
                modalRefs,
                isModalVisible,
                snapIndexes,
                setSnapIndex,
            }}
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
