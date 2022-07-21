import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GroupsIcon from '@mui/icons-material/Groups';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FactCheckIcon from '@mui/icons-material/FactCheck';
import StadiumIcon from '@mui/icons-material/Stadium';
import SportsIcon from '@mui/icons-material/Sports';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png"

const Sidebar = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const signOutFirebase = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      localStorage.removeItem('user');
      navigate("/login");
      console.log("user is logged out");
    }).catch((error) => {
      console.log(error);
    });
  }


  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <img src={logo} alt="" className="logo-img" />
        <span className="logo">Admin</span>
      </div>
      <div className="center">
        <ul>
          <p className="title">Main</p>

          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">Account & User</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/order" style={{ textDecoration: "none" }}>
            <li>
              <FactCheckIcon className="icon" />
              <span>Order List</span>
            </li>
          </Link>
          {/* <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link> */}


          <p className="title">Manager</p>
          <Link to="/stadium" style={{ textDecoration: "none" }}>
            <li>
              <StadiumIcon className="icon" />
              <span>Stadium</span>
            </li>
          </Link>

          <Link to="/club" style={{ textDecoration: "none" }}>
            <li>
              <GroupsIcon className="icon" />
              <span>Club</span>
            </li>
          </Link>
          <Link to="/match" style={{ textDecoration: "none" }}>
            <li>
              <SportsIcon className="icon" />
              <span>Match</span>
            </li>
          </Link>
          {/* <Link to="/ticket/newTicket" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>New ticket</span>
            </li>
          </Link> */}
          <p className="title"></p>
          <p className="title"></p>
          <hr></hr>
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={signOutFirebase}>Logout</span>
          </li>
        </ul >
      </div >
    </div >
  );
};

export default Sidebar;
