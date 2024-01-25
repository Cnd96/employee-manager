import React from "react";
import { useFormContext } from "react-hook-form";
import { FormControl, MenuItem, Select } from "@mui/material";
import {
  DropDownContainerStyles,
  DropDownInputStyles,
  DropDownSelectStyles,
} from "./dropDownWithLabel.styles";

export interface DropDownWithProps {
  title: string;
  options: string[];
  name: string;
}

const DropDownWithLabel = ({ title, options, name }: DropDownWithProps) => {
  const { register, watch } = useFormContext();
  return (
    <div style={DropDownContainerStyles}>
      <p>{title}</p>
      <FormControl
        sx={{
          "& .MuiInputBase-input": {
            ...DropDownInputStyles,
          },
        }}
      >
        <Select
          sx={{
            "& .MuiInputBase-input": {
              ...DropDownSelectStyles,
            },
          }}
          {...register(name)}
          id={name}
          name={name}
          value={watch(name)}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDownWithLabel;
