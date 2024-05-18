import Animated from "react-native-reanimated";

import { CarouselImageItem } from "../carouselImageItem/CarouselImageItem";
import { JamMem } from "../../../types/custom";
import styles from "./styles";

interface CarouselItemProps {
    jamMem: JamMem;
}

const CarouselItem: React.FC<CarouselItemProps> = (
    props: CarouselItemProps
) => {
    return (
        <Animated.View style={styles.animatedView}>
            <CarouselImageItem jamMem={props.jamMem} />
        </Animated.View>
    );
};

export default CarouselItem;
