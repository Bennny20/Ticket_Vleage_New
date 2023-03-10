import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "../../AxiosConfig";

var path = "clubs/";
var pathStadium = "stadiums/";
const New = () => {
  const [dataStadium, setDataStadium] = useState([]);
  const [logo, setLogo] = useState([]);
  const [stadiumId, setStadiumId] = useState();
  const [clubName, setClubName] = useState();
  const [location, setLocation] = useState();

  useEffect(
    function () {
      //data stadium
      axios.get(pathStadium)
        .then(function (data) {
          console.log(data.data);
          setDataStadium(data.data);
        })
        .catch(function (err) {
          console.log(32, err);
        });
    },
    []
  );



  function handleSubmit(event) {
    event.preventDefault();
    //To do code here
    alert("Update Club : " + clubName + " - " + location + " - " + stadiumId + " - " + logo)
    axios.post(path, {
      "name": clubName,
      "location": location,
      "logo": logo,
      "stadiumId": stadiumId
    })
      .then(response => {
        alert("Created")
        return window.location.href = "../club"
      })
      .catch(error => {
        alert(error)
        console.log(error);
      });
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>New match</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput" >
                <label>Name</label>
                <input id="txtNameClub" type="text" name="name" placeholder="Name of club" value={clubName} onChange={e => setClubName(e.target.value)} required/>
              </div>

              <div className="formInput" >
                <label>Location</label>
                <input id="txtLocation" type="text" name="location" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} required/>
              </div>

              {/* Stadium for club */}
              <div className="formInput" >
                <label>Stadium</label>
                <select name="stadiumId"
                  value={stadiumId}
                  onChange={e => setStadiumId(e.target.value)}>
                  {dataStadium.map((entity) => (
                    <option value={entity._id} id={entity._id}>{entity.name}</option>
                  ))
                  }
                </select>
              </div>

              <div className="formInput" >
                <label>Logo</label>
                <input id="txtLogoUrl" type="text" name="logo" placeholder="Logo url" value={logo} onChange={e => setLogo(e.target.value)} required/>
              </div>


              <div className="btnSend">
                <button type="submit" >Save</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
