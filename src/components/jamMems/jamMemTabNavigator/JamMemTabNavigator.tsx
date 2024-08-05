import { memo } from "react";

import {
    createMaterialTopTabNavigator,
    MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import {
    NavigationContainer,
    NavigationHelpers,
    ParamListBase,
    TabNavigationState,
} from "@react-navigation/native";
import { Tab, TabBar } from "@ui-kitten/components";
import { View } from "react-native";

import AddFriendButton from "../addFriendButton/AddFriendButton";
import SongList from "../../clusters/songList/SongList";
import { computeSongIdFrequencies } from "../../../utils/snapshotUtils";
import createStyles from "./styles";
import JamFriendsScrollView from "../jamFriendsScrollView/JamFriendsScrollView";
import { JamMemTabName, JamMemTabParamList } from "../../../types/navigation";
import LeaveButton from "../leaveButton/LeaveButton";
import LoadingView from "../../shared/loadingView/LoadingView";
import ErrorView from "../../shared/errorView/ErrorView";
import useClusters from "../../../hooks/useClusters";
import { useJamMem } from "../../../hooks/react-query/useQueryHooks";
import { useJamMemModal } from "../../../hooks/context/ModalContext";
import { useMapContext } from "../../../hooks/context/MapContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { useUserId } from "../../../hooks/useUserHooks";

const { Navigator, Screen } =
    createMaterialTopTabNavigator<JamMemTabParamList>();

interface JamMemTabBarProps {
    navigation: NavigationHelpers<
        ParamListBase,
        MaterialTopTabNavigationEventMap
    >;
    state: TabNavigationState<ParamListBase>;
}

interface JamMemTabNavigatorProps {
    initialRouteName?: JamMemTabName;
}

const JamMemTabNavigator: React.FC<JamMemTabNavigatorProps> = ({
    initialRouteName,
}: JamMemTabNavigatorProps) => {
    const styles = useThemeAwareObject(createStyles);
    const { options } = useJamMemModal();
    const { clusterFilter } = useMapContext();
    const { songPoints } = useClusters(null, clusterFilter);
    const userId = useUserId();
    const selectedJamMemId: string = options?.jamMemId;

    const {
        data: selectedJamMem,
        isLoading,
        isRefetching,
        isError,
        error,
        refetch,
    } = useJamMem(selectedJamMemId);

    const SongsTab = () => {
        return (
            <View style={styles.container}>
                {isLoading || isRefetching ? (
                    <LoadingView />
                ) : isError && error ? (
                    <ErrorView message={error.message} onRetry={refetch} />
                ) : selectedJamMem ? (
                    <View style={styles.songListContainer}>
                        <SongList
                            songIdFrequencies={computeSongIdFrequencies(
                                songPoints ?? []
                            )}
                            playlistName={selectedJamMem.name}
                            playlistDescription="Created from a Coaster Jam Mem!"
                            hideRank
                        />
                    </View>
                ) : null}
            </View>
        );
    };

    const JamFriendsTab = () => {
        return (
            <View style={styles.container}>
                {isLoading ? (
                    <LoadingView />
                ) : isError && error ? (
                    <ErrorView message={error.message} onRetry={refetch} />
                ) : selectedJamMem ? (
                    <>
                        {userId === selectedJamMem.ownerId ? (
                            <AddFriendButton />
                        ) : (
                            <LeaveButton />
                        )}
                        <JamFriendsScrollView
                            users={selectedJamMem.friends ?? []}
                        />
                    </>
                ) : null}
            </View>
        );
    };

    const JamMemTabBar: React.FC<JamMemTabBarProps> = ({
        navigation,
        state,
    }: JamMemTabBarProps) => (
        <TabBar
            selectedIndex={state.index}
            onSelect={(index) => navigation.navigate(state.routeNames[index])}
        >
            <Tab title={JamMemTabName.Songs} />
            <Tab title={JamMemTabName.JamFriends} />
        </TabBar>
    );

    const TabNavigator = () => (
        <Navigator
            initialRouteName={initialRouteName}
            tabBar={({ navigation, state }) => (
                <JamMemTabBar navigation={navigation} state={state} />
            )}
        >
            <Screen name={JamMemTabName.Songs} component={SongsTab} />
            <Screen name={JamMemTabName.JamFriends} component={JamFriendsTab} />
        </Navigator>
    );

    return (
        <NavigationContainer independent>
            <TabNavigator />
        </NavigationContainer>
    );
};

export default memo(JamMemTabNavigator);
