import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./match.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";

var pathTournament = "tournament";
var pathRound = "round/tournamentId/";
var pathMatch = "match/stadiumId/";
const Match = () => {
  useEffect(
    function () {
      if(roundId == null){
        axios.get("match")
        .then(function (data) {
          console.log(data.data.matches);
          setDataRoundbId(data.data.matches);
          // console.log(list);
        })
        .catch(function (err) {
          console.log(32, err);
        });
      }
      axios
        .get(pathTournament)
        .then(function (data) {
          console.log(18,data.data.tournaments);
          setDataTournament(data.data.tournaments);
          // console.log(list);
        })
        .catch(function (err) {
          console.log(32, err);
        });
    },
    []
  );
  const [dataTournament, setDataTournament] = useState([]);
  const rowsTournament = dataTournament;

  var roundId;
  var [DataRoundbyId, setDataRoundbId] = useState([])
  const handleChange = (event) => {
  //


    var select = document.querySelector('.NameTour');
    var value = select.options[select.selectedIndex].value;
    console.log(value); 
    //to do search
    axios
        .get(pathRound + value)
        .then(function (data) {
          console.log(40,data.data);
          setDataRound(data.data);
          // console.log(list);
        })
        .catch(function (err) {
          console.log(32, err);
        });
    }
    

  const [dataRound, setDataRound] = useState([]);
  const rowsRound = dataRound;
  
  const handleChangeRound = (event) =>{
    var select = document.querySelector('.Round');
    var valueRound = select.options[select.selectedIndex].value;
    console.log(57,valueRound);
    roundId = valueRound;
    axios
        .get(pathMatch + roundId)
        .then(function (data) {
          console.log(62, data.data);
          setDataRoundbId(data.data)
        })
        .catch(function (err) {
          console.log(32, err);
        })
    }
   
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
            <select className="NameTour" onChange={handleChange}>
              {rowsTournament.map((entity) => (
                <option value={entity.id} id={entity.id}>{entity.tournamentName}</option>
              ))
              }
            </select>
          </div>

          <div className="formInput" >
            <select className="Round" onChange={handleChangeRound} >
              {rowsRound.map((entity) => (
                <option value={entity.id} id={entity.id}>{entity.roundName}</option>
              ))
              }
            </select>
          </div>

          <Table props={DataRoundbyId}/>
        </div>
      </div>
    </div>
  );
};

export default Match;