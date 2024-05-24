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
import { RootState } from "../../../../state/store";
import { SongIdFrequencies } from "../../../../utils/superclusterManager";
import useThemeAwareObject from "../../../../hooks/useThemeAwareObject";

const ClusterBottomModal: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { refs: modalRefs, dismiss, snapIndexes } = useModal();
    const { setSnapIndex } = useBottomSheet();
    const snapPoints = useMemo(() => DEFAULT_SNAP_POINTS, []);
    const [songIdFrequencies, setSongIdFrequencies] =
        useState<SongIdFrequencies>([]);

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
                <ClusterList songIdFrequencies={songIdFrequencies} />
                <CloseButton onPress={handleClose} />
            </BottomSheetModal>
        </BottomModalWrapper>
    );
};

export default ClusterBottomModal;
