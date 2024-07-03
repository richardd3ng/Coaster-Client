import Animated from "react-native-reanimated";

import { CarouselImageItem } from "../carouselImageItem/CarouselImageItem";
import { JamMemMetadataFragment } from "../../../gql/graphql";
import styles from "./styles";

interface CarouselItemProps {
    jamMemMetadata: JamMemMetadataFragment;
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
