import React, { useState } from "react";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Avatar from "@mui/material/Avatar";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import styled from "@emotion/styled";
import FacebookIcon from "@mui/icons-material/Facebook";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "10px",
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
}));
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          FaceBook
        </Typography>
        <FacebookIcon
          fontSize="large"
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <Search>
          <InputBase placeholder="search.." />
        </Search>
        <Icons sx={{ display: { xs: "none", sm: "block" } }}>
          <Badge badgeContent={4} color="error">
            <MailOutlinedIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsOutlinedIcon />
          </Badge>

        </Icons>
        <UserBox>
            <Avatar
              onClick={(e) => setOpen(true)}
              sx={{ width: "30px", height: "30px" }}
              src="https://www.pexels.com/photo/man-in-brown-button-up-shirt-sitting-on-a-wooden-chair-10861564/"
            />
            <Typography>John</Typography>
          </UserBox>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
