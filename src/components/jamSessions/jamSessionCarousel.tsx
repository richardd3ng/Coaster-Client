import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";
import CarouselItem from "./CarouselItem";

import styles from "./styles";

const CAROUSEL_WIDTH = Dimensions.get("window").width;
const COUNT = 2;

const JamSessionCarousel = () => {
    return (
        <Carousel
            vertical={false}
            width={CAROUSEL_WIDTH / COUNT}
            height={CAROUSEL_WIDTH * 0.6}
            style={styles.carousel}
            data={[...new Array(12).keys()]}
            renderItem={({ index }) => (
                <CarouselItem
                    key={index}
                    index={index}
                />
            )}
        />
    );
};

export default JamSessionCarousel;
