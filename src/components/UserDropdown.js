import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  Menu,
  MenuItem,
  Avatar as MuiAvatar,
  IconButton as MuiIconButton,
} from "@material-ui/core";

import { signOut } from "../redux/actions/authActions";

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

const Avatar = styled(MuiAvatar)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

function UserDropdown() {
  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const toggleMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };

  const handleEditProfile = () => {
    setAnchorMenu(null);
    history.push("/edit-profile");
  };

  const handleChangePassword = () => {
    setAnchorMenu(null);
    history.push("/change-user-password");
  };

  const handleSignOut = async () => {
    await dispatch(signOut());
    history.push("/auth/signin");
  };

  const getUserImage = () => {
    return "/static/img/avatars/avatar-1.jpg";
  };

  return (
    <React.Fragment>
      <IconButton
        aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
        aria-haspopup="true"
        onClick={toggleMenu}
        color="inherit"
      >
        <Avatar alt="user avatar" src={getUserImage()} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
        placement="bottom"
      >
        <MenuItem onClick={handleEditProfile}>Edit Your Profile</MenuItem>
        <MenuItem onClick={handleChangePassword}>Change Password</MenuItem>
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default UserDropdown;
