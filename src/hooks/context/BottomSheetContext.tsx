import React, {
    createContext,
    MutableRefObject,
    ReactNode,
    useCallback,
    useContext,
    useRef,
    useState,
} from "react";
import BottomSheet from "@gorhom/bottom-sheet";

enum BottomSheetType {
    Map,
}

interface BottomSheetContextType {
    ref: MutableRefObject<BottomSheet | null>;
    snapIndex: number;
    setSnapIndex: (index: number) => void;
    close: () => void;
}

function createBottomSheetContext(bottomSheetType: BottomSheetType) {
    const Context = createContext<BottomSheetContextType | undefined>(
        undefined
    );

    const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
        const ref = useRef<BottomSheet>(null);
        const [snapIndex, setSnapIndexState] = useState(0);

        const setSnapIndex = useCallback((index: number) => {
            const bottomSheet = ref.current;
            if (bottomSheet) {
                bottomSheet.snapToIndex(index);
                setSnapIndexState(index);
            } else {
                console.warn(
                    `No BottomSheet found for type ${BottomSheetType[bottomSheetType]}`
                );
            }
        }, []);

        const close = useCallback(() => {
            const bottomSheet = ref.current;
            if (bottomSheet) {
                bottomSheet.close();
            } else {
                console.warn(
                    `No BottomSheet found for type ${BottomSheetType[bottomSheetType]}`
                );
            }
        }, []);

        return (
            <Context.Provider
                value={{
                    ref,
                    snapIndex,
                    setSnapIndex,
                    close,
                }}
            >
                {children}
            </Context.Provider>
        );
    };

    const useBottomSheet = (): BottomSheetContextType => {
        const context = useContext(Context);
        if (!context) {
            throw new Error(
                `use${BottomSheetType[bottomSheetType]}BottomSheet must be used within its BottomSheetProvider`
            );
        }
        return context;
    };

    return { Provider, useBottomSheet };
}

const bottomSheetContexts = (
    Object.values(BottomSheetType) as BottomSheetType[]
).reduce((acc, bottomSheetType) => {
    acc[bottomSheetType] = createBottomSheetContext(bottomSheetType);
    return acc;
}, {} as Record<BottomSheetType, ReturnType<typeof createBottomSheetContext>>);

export const BottomSheetProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    return (Object.values(BottomSheetType) as BottomSheetType[]).reduce(
        (acc, bottomSheetType) => {
            const { Provider } = bottomSheetContexts[bottomSheetType];
            return <Provider>{acc}</Provider>;
        },
        <>{children}</>
    );
};

export const useMapBottomSheet =
    bottomSheetContexts[BottomSheetType.Map].useBottomSheet;
