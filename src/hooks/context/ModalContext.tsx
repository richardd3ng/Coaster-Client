import React, {
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
    Account,
    Cluster,
    Friends,
    JamMem,
    Preferences,
    Profile,
    SearchResults,
    SentRequests,
}

export const DEFAULT_SNAP_POINTS = ["12%", "35%", "92%"];

interface ModalContextType {
    present: (options?: Record<string, any>) => void;
    dismiss: () => void;
    ref: MutableRefObject<BottomSheetModal | null>;
    isVisible: boolean;
    snapIndex: number;
    setSnapIndex: (index: number) => void;
    options?: Record<string, any>; // flexible prop for use in different modals (i.e. friends initial tab)
}

const createModalContext = (modalType: ModalType) => {
    const Context = createContext<ModalContextType | undefined>(undefined);

    const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
        const ref = useRef<BottomSheetModal>(null);
        const [isVisible, setIsVisible] = useState(false);
        const [snapIndex, setSnapIndex] = useState(0);
        const [options, setOptions] = useState<Record<string, any> | undefined>(
            undefined
        );

        const present = useCallback((options?: Record<string, any>) => {
            ref.current?.present();
            setIsVisible(true);
            setOptions(options);
        }, []);

        const dismiss = useCallback(() => {
            ref.current?.dismiss();
            setIsVisible(false);
            setOptions(undefined);
        }, []);

        return (
            <Context.Provider
                value={{
                    present,
                    dismiss,
                    ref,
                    isVisible,
                    snapIndex,
                    setSnapIndex,
                    options,
                }}
            >
                {children}
            </Context.Provider>
        );
    };

    const useModal = (): ModalContextType => {
        const context = useContext(Context);
        if (!context) {
            throw new Error(
                `use${ModalType[modalType]}Modal must be used within its ModalProvider`
            );
        }
        return context;
    };

    return { Provider, useModal };
};

const modalContexts = (Object.values(ModalType) as ModalType[]).reduce(
    (acc, modalType) => {
        acc[modalType] = createModalContext(modalType);
        return acc;
    },
    {} as Record<ModalType, ReturnType<typeof createModalContext>>
);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    return (Object.values(ModalType) as ModalType[]).reduce(
        (acc, modalType) => {
            const { Provider } = modalContexts[modalType];
            return <Provider>{acc}</Provider>;
        },
        <>{children}</>
    );
};

export const useAccountModal = modalContexts[ModalType.Account].useModal;
export const useClusterModal = modalContexts[ModalType.Cluster].useModal;
export const useFriendsModal = modalContexts[ModalType.Friends].useModal;
export const useJamMemModal = modalContexts[ModalType.JamMem].useModal;
export const usePreferencesModal =
    modalContexts[ModalType.Preferences].useModal;
export const useProfileModal = modalContexts[ModalType.Profile].useModal;
export const useSearchResultsModal =
    modalContexts[ModalType.SearchResults].useModal;
export const useSentRequestsModal =
    modalContexts[ModalType.SentRequests].useModal;

// this is probably not ideal but is needed for BottomModal.tsx and BottomModalTopRow.tsx (avoid using it otherwise)
export const useModalHook = (modalType: ModalType) => {
    switch (modalType) {
        case ModalType.Account:
            return useAccountModal();
        case ModalType.Cluster:
            return useClusterModal();
        case ModalType.Friends:
            return useFriendsModal();
        case ModalType.JamMem:
            return useJamMemModal();
        case ModalType.Preferences:
            return usePreferencesModal();
        case ModalType.Profile:
            return useProfileModal();
        case ModalType.SearchResults:
            return useSearchResultsModal();
        case ModalType.SentRequests:
            return useSentRequestsModal();
        default:
            throw new Error(`Unsupported modal type: ${modalType}`);
    }
};
