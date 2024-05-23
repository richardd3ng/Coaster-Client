import Animated from "react-native-reanimated";

import { CarouselImageItem } from "../carouselImageItem/CarouselImageItem";
import { JamMemMetadata } from "../../../../../types/custom";
import styles from "./styles";

interface CarouselItemProps {
    jamMem: JamMemMetadata;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
    jamMem,
}: CarouselItemProps) => {
    return (
        <Animated.View style={styles.animatedView}>
            <CarouselImageItem jamMem={jamMem} />
        </Animated.View>
    );
};

export default CarouselItem;
