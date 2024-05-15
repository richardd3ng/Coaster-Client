import { createContext } from "react";

export interface MapBottomSheetContextType {
    snapPointIndex: number;
    setSnapPointIndex: (snapPointIndex: number) => void;
}

const MapBottomSheetContext = createContext<MapBottomSheetContextType>({
    snapPointIndex: 0,
    setSnapPointIndex: () => {},
});

export default MapBottomSheetContext;
