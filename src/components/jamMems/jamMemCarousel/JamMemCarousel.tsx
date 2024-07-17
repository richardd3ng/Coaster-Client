import { memo } from "react";
import Carousel from "react-native-reanimated-carousel";
import { Dimensions, Text, View } from "react-native";

import CarouselItem from "../carouselItem/CarouselItem";
import createStyles from "./styles";
import { JamMemMetadataFragment } from "../../../gql/graphql";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { Icon } from "@ui-kitten/components";

const CAROUSEL_WIDTH = Dimensions.get("window").width;
const CAROUSEL_HEIGHT = CAROUSEL_WIDTH * 0.6;
const COUNT = 2;

interface JamMemCarouselProps {
    jamMemMetadatas: JamMemMetadataFragment[];
    emptyMessage: string;
}

const JamMemCarousel: React.FC<JamMemCarouselProps> = ({
    jamMemMetadatas,
    emptyMessage,
}: JamMemCarouselProps) => {
    const styles = useThemeAwareObject(createStyles);

    if (jamMemMetadatas.length === 0) {
        return (
            <View
                style={{
                    height: CAROUSEL_HEIGHT,
                    ...styles.container,
                }}
            >
                <Text style={styles.text}>{emptyMessage}</Text>
                <Icon
                    name="music-outline"
                    style={styles.icon}
                    fill={styles.icon.color}
                />
            </View>
        );
    }
    return (
        <View style={{ height: CAROUSEL_HEIGHT }}>
            <Carousel
                vertical={false}
                width={CAROUSEL_WIDTH / COUNT}
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
        </View>
    );
};

export default JamMemCarousel;
