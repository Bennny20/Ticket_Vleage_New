import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ListStaidum from "../../components/table/ListStadium"
import { Link } from "react-router-dom";
import "./stadium.scss";

const Stadium = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="listContainer">
          <div className="listTitle">
            List stadium
            <Link to="/stadium/newStadium" className="link">
              Add New
            </Link>
          </div>
          <ListStaidum />
        </div>
      </div>
    </div>
  );
};

export default Stadium;