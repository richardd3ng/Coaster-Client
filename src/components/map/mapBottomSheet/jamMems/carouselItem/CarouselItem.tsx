import Animated from "react-native-reanimated";

import { CarouselImageItem } from "../carouselImageItem/CarouselImageItem";
import { JamMemMetadata } from "../../../../../types/entities";
import styles from "./styles";

interface CarouselItemProps {
    jamMemMetadata: JamMemMetadata;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
    jamMemMetadata: jamMem,
}: CarouselItemProps) => {
    return (
        <Animated.View style={styles.animatedView}>
            <CarouselImageItem jamMem={jamMem} />
        </Animated.View>
    );
};

export default CarouselItem;
