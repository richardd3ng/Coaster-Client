import { useEffect, useMemo, useState } from "react";

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Text } from "react-native";
import { useSelector } from "react-redux";

import BottomModalWrapper from "../../../shared/bottomModalWrapper/BottomModalWrapper";
import ClusterList from "./clusterList/ClusterList";
import {
    BottomSheetType,
    useBottomSheet,
} from "../../../../hooks/context/BottomSheetContext";
import CloseButton from "../../../shared/closeButton/CloseButton";
import createStyles from "./styles";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useModal,
} from "../../../../hooks/context/ModalContext";
import { fetchManySongs } from "../../../../api/songAPI";
import { RootState } from "../../../../state/store";
import { Song } from "../../../../types/entities";
import useThemeAwareObject from "../../../../hooks/useThemeAwareObject";

export interface SongFrequency extends Song {
    frequency: number;
}

const ClusterBottomModal: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
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
        <BottomModalWrapper>
            <BottomSheetModal
                ref={modalRefs[ModalType.Cluster]}
                index={snapIndexes[ModalType.Cluster]}
                snapPoints={snapPoints}
                handleComponent={null}
                backgroundStyle={styles.bottomSheetModal}
                onChange={handleSheetChanges}
            >
                <Text>{selectedCluster?.size}</Text>
                <ClusterList clusterData={clusterData} />
                <CloseButton onPress={handleClose} />
            </BottomSheetModal>
        </BottomModalWrapper>
    );
};

export default ClusterBottomModal;
