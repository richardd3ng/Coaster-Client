import { Icon } from "@ui-kitten/components";
import { Input } from "@ui-kitten/components";
import { useState } from "react";
import { TextInputProps } from "react-native";

type SearchBarProps = {
    onSearch: (query: string) => void;
} & TextInputProps;

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
    const [query, setQuery] = useState<string>("");
    return (
        <Input
            accessoryLeft={<Icon name="search" />}
            placeholder={props.placeholder}
            onChangeText={setQuery}
            onSubmitEditing={() => props.onSearch(query)}
        />
    );
};

export default SearchBar;
