import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";

import { RootState } from "../../../state/store";
import styles from "./styles";

const TrackingIndicator: React.FC = () => {
    const history = useSelector((state: RootState) => state.location.history);
    const [isBlinking, setIsBlinking] = useState<boolean>(false);
    const [prevLength, setPrevLength] = useState<number>(history.length);

    useEffect(() => {
        if (history.length !== prevLength) {
            setIsBlinking(true);
            setPrevLength(history.length);

            const timeout = setTimeout(() => {
                setIsBlinking(false);
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [history.length, prevLength]);

    return <View style={[styles.dot, isBlinking && styles.blinkingDot]} />;
};

export default TrackingIndicator;
