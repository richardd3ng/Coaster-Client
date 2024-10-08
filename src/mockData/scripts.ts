import { PointFeature } from "supercluster";

import { SongPointProps } from "../utils/superclusterManager";

interface Bounds {
    north: number;
    south: number;
    west: number;
    east: number;
}

const getRandomCoordinate = (bounds: Bounds) => {
    const latitude =
        Math.random() * (bounds.north - bounds.south) + bounds.south;
    const longitude = Math.random() * (bounds.east - bounds.west) + bounds.west;
    return { latitude, longitude };
};

const populations = {
    africa: 1.3e9,
    asia: 4.6e9,
    europe: 0.75e9,
    northAmerica: 0.58e9,
    southAmerica: 0.43e9,
    australia: 0.042e9,
};

const totalPopulation = Object.values(populations).reduce((a, b) => a + b, 0);

const populationWeights: Record<string, number> = {
    africa: populations.africa / totalPopulation,
    asia: populations.asia / totalPopulation,
    europe: populations.europe / totalPopulation,
    northAmerica: populations.northAmerica / totalPopulation,
    southAmerica: populations.southAmerica / totalPopulation,
    australia: populations.australia / totalPopulation,
};

const northAmericaBounds = {
    north: 63.6341,
    south: 7.192,
    west: -148.12,
    east: -52.233,
};

const southAmericaBounds = {
    north: 13.392,
    south: -55.98,
    west: -81.728,
    east: -34.793,
};

const europeBounds = {
    north: 71.23,
    south: 34.559,
    west: -25.266,
    east: 69.031,
};

const africaBounds = {
    north: 37.21,
    south: -34.819,
    west: -17.598,
    east: 51.271,
};

const asiaBounds = {
    north: 71.858,
    south: -10.47,
    west: 26.04,
    east: 170.0,
};

const australiaBounds = {
    north: -9.235,
    south: -44.76,
    west: 112.921,
    east: 159.109,
};

const continentBounds = [
    { name: "northAmerica", bounds: northAmericaBounds },
    { name: "southAmerica", bounds: southAmericaBounds },
    { name: "europe", bounds: europeBounds },
    { name: "africa", bounds: africaBounds },
    { name: "asia", bounds: asiaBounds },
    { name: "australia", bounds: australiaBounds },
];

export const generateRandomSongPoints = (
    count: number
): PointFeature<SongPointProps>[] => {
    const songPoints: PointFeature<SongPointProps>[] = [];

    for (let i = 0; i < count; i++) {
        const randomValue = Math.random();
        let cumulativeWeight = 0;

        for (const continent of continentBounds) {
            cumulativeWeight += populationWeights[continent.name];
            if (randomValue < cumulativeWeight) {
                const coords = getRandomCoordinate(continent.bounds);
                songPoints.push({
                    type: "Feature",
                    properties: {
                        songId: Math.floor(Math.random() * 50).toString(),
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [coords.longitude, coords.latitude],
                    },
                });
                break;
            }
        }
    }

    return songPoints;
};
