import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          
          <div className="listTitle" style={{ fontSize: "20px" }}>Tournament: NIGHT WOLF V.LEAGUE 1 - 2022</div>
          <div className="listTitle" style={{ fontSize: "20px" , color:"red"}}>Round: 01</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
