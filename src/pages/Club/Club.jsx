import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ListClub from "../../components/table/ListClub"
import { Link } from "react-router-dom";
import "./club.scss";

const club = () => {
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
          <div className="listTitle">List club</div>
          <div style={{ marginBottom: "20px" }}>
            <Link to="/club/newClub" className="link">
              Add New
            </Link>
          </div>
          <ListClub />
        </div>
      </div>
    </div>
  );
};

export default club;