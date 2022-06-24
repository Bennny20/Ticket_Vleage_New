import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ListStaidum from "../../components/table/ListStadium"
import "./home.scss";

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
            <div className="listTitle">List Stadium</div>
            <ListStaidum />
          </div>
        </div>
      </div>
    );
  };
  
  export default Stadium;