import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./match.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";


const Match = () => {

  const rowsTournament = [
    {
      id: "1",
      name: "NIGHT WOLF V.LEAGUE 1 - 2022"
    },
    {
      id: "2",
      name: "LS V.League 1 - 2021"
    },
    {
      id: "3",
      name: "LS V.League 1 - 2020"
    }, 
    {
      id: "4",
      name: "LS V.League 1 - 2019"
    }
  ];


  const rowsRound = [
    {
      id: "1",
      name: "Round 1"
    },
    {
      id: "2",
      name: "Round 2"
    },
    {
      id: "3",
      name: "Round 3"
    }
  ];
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
          <div className="listTitle">List Match
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

          <div className="listTitle" style={{ fontSize: "20px" }}>
            Tournament: </div>

          <div className="formInput1" >
            <select>
              {rowsTournament.map((entity) => (
                <option id="{entity.id}">{entity.name}</option>
              ))
              }
            </select>
          </div>

          <div className="formInput" >
            <select>
              {rowsRound.map((entity) => (
                <option id={entity.id}>{entity.name}</option>
              ))
              }
            </select>
          </div>

          <Table />
        </div>
      </div>
    </div>
  );
};

export default Match;