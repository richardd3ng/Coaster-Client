import {
    forwardRef,
    ReactNode,
    useCallback,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";

import { debounce, set } from "lodash";
import { Icon, Input } from "@ui-kitten/components";
import { TextInputProps, View } from "react-native";

import CancelTextPressable from "../cancelTextPressable/CancelTextPressable";
import createStyles from "./styles";
import CustomPressable from "../customPressable/CustomPressable";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

export interface SearchBarRef {
    /**
     * Additional cancel method to be called from outside the component. This method will cancel the search and clear the input, but will not trigger the onCancel callback.
     * @returns void
     */
    cancel: () => void;
    /**
     * Method to get the current value of the isCancelled ref for determining if the search has been cancelled externally to prevent async search results from being displayed.
     * @returns The current value of the isCancelled ref.
     */
    getIsCancelled: () => boolean;
}

interface SearchBarProps extends TextInputProps {
    onClear: () => void;
    onSearch: (query: string) => Promise<void>;
    onCancel?: () => void;
    onFocus?: () => void;
    rightComponent?: ReactNode;
}

const SearchBar: React.ForwardRefRenderFunction<
    SearchBarRef,
    SearchBarProps
> = (
    {
        onClear,
        onSearch,
        onCancel,
        rightComponent,
        placeholder = "Search",
        ...props
    }: SearchBarProps,
    ref: React.ForwardedRef<SearchBarRef>
) => {
    const styles = useThemeAwareObject(createStyles);
    const inputRef = useRef<Input>(null);
    const [showRightComponent, setShowRightComponent] = useState<boolean>(true);
    const isCancelled = useRef<boolean>(false);
    const latestRequestId = useRef<number>(0);
    const currentSearchPromise = useRef<Promise<void> | null>(null);
    const [showCloseButton, setShowCloseButton] = useState<boolean>(false);

    const performSearch = useCallback(
        async (query: string, requestId: number) => {
            if (isCancelled.current || requestId !== latestRequestId.current) {
                return;
            }
            await onSearch(query);
        },
        [onSearch]
    );

    /**
     * Debounced search function that will only call the performSearch function after the user has stopped typing for 200ms.
     */
    const debouncedSearch = useCallback(
        debounce(
            (query: string, requestId: number) => {
                if (currentSearchPromise.current) {
                    currentSearchPromise.current =
                        currentSearchPromise.current.then(() =>
                            performSearch(query, requestId)
                        );
                } else {
                    currentSearchPromise.current = performSearch(
                        query,
                        requestId
                    );
                }
            },
            200,
            { leading: true, trailing: true }
        ),
        [performSearch]
    );

    useEffect(() => {
        return () => {
            debouncedSearch.cancel();
            isCancelled.current = true;
            currentSearchPromise.current = null;
            latestRequestId.current = 0;
        };
    }, [debouncedSearch]);

    const cancelSearch = useCallback(() => {
        isCancelled.current = true;
        debouncedSearch.cancel();
        currentSearchPromise.current = null;
        inputRef.current?.clear();
    }, []);

    useImperativeHandle(ref, () => ({
        cancel: () => handleCancel("external"),
        getIsCancelled: () => isCancelled.current,
    }));

    const handleClear = () => {
        cancelSearch();
        inputRef.current?.clear();
        onClear();
    };

    const handleChangeText = (text: string) => {
        if (text.length === 0) {
            setShowCloseButton(false);
        }
        else {
            setShowCloseButton(true);
        }
        isCancelled.current = false;
        latestRequestId.current++;
        debouncedSearch(text, latestRequestId.current);
        props.onChangeText && props.onChangeText(text);
    };

    const handleCancel = (mode: "internal" | "external") => {
        setShowCloseButton(false);
        inputRef.current?.blur();
        handleClear();
        setShowRightComponent(true);
        if (mode === "internal") {
            onCancel && onCancel();
        }
    };

    const handleFocus = () => {
        setShowRightComponent(false);
        props.onFocus && props.onFocus();
    };

    const CloseIconButton = (
        <CustomPressable onPress={handleClear}>
            <Icon {...props} name="close" fill="gray" />
        </CustomPressable>
    );

    return (
        <View style={styles.container}>
            <Input
                ref={inputRef}
                accessoryLeft={<Icon name="search" />}
                accessoryRight={showCloseButton ? CloseIconButton : undefined}
                placeholder={placeholder}
                {...props}
                onChangeText={handleChangeText}
                onFocus={handleFocus}
                style={styles.input}
            />
            {showRightComponent ? (
                rightComponent
            ) : (
                <View style={styles.cancelContainer}>
                    <CancelTextPressable
                        onPress={() => handleCancel("internal")}
                    />
                </View>
            )}
        </View>
    );
};

export default forwardRef<SearchBarRef, SearchBarProps>(SearchBar);
