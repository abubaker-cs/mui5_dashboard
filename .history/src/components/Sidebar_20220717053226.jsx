import { Box } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box bgcolor="red" flex={1} p={2} sx={{display: none;}}>
      Sidebar
    </Box>
  );
};

export default Sidebar;
