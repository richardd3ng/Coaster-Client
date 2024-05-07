import { Icon } from "@ui-kitten/components";
import { Input } from "@ui-kitten/components";
import { useRef, useState } from "react";
import { TextInputProps } from "react-native";

type SearchBarProps = {
    onSearch: (query: string) => void;
} & TextInputProps;

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
    const inputRef = useRef<Input>(null);
    const [query, setQuery] = useState<string>("");

    const handleSubmit = () => {
        if (query.trim() !== "") {
            props.onSearch(query);
        }
    };

    return (
        <Input
            ref={inputRef}
            accessoryLeft={<Icon name="search" />}
            accessoryRight={<Icon name="close" />}
            placeholder={props.placeholder || "Search"}
            onChangeText={setQuery}
            onSubmitEditing={handleSubmit}
            {...props}
        />
    );
};

export default SearchBar;
