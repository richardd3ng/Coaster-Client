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

export const DEFAULT_SNAP_POINTS = ["10%", "35%", "92.5%"];

interface ModalContextType {
    present: (modalType: ModalType) => void;
    dismiss: (modalType: ModalType) => void;
    refs: Record<ModalType, MutableRefObject<BottomSheetModal | null>>;
    isVisible: (modalType: ModalType) => boolean;
    snapIndexes: Record<ModalType, number>;
    setSnapIndex: (modalType: ModalType, index: number) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const refs: Record<ModalType, MutableRefObject<BottomSheetModal | null>> = {
        [ModalType.Profile]: useRef<BottomSheetModal>(null),
        [ModalType.JamMem]: useRef<BottomSheetModal>(null),
    };

    const [visible, setVisible] = useState<Record<ModalType, boolean>>({
        [ModalType.Profile]: false,
        [ModalType.JamMem]: false,
    });

    const [snapIndexes, setSnapIndexes] = useState<Record<ModalType, number>>({
        [ModalType.Profile]: 0,
        [ModalType.JamMem]: 0,
    });

    const present = useCallback((modalType: ModalType) => {
        refs[modalType]?.current?.present();
        setVisible((prev) => ({ ...prev, [modalType]: true }));
    }, []);

    const dismiss = useCallback((modalType: ModalType) => {
        refs[modalType]?.current?.dismiss();
        setVisible((prev) => ({ ...prev, [modalType]: false }));
    }, []);

    const isVisible = useCallback(
        (modalType: ModalType) => !!visible[modalType],
        [visible]
    );

    const setSnapIndex = useCallback((modalType: ModalType, index: number) => {
        setSnapIndexes((prev) => ({ ...prev, [modalType]: index }));
    }, []);

    return (
        <ModalContext.Provider
            value={{
                present,
                dismiss,
                refs,
                isVisible,
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
