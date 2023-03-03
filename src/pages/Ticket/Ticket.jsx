import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ListTicket from "../../components/table/ListTicket"
import { Link } from "react-router-dom";
import "./ticket.scss";
import { useEffect, useState } from "react";
import axios from "../../AxiosConfig";
import LoadingSpinner from "../LoadingWait/LoadingSpinner";
import Chart from "../../components/chart/Chart";

var path = "match/ticketTypes/";
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
          console.log("test data ", data.data);
          // setClubHome(data.data.clubHome);
          // setClubVisitor(data.data.clubVisitor);
          // setStadium(data.data.stadium);
          // setTimeStart(data.data.timeStart);
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
    <>
      <div className="single">
        <div className="singleContainer">
          <div className="top">
            <div className="left">
              <h1 className="title">Home Club</h1>
              <div className="itemImg">
                <img src={clubHome.img} />
              </div>
              <div className="item">
                <div className="details">
                  <h1 className="itemTitle" name="clubHome">{clubHome.clubName}</h1>
                </div>
              </div>
            </div>
            <div className="right">
              <h1 className="title">Visitor Club</h1>
              <img
                src={clubVisitor.img}
                alt=""
                className="itemImg"
              />
              <h1 className="itemTitle" name="clubVisitor">{clubVisitor.clubName}</h1>

            </div>
          </div>
          <div className="top">
            <div className="left">
              <div className="detailItem">
                <span className="itemKey">Stadium: </span>
                <span className="itemValue">
                  {stadium.stadiumName}
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Date: </span>
                <span className="itemValue">{timeStart}</span>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="left">
              <Link to="/ticket/newTicket" className="link">
                <button className="editButton">
                  Add New
                </button>
              </Link>
            </div>
            <h1 className="title">List Ticket</h1>
            <ListTicket />
          </div>
        </div>
      </div>

      <div className="single">
        <div className="singleContainer">
          <Navbar />
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt=""
                  className="itemImg"
                />
                <div className="details">
                  <h1 className="itemTitle">Jane Doe</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">janedoe@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+1 2345 67 89</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">
                      Elton St. 234 Garden Yd. NewYork
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">USA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">Last Transactions</h1>
          </div>
        </div>
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