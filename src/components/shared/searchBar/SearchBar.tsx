import React, { forwardRef, useState } from "react";

import CustomPressable from "../customPressable/CustomPressable";
import { Icon, IconElement, Input } from "@ui-kitten/components";
import { TextInputProps } from "react-native";

interface SearchBarProps extends TextInputProps {
    onClear: () => void;
    onSearch: (query: string) => void;
}

const SearchBar: React.ForwardRefRenderFunction<Input, SearchBarProps> = (
    props: SearchBarProps,
    ref: React.ForwardedRef<Input>
) => {
    const [query, setQuery] = useState<string>("");

    const handleSubmit = () => {
        if (query.trim() !== "") {
            props.onSearch(query);
        }
    };

    const handleClear = () => {
        (ref as React.RefObject<Input>).current?.clear();
        setQuery("");
        props.onClear();
    };

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
            placeholder={props.placeholder || "Search"}
            onChangeText={setQuery}
            onSubmitEditing={handleSubmit}
            {...props}
        />
    );
};

export default forwardRef(SearchBar);
