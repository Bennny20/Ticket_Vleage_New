import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ListTicket from "../../components/table/ListTicket"
import { Link } from "react-router-dom";
import "./ticket.scss";
import { useEffect, useState } from "react";
import axios from "../../AxiosConfig";
import LoadingSpinner from "../LoadingWait/LoadingSpinner";
import { async } from "@firebase/util";
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
var path = "match/";
var pathTicketByMatch = "ticket/matchId/";
const Single = () => {
  var id = null;
  id = localStorage.getItem("idClickTicket")
  console.log("test", id)

  const [isloading, setloading] = useState();
  const [clubHome, setClubHome] = useState([]);
  const [clubVisitor, setClubVisitor] = useState([]);
  const [stadium, setStadium] = useState([]);
  const [status, setStatus] = useState();
  const [timeStart, setTimeStart] = useState();



  if (id == null) {
    setloading(true)
  }
  useEffect(
    function () {
      //Load Match
      axios
        .get(path + id)
        .then(function (data) {
          console.log("test data ", data.data.status);
          setClubHome(data.data.clubHome);
          setClubVisitor(data.data.clubVisitor);
          setStadium(data.data.stadium);
          setStatus(data.data.status);
          setTimeStart(data.data.timeStart);
          setloading(false);
          // console.log(list);
        })
        .catch(function (err) {
          console.log(32, err);
        });
    },
    []
  );

  const [data, setData] = useState([]);

  const renderTicket = (<> <div className="top">
    <div className="left">
      <h1 className="title">Information</h1>
      <div className="item">
        {/* <img
src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
alt=""
className="itemImg"
/> */}
        <div className="details">
          <h1 className="itemTitle" name="clubHome"></h1>
          <h4 className="itemTitle">VS</h4>
          <h1 className="itemTitle">{clubVisitor.clubName}</h1>
          <div className="detailItem">
            <span className="itemKey">Time:</span>
            <span className="itemValue">{clubHome.clubName}</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Date:</span>
            <span className="itemValue">{timeStart}</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Stadium:</span>
            <span className="itemValue">
              {stadium.stadiumName}
            </span>
          </div>
        </div>
      </div>
    </div>

  </div><div className="bottom">
      <h1 className="title">List Ticket</h1>
      <ListTicket />
    </div>
  </>
  );

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        {isloading ? <LoadingSpinner /> : renderTicket}
      </div >
    </div >
  );
};

export default Single;