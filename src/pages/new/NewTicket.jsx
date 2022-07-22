import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "../../AxiosConfig"

var pathMatch = "match/";
var matchId = localStorage.getItem("idClickTicket");
var stadiumId = localStorage.getItem("idClickTicketStadium");
var pathArea = "area/stadiumId/"
var pathAdd = "ticket"
const New = () => {
  const [clubHome, setClubHome] = useState();
  const [clubVist, setClubVist] = useState();
  const [stadium, setStadium] = useState();
  const [time, setTime] = useState();
  useEffect(
    function () {
      console.log(13, matchId, stadiumId)
      //Get Data Match
      axios
        .get(pathMatch + matchId)
        .then(function (data) {
          console.log(data.data);
          // setData(data.data);
          setClubHome(data.data.clubHome.clubName)
          setClubVist(data.data.clubVisitor.clubName)
          setStadium(data.data.stadium.stadiumName)
          setTime(data.data.timeStart)
        })
        .catch(function (err) {
          console.log(32, err);
        });

      axios
        .get(pathArea + stadiumId)
        .then(function (data) {
          console.log(data.data);
          setData(data.data);
        })
        .catch(function (err) {
          console.log(32, err);
        });
    },
    []
  )

  const [formValue, setFormValue] = useState({
    idMatch: matchId,
    idArea: "",
    amount: "",
    price: ""
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { idMatch, idArea, amount, price } = formValue;
  function handleSubmit(event) {
    event.preventDefault();
    //To do code here
    alert("Add New Ticket : " + idMatch + "-" + idArea + "-" + amount + "-" + price)
    axios.post(pathAdd, {
      "amount": amount,
      "areaId": idArea,
      "matchId": idMatch,
      "price": price
    })
      .then(response => {
        alert("Add success")
        return window.location.href = "../ticket"
      })
      .catch(error => {
        alert(error)
        console.log(error);
      });
  }

  const [data, setData] = useState([])
  const form = (
    <div className="bottom">
      <div className="right">
        <form onSubmit={handleSubmit}>

          <div className="formInput" >
            <label>Match</label>
            <input type="text"
              value={clubHome + " - " + clubVist} disabled />
          </div>

          <div className="formInput" >
            <label> Date </label>
            <input type="text"
              value={time} disabled />
          </div>


          <div className="formInput" >
            <label> Stadium </label>
            <input type="text"
              value={stadium} disabled />
          </div>

          <div className="formInput" >
            <label> Area </label>
            <select name="idArea"
              onClick={handleChange}>
              {data.map((entity) => (
                <option value={entity.id} id={entity.id}>{entity.areaName}</option>
              ))}
            </select>
          </div>


          <div className="formInput" >
            <label>Amount</label>
            <input type="number"
              name="amount"
              onChange={handleChange} />
          </div>


          <div className="formInput" >
            <label>Price</label>
            <input type="number"
              name="price"
              onChange={handleChange} />
          </div>

          <div className="btnSend">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>New Ticket</h1>
        </div>
        {form}
      </div>
    </div>
  );
};

export default New;