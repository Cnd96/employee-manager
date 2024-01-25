import React from "react";
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { InputWithLabelStyles } from "./inputWithLabel.styles";

export interface InputWithLabelProps {
  title: string;
  name: string;
  error: string | undefined;
}

const InputWithLabel = ({ title, name, error }: InputWithLabelProps) => {
  const { register } = useFormContext();
  return (
    <div style={InputWithLabelStyles.Wrapper}>
      <div style={InputWithLabelStyles.Container}>
        <p>{title}</p>
        <TextField
          sx={{
            "& .MuiInputBase-input": {
              ...InputWithLabelStyles.Input,
            },
          }}
          {...register(name)}
          id={name}
          name={name}
          placeholder={title}
        />
      </div>
      {error && <p style={InputWithLabelStyles.Error}>{error}</p>}
    </div>
  );
};

export default InputWithLabel;
