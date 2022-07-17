import { Dashboard } from "@mui/icons-material";
import { AppBar, Toolbar, styled, Typography } from "@mui/material";
import React from "react";

// Base styles for custom Toolbar wrapper | flex justify = space-between
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

//
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          Dashboard
        </Typography>
        <Dashboard />
        <Search>Search</Search>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
