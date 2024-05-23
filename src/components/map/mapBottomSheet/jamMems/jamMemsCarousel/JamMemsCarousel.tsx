import Carousel from "react-native-reanimated-carousel";
import { ActivityIndicator, Dimensions } from "react-native";

import CarouselItem from "../carouselItem/CarouselItem";
import styles from "./styles";
import { useEffect, useState } from "react";
import { JamMemMetadata } from "../../../../../types/custom";
import { fetchJamMemMetadatas } from "../../../../../api/jamMemAPI";

const CAROUSEL_WIDTH = Dimensions.get("window").width;
const COUNT = 2;

const JamMemsCarousel = () => {
    const [jamMems, setJamMems] = useState<JamMemMetadata[] | null>(null);

    useEffect(() => {
        const fetchJamMemsForUser = async () => {
            setJamMems(await fetchJamMemMetadatas());
        };
        fetchJamMemsForUser();
    }, []);

    if (!jamMems) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <Carousel
            vertical={false}
            width={CAROUSEL_WIDTH / COUNT}
            height={CAROUSEL_WIDTH * 0.6}
            style={styles.carousel}
            data={jamMems}
            loop={false}
            renderItem={({ index }) => (
                <CarouselItem key={index} jamMem={jamMems[index]} />
            )}
        />
    );
};

export default JamMemsCarousel;
