import React, { useState } from "react";
import { Link } from "react-router-dom";
/* =========================
   MUI Components
========================= */
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

/* =========================
   MUI Icons
========================= */
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
const options = ["English", "Arabic"];

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  /* =========================
     Handle Language Menu
  ========================== */
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    handleClose();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="header">
      {/* =========================
          Top Banner
      ========================== */}
      <div className="header-top-banner">
        <div className="header-scroll-text">
          <span>FLASH SALE UP TO 70%</span>
          <span>FLASH SALE UP TO 70%</span>
          <span>FLASH SALE UP TO 70%</span>
          <span>FLASH SALE UP TO 70%</span>
        </div>
      </div>

      {/* =========================
          Navbar
      ========================== */}
      <nav className="header-navbar">
        <div className="container header-navbar-inner">
          {/* Menu Button (Mobile) */}
          <button
            className="header-menu-btn"
            onClick={() => setShowModal(true)}
          >
            <IconButton style={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
          </button>

          {/* Logo */}
          <div className="header-logo">
            <img src="/img/logo.svg" alt="Logo" />
          </div>

          {/* Navigation Links */}
          <ul className="header-nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
          </ul>

          {/* Right Side Navbar */}
          <div className="header-navbar-left">
            {/* Language Switch */}
            <List
              component="nav"
              aria-label="Language switch"
              sx={{ p: 0, m: 0 }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
              >
                <ListItemText
                  sx={{
                    ".MuiTypography-root": {
                      fontSize: "11px",
                      color: "#fff",
                      minWidth: "40px",
                    },
                  }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
              </ListItem>
            </List>

            {/* Language Dropdown */}
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                  sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>

            {/* Navbar Icons */}
            <IconButton
              className="header-nav-icon"
              component={Link}
              to="/profile"
            >
              <PersonOutlineIcon />
            </IconButton>
            <IconButton className="header-nav-icon">
              <SearchIcon />
            </IconButton>
            <IconButton className="header-nav-icon">
              <AutorenewIcon />
            </IconButton>
            <IconButton className="header-nav-icon">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton className="header-nav-icon">
              <Badge
                badgeContent={"count"}
                color="error"
                overlap="circular"
                showZero
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </div>
      </nav>
    </header>
  );
}
