import React from "react";
import { Box } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        width: "100%",
        color: "white",
        position: "fixed",
        bottom: 0,
        padding: 2,
        textAlign: "center",
      }}
    >
      CopyRight &copy; MyTodoList.Com
    </Box>
  );
};
