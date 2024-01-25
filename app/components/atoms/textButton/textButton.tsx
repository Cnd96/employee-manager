import React from "react";
import Button from "@mui/material/Button";
import { TextButtonStyles } from "./textButton.styles";
import { useMediaQuery } from "@mui/material";
export type ButtonProps = {
  text: string;
  background: string;
  onClick: React.MouseEventHandler;
};

const TextButton = ({ text, background, onClick }: ButtonProps) => {
  const smallScreen = useMediaQuery("(max-width:500px)");
  return (
    <Button
      variant="contained"
      color="secondary"
      style={{
        background,
        fontSize: smallScreen ? "9px" : "14px",
        ...TextButtonStyles,
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
export default TextButton;
