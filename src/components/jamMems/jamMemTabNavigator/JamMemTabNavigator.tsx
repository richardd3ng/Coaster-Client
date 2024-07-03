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
import { useSelector } from "react-redux";
import { View } from "react-native";

import SongList from "../../clusters/songList/SongList";
import { computeSongIdFrequencies } from "../../../utils/snapshotUtils";
import createStyles from "./styles";
import JamFriendsScrollView from "../jamFriendsScrollView/JamFriendsScrollView";
import { JamMemTabName, JamMemTabParamList } from "../../../types/navigation";
import LoadingView from "../../shared/loadingView/LoadingView";
import ErrorView from "../../shared/errorView/ErrorView";
import { RootState } from "../../../state/store";
import useClusters from "../../../hooks/useClusters";
import { useJamMem } from "../../../hooks/react-query/useQueryHooks";
import { useMapContext } from "../../../hooks/context/MapContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const { Navigator, Screen } =
    createMaterialTopTabNavigator<JamMemTabParamList>();

interface JamMemTabBarProps {
    navigation: NavigationHelpers<
        ParamListBase,
        MaterialTopTabNavigationEventMap
    >;
    state: TabNavigationState<ParamListBase>;
}

const JamMemTabNavigator: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const selectedJamMemId = useSelector((state: RootState) => {
        return state.jamMem.selectedJamMemId;
    });
    const { clusterFilter } = useMapContext();
    const { songPoints } = useClusters(null, clusterFilter);

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
                    <SongList
                        songIdFrequencies={computeSongIdFrequencies(
                            songPoints ?? []
                        )}
                        hideRank
                    />
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
                    <JamFriendsScrollView
                        jamMemId={selectedJamMem.id}
                        users={selectedJamMem.friends ?? []}
                    />
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

export default JamMemTabNavigator;
