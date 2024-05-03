import MapView, { Circle } from "react-native-maps";
import { Text, View } from "react-native";
import useTracking from "../../hooks/useTracking";

import styles from "./styles";
import { isValidLocationState } from "../../utils/locationUtils";

const Map = () => {
    const location = useTracking(true);

    return (
        <View style={styles.container}>
            {isValidLocationState(location) ? (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.latitude!,
                        longitude: location.longitude!,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Circle
                        center={{
                            latitude: location.latitude!,
                            longitude: location.longitude!,
                        }}
                        radius={100}
                        strokeWidth={1}
                        strokeColor="blue"
                        fillColor="rgba(0, 0, 255, 0.5)"
                    />
                </MapView>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

export default Map;
