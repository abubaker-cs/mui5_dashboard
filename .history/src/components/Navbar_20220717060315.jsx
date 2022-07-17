import { Dashboard } from "@mui/icons-material";
import { AppBar, Toolbar, styled, Typography, Box } from "@mui/material";
import React from "react";

// Base styles for custom Toolbar wrapper | flex justify = space-between
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

//
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
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
        <Dashboard
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
        <Search>Search</Search>
        <Icons>Icons</Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
