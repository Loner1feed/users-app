import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { style } from "./style";

export const Spinner: React.FC = () => {
  return (
    <Box sx={style.spinner}>
      <CircularProgress />
    </Box>
  );
};
