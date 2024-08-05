import { useEffect, useCallback, useRef, useMemo } from "react";

import EventSource from "react-native-sse";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { randomUUID } from "expo-crypto";

import { queryKeys } from "./react-query/useQueryHooks";
import {
    showAddedToJamMemToast,
    showFriendRequestAcceptedToast,
    showIncomingFriendRequestToast,
} from "../utils/toastUtils";
import { useUserId } from "./useUserHooks";

const eventHandlers = {
    incomingFriendRequest: (event: any, queryClient: QueryClient) => {
        if (event.data) {
            queryClient.invalidateQueries({
                queryKey: queryKeys.pendingRequests,
            });
            showIncomingFriendRequestToast(JSON.parse(event.data));
        }
    },
    acceptedFriendRequest: (event: any, queryClient: QueryClient) => {
        if (event.data) {
            queryClient.invalidateQueries({
                queryKey: queryKeys.friends,
            });
            queryClient.invalidateQueries({
                queryKey: queryKeys.sentRequests,
            });
        }
        showFriendRequestAcceptedToast(JSON.parse(event.data));
    },
    addedToJamMem: (event: any, queryClient: QueryClient) => {
        if (event.data) {
            queryClient.invalidateQueries({
                queryKey: queryKeys.jamMemMetadatasShared,
            });
            showAddedToJamMemToast(JSON.parse(event.data));
        }
    },
};

type CoasterEvents = keyof typeof eventHandlers;

const useServerSentEvents = () => {
    const retryCount = useRef(0);
    const userId = useUserId();
    const connectionId = useMemo(() => randomUUID(), []);
    const eventSourceRef = useRef<EventSource<CoasterEvents> | null>(null);
    const queryClient = useQueryClient();

    const connectSSE = useCallback(() => {
        const params = new URLSearchParams({
            userId,
            connectionId,
        });
        const url = `${process.env.BASE_URL}/sse?${params.toString()}`;
        const es = new EventSource<CoasterEvents>(url);
        eventSourceRef.current = es;

        es.addEventListener("open", () => {
            console.log("Open SSE connection.");
            retryCount.current = 0;
        });

        Object.entries(eventHandlers).forEach(([event, handler]) => {
            es.addEventListener(event as CoasterEvents, (e) =>
                handler(e, queryClient)
            );
        });

        es.addEventListener("error", () => {
            es.close();
            retryCount.current++;
            const backoffTime = 1000 * Math.pow(2, retryCount.current);
            console.log(
                `Retrying connection (attempt ${retryCount.current}) in ${backoffTime / 1000} seconds...`
            );
            setTimeout(connectSSE, backoffTime);
        });

        console.log("Start SSE connection.");
    }, [userId, connectionId]);

    useEffect(() => {
        connectSSE();

        return () => {
            console.log("Stop SSE connection.");
            if (eventSourceRef.current) {
                eventSourceRef.current.close();
                eventSourceRef.current.removeAllEventListeners();
            }
        };
    }, [connectSSE]);
};

export default useServerSentEvents;
