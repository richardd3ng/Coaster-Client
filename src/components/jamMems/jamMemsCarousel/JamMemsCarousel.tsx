import { memo } from "react";
import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";

import CarouselItem from "../carouselItem/CarouselItem";
import { JamMemMetadataFragment } from "../../../gql/graphql";
import styles from "./styles";

const CAROUSEL_WIDTH = Dimensions.get("window").width;
const COUNT = 2;

interface JamMemsCarouselProps {
    jamMemMetadatas: JamMemMetadataFragment[];
}

const JamMemsCarousel = memo<JamMemsCarouselProps>(
    ({ jamMemMetadatas }: JamMemsCarouselProps) => {
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
    }
);

export default JamMemsCarousel;
