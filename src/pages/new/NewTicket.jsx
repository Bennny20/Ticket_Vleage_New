import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "../../AxiosConfig"

var pathMatch = "match?page=0&size=100&sort=id%2Cdesc";
const New = () => {
  useEffect(
    function () {
      //Get Data Match
      axios
        .get(pathMatch)
        .then(function (data) {
          console.log(data.data.matches);
          setData(data.data.matches);
          // console.log(list);
        })
        .catch(function (err) {
          console.log(32, err);
        });
    },
    []
  )

  const [data, setData] = useState([])
  const form = (
    <div className="bottom">
      <div className="right">
        <form>
          {/* Club Home */}
          <div className="formInput" >
            <label>Match</label>
            <select>
              {data.map((value) => (
                <option>{value.clubHome.clubName} - {value.clubVisitor.clubName}  |  {value.timeStart} </option>
              ))}
            </select>
          </div>

          <div className="formInput" >
            <label> Area </label>
            <select>
              {data.map((value) => (
                <option>{value.clubHome.clubName} - {value.clubVisitor.clubName}  |  {value.timeStart} </option>
              ))}
            </select>
          </div>

          {/* Club Visitor */}
          <div className="formInput" >
            <label>Amount</label>
            <input type="number" />
          </div>

          {/* Stadium for match */}
          <div className="formInput" >
            <label>Price</label>
            <input type="number" />
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
        {/* Note here : - */}
      </div>
    </div>
  );
};

export default New;