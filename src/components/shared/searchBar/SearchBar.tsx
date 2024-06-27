import React, { forwardRef, useEffect, useRef } from "react";

import debounce from "lodash/debounce";
import { Icon, IconElement, Input } from "@ui-kitten/components";
import { TextInputProps } from "react-native";
import CustomPressable from "../customPressable/CustomPressable";

interface SearchBarProps extends TextInputProps {
    onClear: () => void;
    onSearch: (query: string) => void;
}

const SearchBar: React.ForwardRefRenderFunction<Input, SearchBarProps> = (
    { onClear, onSearch, placeholder = "Search", ...props }: SearchBarProps,
    ref: React.ForwardedRef<Input>
) => {
    const debouncedSearchRef = useRef(
        debounce((query: string) => {
            onSearch(query);
        }, 300)
    );

    const handleClear = () => {
        (ref as React.RefObject<Input>).current?.clear();
        debouncedSearchRef.current.cancel();
        onClear();
    };

    const handleChangeText = (text: string) => {
        if (!(ref as React.RefObject<Input>).current?.isFocused()) {
            return;
        }
        debouncedSearchRef.current(text);
        props.onChangeText && props.onChangeText(text);
    };

    useEffect(() => {
        return () => {
            debouncedSearchRef.current.cancel();
        };
    }, []);

    const CloseIcon = (props: any): IconElement => {
        return <Icon {...props} name="close" fill="gray" />;
    };

    const CloseIconButton = (
        <CustomPressable onPress={handleClear}>
            <CloseIcon />
        </CustomPressable>
    );

    return (
        <Input
            ref={ref}
            accessoryLeft={<Icon name="search" />}
            accessoryRight={CloseIconButton}
            placeholder={placeholder}
            {...props}
            onChangeText={handleChangeText}
        />
    );
};

export default forwardRef(SearchBar);
