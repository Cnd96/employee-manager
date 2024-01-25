import React from "react";
import { CircularProgress } from "@mui/material";
import { SpinnerStyles } from "./spinner.styles";


const Spinner = () => {
  return (
    <div
      style={SpinnerStyles}
    >
      <CircularProgress />
    </div>
  );
};
export default Spinner;
