import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";

import CarouselItem from "./carouselItem/CarouselItem";
import { mockJamMemData } from "../../mockData/constants";
import styles from "./styles";

const CAROUSEL_WIDTH = Dimensions.get("window").width;
const COUNT = 2;

const JamMemsCarousel = () => {
    return (
        <Carousel
            vertical={false}
            width={CAROUSEL_WIDTH / COUNT}
            height={CAROUSEL_WIDTH * 0.6}
            style={styles.carousel}
            data={mockJamMemData}
            loop={false}
            renderItem={({ index }) => (
                <CarouselItem key={index} jamMem={mockJamMemData[index]} />
            )}
        />
    );
};

export default JamMemsCarousel;
