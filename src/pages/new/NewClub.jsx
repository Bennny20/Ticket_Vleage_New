import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "../../AxiosConfig";

var path = "club";
var pathStadium = "stadium?page=0&size=20&sort=id%2Cdesc";
const New = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    locationClub: "",
    stadium: "",
    logo: ""
  });
  const { name, locationClub, stadium, logo } = formValue;
  const [data, setData] = useState([]);
  //UseEffect here-----------------------------------------------------------------------------
  useEffect(
    function () {
      axios
        .get(pathStadium)
        .then(function (data) {
          console.log(data.data);
          setData(data.data.stadiums);
        })
        .catch(function (err) {
          console.log(32, err);
        });
    },
    []
  );
  //handle Change value here-----------------------------------------------------------------------------
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  //Handle Submit here--------------------------------------------------------------------------------------
  function handleSubmit(event) {
    event.preventDefault();
    //To do code here
    alert("Add New Club : " + name + "-" + locationClub + "-" + stadium + "-" + logo)
    axios.post(path, {
      "clubName": name,
      "country": locationClub,
      "img": logo,
      "stadiumId": stadium
    })
      .then(response => {
        alert("Add success")
        return window.location.href = "../club"
      })
      .catch(error => {
        alert(error)
        console.log(error);
      });
  }

  //render
  //Add onSubmit in tag form
  //Add onChange={handleChange}
  //HandleChange lấy value theo name của thuộc tính trong state
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>New club</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              {/* Name of club */}
              <div className="formInput" >
                <label>Name of club</label>
                <input type="text"
                  name="name"
                  onChange={handleChange}
                />
              </div>

              {/* Location of club */}
              <div className="formInput" >
                <label>Location of club</label>
                <input type="text"
                  name="locationClub"
                  onChange={handleChange}
                />
              </div>

              {/* Stadium */}
              <div className="formInput" >
                <label>Stadium</label>
                <select type="text"
                  name="stadium"
                  onClick={handleChange}>
                  {data.map((value) => (
                    <option value={value.id} key={value.id}>{value.stadiumName}</option>
                  ))}
                </select>
              </div>

              {/* Logo */}
              <div className="formInput" >
                <label>Logo</label>
                <input type="text"
                  name="logo"
                  onChange={handleChange}
                />
              </div>

              {/* Button Send to Add new */}
              <div className="btnSend">
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
