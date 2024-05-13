import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";

import CarouselItem from "./CarouselItem";
import { JamMem } from "../../types/custom";
import styles from "./styles";

const CAROUSEL_WIDTH = Dimensions.get("window").width;
const COUNT = 2;

const data: JamMem[] = [
    {
        place: "New York",
        title: "Jam Session in Central Park",
        start: new Date("2021-09-01"),
        end: new Date("2021-09-01"),
    },
    {
        place: "San Francisco",
        title: "Music under the Golden Gate Bridge",
        start: new Date("2021-09-01"),
        end: new Date("2021-09-01"),
    },
    {
        place: "Ohio",
        title: "This is a really long jam session title that may span a ton of lines",
        start: new Date("2021-09-01"),
        end: new Date("2021-09-01"),
    },
    {
        place: "Lake Tahoe",
        title: "Fishing Jam",
        start: new Date("2021-09-01"),
        end: new Date("2021-09-01"),
    },
    {
        place: "China",
        title: "Jason's House",
        start: new Date("2021-09-01"),
        end: new Date("2021-09-01"),
    },
    {
        place: "Myrtle Beach",
        title: "Spanish Galleon",
        start: new Date("2021-09-01"),
        end: new Date("2021-09-01"),
    },
];

const JamMemsCarousel = () => {
    return (
        <Carousel
            vertical={false}
            width={CAROUSEL_WIDTH / COUNT}
            height={CAROUSEL_WIDTH * 0.6}
            style={styles.carousel}
            data={data}
            loop={false}
            renderItem={({ index }) => (
                <CarouselItem
                    key={index}
                    index={index}
                    pretty
                    jamMem={data[index]}
                />
            )}
        />
    );
};

export default JamMemsCarousel;
