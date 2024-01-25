import React from "react";
import Button from "@mui/material/Button";
import { TextButtonStyles } from "./textButton.styles";
export type ButtonProps = {
  text: string;
  background: string;
  onClick: React.MouseEventHandler;
};

const TextButton = ({ text, background, onClick }: ButtonProps) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      style={{
        background,
        ...TextButtonStyles,
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
export default TextButton;
