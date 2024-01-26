import React from "react";
import TextField from "@mui/material/TextField";
import { SearchBarStyles } from "./SearchBar.styles";

export type SearchBarProps = {
  placeHolder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const SearchBar = ({ placeHolder, value, onChange }: SearchBarProps) => {
  return (
    <div style={SearchBarStyles.Container}>
      <TextField
        placeholder={placeHolder}
        variant="outlined"
        value={value}
        onChange={onChange}
        sx={{
          "& .MuiInputBase-input": {
            ...SearchBarStyles.Input,
          },
          "& .MuiInputBase-root": {
            ...SearchBarStyles.Root,
          },
          width: "75%",
        }}
      />
    </div>
  );
};

export default SearchBar;
