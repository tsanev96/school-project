import { TextField } from "@mui/material";
import { FC } from "react";

interface ISearchBox {
  onChange: (text: string) => void;
  placeholder?: string;
}

const SearchBox: FC<ISearchBox> = ({ placeholder = "", onChange }) => {
  return (
    <TextField
      color="primary"
      focused
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBox;
