import { useEffect, useMemo, useState } from "react";

import BottomModal from "../../shared/bottomModal/BottomModal";
import BottomModalTopRow from "../../shared/bottomModalTopRow/BottomModalTopRow";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useClusterModal,
} from "../../../hooks/context/ModalContext";
import {
    SongCluster,
    SongIdFrequencies,
} from "../../../utils/superclusterManager";
import SongList from "../songList/SongList";
import { useMapBottomSheet } from "../../../hooks/context/BottomSheetContext";

const ClusterBottomModal: React.FC = () => {
    const { dismiss, options } = useClusterModal();
    const selectedCluster: SongCluster = options?.selectedCluster;
    const { setSnapIndex: setMapBottomSheetSnapIndex } = useMapBottomSheet();
    const [songIdFrequencies, setSongIdFrequencies] =
        useState<SongIdFrequencies>([]);
    const snapPoints = useMemo(() => DEFAULT_SNAP_POINTS, []);

    useEffect(() => {
        const fetchClusterData = async () => {
            if (selectedCluster) {
                setSongIdFrequencies(selectedCluster.topSongs);
            }
        };

        fetchClusterData();
    }, [selectedCluster]);

    const handleClose = () => {
        dismiss();
        setMapBottomSheetSnapIndex(0);
    };

    const handleSheetChanges = (index: number) => {
        if (index === -1) {
            handleClose();
        }
    };

    return (
        <BottomModal
            modalType={ModalType.Cluster}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
        >
            <BottomModalTopRow
                headerText={`Total Songs: ${selectedCluster?.size ?? 0}`}
                modalType={ModalType.Cluster}
                onClose={handleClose}
            />
            <SongList
                songIdFrequencies={songIdFrequencies}
                playlistName="Coaster Cluster Playlist"
                playlistDescription="Created from a Coaster cluster!"
            />
        </BottomModal>
    );
};

export default ClusterBottomModal;
