import { useEffect, useMemo, useState } from "react";

import { useSelector } from "react-redux";

import BottomModal from "../../shared/bottomModal/BottomModal";
import BottomModalTopRow from "../../shared/bottomModalTopRow/BottomModalTopRow";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useClusterModal,
} from "../../../hooks/context/ModalContext";
import { dispatchSetSelectedCluster } from "../../../state/storeUtils";
import { RootState } from "../../../state/store";
import { SongIdFrequencies } from "../../../utils/superclusterManager";
import SongList from "../songList/SongList";
import { useMapBottomSheet } from "../../../hooks/context/BottomSheetContext";

const ClusterBottomModal: React.FC = () => {
    const { dismiss } = useClusterModal();
    const { setSnapIndex: setMapBottomSheetSnapIndex } = useMapBottomSheet();
    const [songIdFrequencies, setSongIdFrequencies] =
        useState<SongIdFrequencies>([]);
    const snapPoints = useMemo(() => DEFAULT_SNAP_POINTS, []);

    const selectedCluster = useSelector((state: RootState) => {
        return state.cluster.selectedCluster;
    });

    useEffect(() => {
        const fetchClusterData = async () => {
            if (selectedCluster) {
                setSongIdFrequencies(selectedCluster.topSongs);
            }
        };

        fetchClusterData();
    }, [selectedCluster]);

    const handleClose = () => {
        dispatchSetSelectedCluster(null);
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
                headerText={`Total Songs: ${selectedCluster?.size}`}
                modalType={ModalType.Cluster}
                onClose={handleClose}
            />
            <SongList songIdFrequencies={songIdFrequencies} />
        </BottomModal>
    );
};

export default ClusterBottomModal;
