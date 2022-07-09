import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./match.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";


const Match = () => {
  return (
    <div className="match">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="listContainer">
          <div className="listTitle">List Math
            <Link to="/match/newMatch" className="link">
              Add New Match
            </Link>
            <Link to="/match/newRound" className="link">
              Add New Round
            </Link>
            <Link to="/match/newTournament" className="link">
              Add New Tournament
            </Link>
          </div>

          <div className="listTitle" style={{fontSize:"20px"}}>Tournament: NIGHT WOLF V.LEAGUE 1 - 2022</div>

          <div className="formInput" >
            <select>
              <option value="CO2">Round 1</option>
              <option value="CO2">Round 2</option>
            </select>
          </div>
          
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Match;
