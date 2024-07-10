import { memo } from "react";

import LottieView from "lottie-react-native";

import { CLUSTER_PULSE_ANIMATION_URI } from "../../../constants/assets";

interface ClusterPulseAnimationProps {
    height: number;
    width: number;
}

const ClusterPulseAnimation: React.FC<ClusterPulseAnimationProps> = ({
    height,
    width,
}: ClusterPulseAnimationProps) => {
    return (
        <LottieView
            source={CLUSTER_PULSE_ANIMATION_URI}
            style={{ height, width }}
            autoPlay
            loop
        />
    );
};

export default memo(ClusterPulseAnimation);
