import React from "react";
import { CircularProgress } from "@mui/material";


const Spinner = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <CircularProgress />
    </div>
  );
};
export default Spinner;
