import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./match.scss";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";
import LoadingSpinner from "../LoadingWait/LoadingSpinner";


import '@fortawesome/fontawesome-free/css/all.min.css';
//path
var pathTournament = "tournaments/";
var pathRound = "rounds/";
var pathMatch = "matches/round/";
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
          console.log(18, data.data);
          setDataTournament(data.data);
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
          <div className="listTitle" style={{ fontSize: "20px" }}>
            Tournament: </div>

          <div className="formInput1" >
            <select className="NameTour"
              onChange={handleChange}>
              {rowsTournament.map((entity) => (
                <option value={entity._id} id={entity._id} key={entity._id}>{entity.name}</option>
              ))
              }
            </select>
            <a class="button touch new-btn" href="/match/newTournament"><i class="fa-duotone fa-plus"></i></a>
            <a class="button touch edit-btn" href="/match/newRound"><i class="fa-solid fa-pen"></i></a>
            <a class="button touch delete-btn" href="/match/newRound"><i class="fa-solid fa-trash"></i></a>
          </div>
          <div className="listTitle" style={{ fontSize: "20px" }}>
            Round: </div>
          <div className="formInput" >

            <select className="Round"
              onChange={handleChangeRound}>
              {rowsRound.map((entity) => (
                <option value={entity._id} id={entity._id} key={entity._id}>{entity.numberRound}</option>
              ))}
            </select>
            <a class="button touch new-btn" href="/match/newRound"><i class="fa-duotone fa-plus"></i></a>
            <a class="button touch edit-btn" href="/match/newRound"><i class="fa-solid fa-pen"></i></a>
            <a class="button touch delete-btn" href="/match/newRound"><i class="fa-solid fa-trash"></i></a>
          </div>
          {isShow ? <LoadingSpinner /> : <Table props={DataRoundbyId} />}

        </div>
      </div>
    </div>
  );
};

export default Match;