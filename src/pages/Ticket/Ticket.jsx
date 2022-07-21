import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ListTicket from "../../components/table/ListTicket"
import { Link } from "react-router-dom";
import "./ticket.scss";
import { useEffect, useState } from "react";
import axios from "../../AxiosConfig";
import LoadingSpinner from "../LoadingWait/LoadingSpinner";

var path = "match/";
const Ticket = () => {
  var id = localStorage.getItem("idClickTicket");
  const [isloading, setloading] = useState(true);
  const [clubHome, setClubHome] = useState([]);
  const [clubVisitor, setClubVisitor] = useState([]);
  const [stadium, setStadium] = useState([]);
  const [timeStart, setTimeStart] = useState();

  //UseEffect here ---------------------------------------------------------------------------------------------
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
          setTimeStart(data.data.timeStart);
          setloading(false);
        })
        .catch(function (err) {
          console.log(32, err);
        });
    },
    []
  );
  //Form data tag ticket here ---------------------------------------------------------------------------------------------
  const renderTicket = (
    <><div className="top">
      <div className="left">
        <h1 className="title">Information</h1>
        <div>
          <Link to="/ticket/newTicket" className="link">
            Add New
          </Link>
        </div>
        <div className="item">
          <div className="details">
            <h1 className="itemTitle" name="clubHome">{clubHome.clubName}</h1>
            <h4 className="itemTitle">VS</h4>
            <h1 className="itemTitle" name="clubVisitor">{clubVisitor.clubName}</h1>
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
  //Render here ---------------------------------------------------------------------------------------------
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

export default Ticket;