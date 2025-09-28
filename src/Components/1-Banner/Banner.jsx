import React, { useState } from "react";
import "./Banner.css";

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
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

/* =========================
   Swiper Slider
========================= */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

/* =========================
   Language Options
========================= */
const options = ["English", "Arabic"];

export default function Banner() {
  const [showModal, setshowModal] = useState(false);

  // State for language dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  /* Handle Language Menu */
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
    <header className="banner">
      {/* =========================
          Top Banner
      ========================== */}
      <div className="top-banner">
        <div className="scroll-text">
          <span>FLASH SALE UP TO 70%</span>
          <span>FLASH SALE UP TO 70%</span>
          <span>FLASH SALE UP TO 70%</span>
          <span>FLASH SALE UP TO 70%</span>
        </div>
      </div>

      {/* =========================
          Navbar
      ========================== */}
      <nav className="navbar">
        <div className="container navbar-inner ">
          {/* Menu Button (Mobile) */}
          <button className="menu-btn" onClick={() => setshowModal(true)}>
            <IconButton style={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
          </button>

          {/* Logo */}
          <div className="logo">
            <img src="/img/logo.svg" alt="Logo" />
          </div>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>

          {/* Right Side Navbar (Icons + Language Switch) */}
          <div className="navbar-left">
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

            {/* Language Menu Dropdown */}
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
            <IconButton className="nav-icon">
              <PersonOutlineIcon />
            </IconButton>
            <IconButton className="nav-icon">
              <SearchIcon />
            </IconButton>
            <IconButton className="nav-icon">
              <AutorenewIcon />
            </IconButton>
            <IconButton className="nav-icon">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton className="nav-icon">
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

      {/* =========================
          Hero Section (Slider)
      ========================== */}
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <section className="hero">
            <div className="hero-left">
              <p className="sub">Season Sale</p>
              <h1 className="title">Men’s Fashion</h1>
              <p className="discount">35–70% Off</p>
              <button className="btn">Shop Now</button>
            </div>
            <div className="hero-right">
              <img
                src="/img/slider1.png"
                alt="Fashion Model"
                className="hero-image"
              />
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="hero">
            <div className="hero-left">
              <p className="sub">Season Sale</p>
              <h1 className="title">Men’s Fashion</h1>
              <p className="discount">35–70% Off</p>
              <button className="btn">Shop Now</button>
            </div>
            <div className="hero-right">
              <img
                src="/img/slider1.png"
                alt="Fashion Model"
                className="hero-image"
              />
            </div>
          </section>
        </SwiperSlide>
      </Swiper>

      {/* =========================
          Features Strip
      ========================== */}
      <div className="features-strip">
        <div className="feature flex">
          <IconButton className="feature-icons">
            <SpaceDashboardIcon className="feature-icon" />
          </IconButton>
          <div className="feature-text">
            <p>Discount</p>
            <span>Every week new sales</span>
          </div>
        </div>
        <div className="feature flex">
          <IconButton className="feature-icons">
            <LocalShippingOutlinedIcon className="feature-icon" />
          </IconButton>
          <div className="feature-text">
            <p>Free Delivery</p>
            <span>100% Free for all orders</span>
          </div>
        </div>
        <div className="feature flex">
          <IconButton className="feature-icons">
            <AccessTimeOutlinedIcon className="feature-icon" />
          </IconButton>
          <div className="feature-text">
            <p>Great Support 24/7</p>
            <span>We care your experiences</span>
          </div>
        </div>
        <div className="feature flex">
          <IconButton className="feature-icons">
            <CreditScoreOutlinedIcon className="feature-icon" />
          </IconButton>
          <div className="feature-text">
            <p>Secure Payment</p>
            <span>100% Secure Payment Method</span>
          </div>
        </div>
      </div>

      {/* =========================
          Mobile Modal Menu
      ========================== */}
      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => setshowModal(false)}
              >
                <IconButton style={{ color: "white" }}>
                  <CloseIcon />
                </IconButton>
              </button>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
