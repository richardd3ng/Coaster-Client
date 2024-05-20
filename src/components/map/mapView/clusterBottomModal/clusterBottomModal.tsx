import { useEffect, useMemo, useState } from "react";

import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text } from "react-native";
import { useSelector } from "react-redux";

import {
    BottomSheetType,
    useBottomSheet,
} from "../../../../hooks/context/BottomSheetContext";
import CloseButton from "../../../shared/closeButton/CloseButton";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useModal,
} from "../../../../hooks/context/ModalContext";
import { RootState } from "../../../../state/store";
import styles from "./styles";
import { Song } from "../../../../types/custom";
import { fetchManySongs } from "../../../../api/songAPI";

interface SongFrequency extends Song {
    frequency: number;
}

const ClusterBottomModal: React.FC = () => {
    const { refs: modalRefs, dismiss, snapIndexes } = useModal();
    const { setSnapIndex } = useBottomSheet();
    const snapPoints = useMemo(() => DEFAULT_SNAP_POINTS, []);
    const [clusterData, setClusterData] = useState<SongFrequency[]>([]);

    const selectedCluster = useSelector((state: RootState) => {
        return state.cluster.selectedCluster;
    });

    useEffect(() => {
        const fetchClusterData = async () => {
            if (selectedCluster) {
                const songIds = selectedCluster.topSongs.map((song) => song[0]);
                const songs = await fetchManySongs(songIds);
                const songFrequencies = songs.map((song) => {
                    const frequency = selectedCluster.topSongs.find(
                        (topSong) => topSong[0] === song.id
                    )?.[1];
                    return { ...song, frequency: frequency || 0 };
                });
                setClusterData(songFrequencies);
            }
        };

        fetchClusterData();
    }, [selectedCluster]);

    const handleClose = () => {
        dismiss(ModalType.Cluster);
        setSnapIndex(BottomSheetType.Map, 0);
    };

    const handleSheetChanges = (index: number) => {
        if (index === -1) {
            handleClose();
        }
    };

    return (
        <GestureHandlerRootView style={styles.gestureHandlerRootView}>
            <BottomSheetModalProvider>
                <BottomSheetModal
                    ref={modalRefs[ModalType.Cluster]}
                    index={snapIndexes[ModalType.Cluster]}
                    snapPoints={snapPoints}
                    handleComponent={null}
                    backgroundStyle={styles.container}
                    onChange={handleSheetChanges}
                >
                    {clusterData.map((song) => (
                        <Text
                            key={song.id}
                        >{`${song.title}: ${song.frequency}`}</Text>
                    ))}
                    <CloseButton onPress={handleClose} />
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
};

export default ClusterBottomModal;
