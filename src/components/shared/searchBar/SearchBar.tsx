import React, { forwardRef, useState } from "react";

import { Icon, IconElement, Input } from "@ui-kitten/components";
import { TextInputProps, TouchableOpacity } from "react-native";

type SearchBarProps = {
    onClear: () => void;
    onSearch: (query: string) => void;
} & TextInputProps;

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
        <TouchableOpacity onPress={handleClear}>
            <CloseIcon />
        </TouchableOpacity>
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
