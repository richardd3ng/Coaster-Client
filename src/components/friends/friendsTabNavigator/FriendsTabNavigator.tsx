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

import createStyles from "./styles";
import FriendsScrollView from "../friendsScrollView/FriendsScrollView";
import { FriendsTabName, FriendsTabParamList } from "../../../types/navigation";
import LoadingView from "../../shared/loadingView/LoadingView";
import ErrorView from "../../shared/errorView/ErrorView";
import {
    useFriends,
    usePendingRequests,
} from "../../../hooks/react-query/useQueryHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const { Navigator, Screen } =
    createMaterialTopTabNavigator<FriendsTabParamList>();

interface FriendsTabBarProps {
    navigation: NavigationHelpers<
        ParamListBase,
        MaterialTopTabNavigationEventMap
    >;
    state: TabNavigationState<ParamListBase>;
}

const FriendsTabNavigator: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const {
        data: friends,
        isFetching: isFetchingFriends,
        isError: isErrorFriends,
        error: errorFriends,
        refetch: refetchFriends,
    } = useFriends();
    const {
        data: pendingRequests,
        isFetching: isFetchingPendingRequests,
        isError: isErrorPendingRequests,
        error: errorPendingRequests,
        refetch: refetchPendingRequests,
    } = usePendingRequests();

    const ConnectionsTab = () => {
        return (
            <View style={styles.container}>
                {isFetchingFriends ? (
                    <LoadingView />
                ) : isErrorFriends && errorFriends ? (
                    <ErrorView
                        message={errorFriends.message}
                        onRetry={refetchFriends}
                    />
                ) : friends ? (
                    <FriendsScrollView friends={friends} />
                ) : null}
            </View>
        );
    };

    const RequestsTab = () => {
        return (
            <View style={styles.container}>
                {isFetchingPendingRequests ? (
                    <LoadingView />
                ) : isErrorPendingRequests && errorPendingRequests ? (
                    <ErrorView
                        message={errorPendingRequests.message}
                        onRetry={refetchPendingRequests}
                    />
                ) : friends ? (
                    <FriendsScrollView pendingRequests={pendingRequests} />
                ) : null}
            </View>
        );
    };

    const JamMemTabBar: React.FC<FriendsTabBarProps> = ({
        navigation,
        state,
    }: FriendsTabBarProps) => (
        <TabBar
            selectedIndex={state.index}
            onSelect={(index) => navigation.navigate(state.routeNames[index])}
        >
            <Tab title={FriendsTabName.Connections} />
            <Tab title={FriendsTabName.Requests} />
        </TabBar>
    );

    const TabNavigator = () => (
        <Navigator
            tabBar={({ navigation, state }) => (
                <JamMemTabBar navigation={navigation} state={state} />
            )}
        >
            <Screen
                name={FriendsTabName.Connections}
                component={ConnectionsTab}
            />
            <Screen name={FriendsTabName.Requests} component={RequestsTab} />
        </Navigator>
    );

    return (
        <NavigationContainer independent>
            <TabNavigator />
        </NavigationContainer>
    );
};

export default FriendsTabNavigator;
