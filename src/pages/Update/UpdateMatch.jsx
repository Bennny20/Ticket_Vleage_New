import "./update.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";

const UpdateMatch = () => {

  var pathClub = "club?page=0&size=20&sort=id%2Cdesc";
  var pathStadium = "stadium?page=0&size=20&sort=id%2Cdesc";
  var pathUpdate = "match";
  var matchID = JSON.parse(localStorage.getItem("editMatchId"));

  console.log("Match ID", matchID)
  //data--------------------------------------------------------
  const [dataClub, setDataClub] = useState([]);
  const [dataStadium, setDataStadium] = useState([]);
  const [matchClubHomeId, setMatchClubHomeId] = useState();
  const [matchClubVisitorId, setMathClubVisitorId] = useState();
  const [matchStadiumId, setMatchStadiumId] = useState();
  const [matchRoundID, setMatchRoundId] = useState();
  const [matchStatus, setMatchStatus] = useState();
  const [matchTimeStart, setMatchTime] = useState();
  const [matchCapacity, setMatchCapacity] = useState();
  //useEffect
  useEffect(
    function () {
      //get data match by id
      axios.get(pathUpdate + "/" + matchID)
        .then(function (data) {
          console.log("Test search match by id", data.data);
          setMatchClubHomeId(data.data.clubHome.id);
          setMathClubVisitorId(data.data.clubVisitor.id);
          setMatchStadiumId(data.data.stadium.id);
          setMatchCapacity(data.data.stadium.capacity);
          setMatchRoundId(data.data.roundId);
          setMatchStatus(data.data.status);
          setMatchTime(data.data.timeStart);
        })
        .catch(function (err) {
          console.log(32, err);
        });
      //get data api Club
      axios.get(pathClub)
        .then(function (data) {
          console.log("this is data club", data.data.clubs);
          setDataClub(data.data.clubs);
          // console.log(list);
        })
        .catch(function (err) {
          console.log(32, err);
        });

      //get data api Stadium
      axios.get(pathStadium)
        .then(function (data) {
          console.log(data.data.stadiums);
          setDataStadium(data.data.stadiums);
          // console.log(list);
        })
        .catch(function (err) {
          console.log(32, err);
        });
      //get data api Round
    },
    []
  );
  //check data logs
  console.log("================================");
  console.log("Match ID :", matchID);
  console.log("clubHome id onchange :", matchClubHomeId);
  console.log("clubVisitor id onchange :", matchClubVisitorId);
  console.log("stadium id onchange :", matchStadiumId);
  console.log("status :", matchStatus);
  console.log(" this is time", matchTimeStart);


  //handle Change Search round by Tournament-----------------------------------------------------
  function handleSubmit(event) {
    event.preventDefault();
    //To do code here
    alert("Update matchs: ")
    axios.put(pathUpdate, {
      "clubHomeId": matchClubHomeId,
      "clubVisitorId": matchClubVisitorId,
      "id": matchID,
      "roundId": matchRoundID,
      "stadiumId": matchStadiumId,
      "status": matchStatus,
      "timeStart": matchTimeStart
    })
      .then(response => {
        alert("Success")
        //Go to club page
        return window.location.href = "../match"
      })
      .catch(error => {
        alert(error)
        console.log(error);
      });

    //end to do code
  }

  return (
    <div className="update">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Update match</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              {/* Club Home */}
              <div className="formInput" >
                <label>Home</label>
                <select name="clubHomeId"
                  value={matchClubHomeId}
                  onChange={e => setMatchClubHomeId(e.target.value)}>
                  {dataClub.map((entity) =>
                    (<option value={entity.id} id={entity.id}>{entity.clubName}</option>))
                  }
                </select>
              </div>

              {/* Club Visitor */}
              <div className="formInput" >
                <label>Away</label>
                <select name="clubVisitorId"
                  value={matchClubVisitorId}
                  onChange={e => setMathClubVisitorId(e.target.value)}>
                  {dataClub.map((entity) => (
                    <option value={entity.id} id={entity.id}>{entity.clubName}</option>
                  ))
                  }
                </select>
              </div>

              {/* Stadium for match */}
              <div className="formInput" >
                <label>Stadium</label>
                <select name="stadiumId"
                  value={matchStadiumId}
                  onChange={e => setMatchStadiumId(e.target.value)}>
                  {dataStadium.map((entity) => (
                    <option value={entity.id} id={entity.id}>{entity.stadiumName}</option>
                  ))
                  }
                </select>
              </div>

              <div className="formInput" >
                <label>Date</label>
                <input type="datetime-local" placeholder="" value={matchTimeStart} onChange={e => setMatchTime(e.target.value)} />
              </div>

              <div className="formInput" >
                <label>Capacity</label>
                <input type="text" placeholder="" value={matchCapacity} readOnly disabled />
              </div>


              <div className="formInput" >
                <label>Status</label>
                <select onChange={e => setMatchStatus(e.target.value)} value={matchStatus}>
                  <option value="false">Ending</option>
                  <option value="true">On-going</option>
                </select>
              </div>
              <div className="btnSend">
                <button>Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMatch;
