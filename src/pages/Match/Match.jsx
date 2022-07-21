import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./match.scss";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";
import LoadingSpinner from "../LoadingWait/LoadingSpinner";

//path
var pathTournament = "tournament";
var pathRound = "round/tournamentId/";
var pathMatch = "match/roundId/";
var roundId = null;
const Match = () => {
  //Const-----------------------------------------------------
  const [dataTournament, setDataTournament] = useState([]);
  const [DataRoundbyId, setDataRoundbId] = useState([]);
  const [dataRound, setDataRound] = useState([]);
  const rowsRound = dataRound;
  const rowsTournament = dataTournament;
  const [isShow, setShow] = useState(true)
  //useEffect-----------------------------------------------------
  useEffect(
    function () {
      axios
        .get(pathTournament)
        .then(function (data) {
          console.log(18, data.data.tournaments);
          setDataTournament(data.data.tournaments);
          handleChange();
        })
        .catch(function (err) {
          console.log(32, err);
        });
    },
    []
  );

  //handle Change Search round by Tournament-----------------------------------------------------
  const handleChange = (event) => {
    var select = document.querySelector('.NameTour');
    var value = select.options[select.selectedIndex].value;
    console.log(value);
    //to do search
    axios
      .get(pathRound + value)
      .then(function (data) {
        console.log(40, data.data);
        setDataRound(data.data);
        handleChangeRound(event)
      })
      .catch(function (err) {
        console.log(32, err);
      });
  }

  //handle Change search Match by Round-----------------------------------------------------
  const handleChangeRound = (event) => {
    setShow(true)
    var select = document.querySelector('.Round');
    var valueRound = select.options[select.selectedIndex].value;
    console.log(57, valueRound);
    roundId = valueRound;
    axios
      .get(pathMatch + roundId)
      .then(function (data) {
        console.log(62, data.data);
        setDataRoundbId(data.data)
        setShow(false)
      })
      .catch(function (err) {
        console.log(32, err);
      })
  }

  //-----------------------------------------------------------------------------------------------
  return (
    <div className="match">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div> */}
        <div className="listContainer">
          <div className="listTitle">List Match
            <Link to="/match/newMatch" className="newButton">
              Add New Match
            </Link>
            <Link to="/match/newRound" className="newButton">
              Add New Round
            </Link>
            <Link to="/match/newTournament" className="newButton">
              Add New Tournament
            </Link>
          </div>

          <div className="listTitle" style={{ fontSize: "20px" }}>
            Tournament: </div>

          <div className="formInput1" >
            <select className="NameTour"
              onChange={handleChange}>
              {rowsTournament.map((entity) => (
                <option value={entity.id} id={entity.id}>{entity.tournamentName}</option>
              ))
              }
            </select>
          </div>

          <div className="formInput" >
            <select className="Round"
              onChange={handleChangeRound}>
              {rowsRound.map((entity) => (
                <option value={entity.id} id={entity.id}>{entity.roundName}</option>
              ))}
            </select>
          </div>
          {isShow ? <LoadingSpinner /> : <Table props={DataRoundbyId} />}

        </div>
      </div>
    </div>
  );
};

export default Match;