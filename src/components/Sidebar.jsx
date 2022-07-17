import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

import {
  AccountBox,
  Article,
  Assignment,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";

import React from "react";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          {/* Home */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          {/* Pages */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          {/* Groups */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          {/* Marketplace */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          {/* Friends */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          {/* Settings */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          {/* Profile */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon sx={{ minWidth: "28px" }}>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
