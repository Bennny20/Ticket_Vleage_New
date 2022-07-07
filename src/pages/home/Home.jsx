import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
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
          <div className="listTitle">List Math</div>
          <div className="formInput" >
            <select>
              <option value="CO2">Round 1</option>
              <option value="CO2">Round 1</option>
            </select>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
