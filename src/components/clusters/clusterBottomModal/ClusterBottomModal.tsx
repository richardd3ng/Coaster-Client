import { useEffect, useMemo, useState } from "react";

import { useSelector } from "react-redux";

import BottomModalTopRow from "../../shared/bottomModalTopRow/BottomModalTopRow";
import {
    BottomSheetType,
    useBottomSheet,
} from "../../../hooks/context/BottomSheetContext";
import ClusterList from "../clusterList/ClusterList";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useModal,
} from "../../../hooks/context/ModalContext";
import { RootState } from "../../../state/store";
import { SongIdFrequencies } from "../../../utils/superclusterManager";
import BottomModal from "../../shared/bottomModal/BottomModal";

const ClusterBottomModal: React.FC = () => {
    const { dismiss } = useModal();
    const { setSnapIndex } = useBottomSheet();
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
        dismiss(ModalType.Cluster);
        setSnapIndex(BottomSheetType.Map, 0);
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
            <ClusterList songIdFrequencies={songIdFrequencies} />
        </BottomModal>
    );
};

export default ClusterBottomModal;
