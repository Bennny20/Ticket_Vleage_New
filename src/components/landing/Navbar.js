/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import Logo from "../assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import LoginButton from "./LoginButton";

import UserButton from "./Profile";
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
        <a href="#"></a>
        {
          currentUser ? <UserButton /> : <LoginButton />
        }




      </div>

    </nav>
  );
};

export default Navbar;
