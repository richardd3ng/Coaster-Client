import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { Provider } from "react-redux";

import AppRoot from "./src/pages/appRoot/AppRoot";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import store from "./src/state/store";

const App = () => {
    return (
        <Provider store={store}>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <AppRoot />
            </ApplicationProvider>
        </Provider>
    );
};
export default App;
// import React, { useCallback, useMemo, useRef } from "react";
// import { View, Text, StyleSheet, Button } from "react-native";
// import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

// const App = () => {
//     const snapPoints = useMemo(() => ["10%", "50%", "90%"], []); // Adjusted snap points for better visibility

//     // ref
//     const bottomSheetRef = useRef<BottomSheet>(null);

//     // callbacks
//     const handleSheetChanges = useCallback((index: number) => {
//         console.log("handleSheetChanges", index);
//     }, []);

//     const openBottomSheet = () => {
//         bottomSheetRef.current?.expand(); // Expand bottom sheet when button is pressed
//     };

//     // renders
//     return (
//         <GestureHandlerRootView style={styles.container}>
//             <View style={styles.buttonContainer}>
//                 <Button title="Open Bottom Sheet" onPress={openBottomSheet} />
//             </View>
//             <BottomSheet
//                 ref={bottomSheetRef}
//                 onChange={handleSheetChanges}
//                 snapPoints={snapPoints}
//                 index={0}
//             >
//                 <BottomSheetView style={styles.contentContainer}>
//                     <Text>Awesome 🎉</Text>
//                 </BottomSheetView>
//             </BottomSheet>
//         </GestureHandlerRootView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 24,
//         backgroundColor: "white", // Changed background color to white for better visibility
//     },
//     buttonContainer: {
//         marginBottom: 20,
//     },
//     contentContainer: {
//         flex: 1,
//         alignItems: "center",
//     },
// });

// export default App;
