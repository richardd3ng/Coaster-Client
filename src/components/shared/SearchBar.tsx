import React, { forwardRef, useState } from "react";
import { Icon, Input } from "@ui-kitten/components";
import { TextInputProps } from "react-native";

type SearchBarProps = {
    onSearch: (query: string) => void;
} & TextInputProps;

const SearchBar: React.ForwardRefRenderFunction<Input, SearchBarProps> = (
    props: SearchBarProps,
    ref
) => {
    const [query, setQuery] = useState<string>("");

    const handleSubmit = () => {
        if (query.trim() !== "") {
            props.onSearch(query);
        }
    };

    return (
        <Input
            ref={ref}
            accessoryLeft={<Icon name="search" />}
            accessoryRight={<Icon name="close" />}
            placeholder={props.placeholder || "Search"}
            onChangeText={setQuery}
            onSubmitEditing={handleSubmit}
            {...props}
        />
    );
};

export default forwardRef(SearchBar);
