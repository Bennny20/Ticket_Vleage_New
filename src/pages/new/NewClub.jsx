import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "../../AxiosConfig";

var path = "clubs/";
var pathStadium = "stadiums/";
const New = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    location: "",
    stadiumId: "",
    logo: ""
  });
  const { name, location, stadiumId, logo } = formValue;
  const [data, setData] = useState([]);
  //UseEffect here-----------------------------------------------------------------------------
  useEffect(
    function () {
      axios
        .get(pathStadium)
        .then(function (data) {
          console.log(data.data);
          setData(data.data);
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
    alert("Add New Club : " + name + "-" + location + "-" + stadiumId + "-" + logo)
    axios.post(path, {
      "name": name,
      "location": location,
      "img": logo,
      "stadiumId": stadiumId
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
                  name="location"
                  onChange={handleChange}
                />
              </div>

              {/* Stadium */}
              <div className="formInput" >
                <label>Stadium</label>
                <select type="text"
                  name="stadiumId"
                  onClick={handleChange}>
                  {data.map((value) => (
                    <option value={value._id} key={value._id}>{value.name}</option>
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
