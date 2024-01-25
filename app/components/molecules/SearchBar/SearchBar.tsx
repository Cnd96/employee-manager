import React from "react";
import TextField from "@mui/material/TextField";
import theme from "@/app/styles/theme";

export type SearchBarProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", justifyContent: "end" }}
    >
      <TextField
        placeholder="Search name"
        variant="outlined"
        value={value}
        onChange={onChange}
        sx={{
          "& .MuiInputBase-input": {
            height: "20px",
            borderRadius: "20px",
            background: "#fffffff",
            padding: "3px 10px",
          },
          "& .MuiInputBase-root": {
            borderRadius: "20px",
            border: `1px solid ${theme.primaryMain}`,
          },
          "& .MuiSvgIcon-root": {
            color: "red",
          },
          width: "75%",
        }}
      />
    </div>
  );
};

export default SearchBar;
