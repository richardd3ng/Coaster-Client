import { ReactNode } from "react";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import styles from "./styles";

interface BottomModalWrapperProps {
    children: ReactNode;
}

const BottomModalWrapper: React.FC<BottomModalWrapperProps> = ({
    children,
}: BottomModalWrapperProps) => {
    return (
        <GestureHandlerRootView style={styles.gestureHandlerRootView}>
            <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
};

export default BottomModalWrapper;
