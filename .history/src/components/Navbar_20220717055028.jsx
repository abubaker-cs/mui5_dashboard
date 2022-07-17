import { Dashboard } from "@mui/icons-material";
import { AppBar, Toolbar, styled, Typography } from "@mui/material";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          Dashboard
        </Typography>
        <Dashboard />
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
