import {
    createContext,
    MutableRefObject,
    ReactNode,
    useCallback,
    useContext,
    useRef,
    useState,
} from "react";

import BottomSheet from "@gorhom/bottom-sheet";

export enum BottomSheetType {
    Map,
}

interface BottomSheetContextType {
    bottomSheetRefs: Record<
        BottomSheetType,
        MutableRefObject<BottomSheet | null>
    >;
    snapIndexes: Record<BottomSheetType, number>;
    setSnapIndex: (bottomSheetType: BottomSheetType, index: number) => void;
}

const BottomSheetContext = createContext<BottomSheetContextType | undefined>(
    undefined
);

interface BottomSheetProviderProps {
    children: ReactNode;
}

export const BottomSheetProvider: React.FC<BottomSheetProviderProps> = ({
    children,
}) => {
    const bottomSheetRefs: Record<
        BottomSheetType,
        MutableRefObject<BottomSheet | null>
    > = {
        [BottomSheetType.Map]: useRef<BottomSheet>(null),
    };

    const [snapIndexes, setSnapIndexes] = useState<
        Record<BottomSheetType, number>
    >({
        [BottomSheetType.Map]: 0, // Initial snap index for each BottomSheet type
    });

    const setSnapIndex = useCallback(
        (bottomSheetType: BottomSheetType, index: number) => {
            const bottomSheet = bottomSheetRefs[bottomSheetType]?.current;
            if (bottomSheet) {
                bottomSheet.snapToIndex(index);
                setSnapIndexes((prev) => ({
                    ...prev,
                    [bottomSheetType]: index,
                }));
            } else {
                console.warn(
                    `No BottomSheet found for type ${bottomSheetType}`
                );
            }
        },
        [bottomSheetRefs]
    );

    return (
        <BottomSheetContext.Provider
            value={{ bottomSheetRefs, snapIndexes, setSnapIndex }}
        >
            {children}
        </BottomSheetContext.Provider>
    );
};

export const useBottomSheet = (): BottomSheetContextType => {
    const context = useContext(BottomSheetContext);
    if (!context) {
        throw new Error(
            "useBottomSheet must be used within a BottomSheetProvider"
        );
    }
    return context;
};
