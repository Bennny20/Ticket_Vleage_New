/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import Logo from "../assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import LoginButton from "./LoginButton";
import Profile from "./Profile"
import { AuthContext } from "../../context/AuthContext";




const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext)

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} style={{ width: 100 }} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact</a>
        <a href="#">
          <BsCart2 className="navbar-cart-icon" />
          {/* <div onClick={() => setOpen(!open)}>
            <ShoppingCartOutlinedIcon />
            <span>{products.length}</span>
          </div> */}
        </a>
        {
          currentUser ? <Profile /> : <LoginButton />
        }




      </div>

    </nav>
  );
};

export default Navbar;
