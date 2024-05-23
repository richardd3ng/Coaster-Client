import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";

import CarouselItem from "../carouselItem/CarouselItem";
import styles from "./styles";
import { JamMemMetadata } from "../../../../../types/custom";

const CAROUSEL_WIDTH = Dimensions.get("window").width;
const COUNT = 2;

interface JamMemsCarouselProps {
    jamMemMetadatas: JamMemMetadata[];
}

const JamMemsCarousel: React.FC<JamMemsCarouselProps> = ({
    jamMemMetadatas,
}: JamMemsCarouselProps) => {
    return (
        <Carousel
            vertical={false}
            width={CAROUSEL_WIDTH / COUNT}
            height={CAROUSEL_WIDTH * 0.6}
            style={styles.carousel}
            data={jamMemMetadatas}
            loop={false}
            renderItem={({ index }) => (
                <CarouselItem
                    key={index}
                    jamMemMetadata={jamMemMetadatas[index]}
                />
            )}
        />
    );
};

export default JamMemsCarousel;
