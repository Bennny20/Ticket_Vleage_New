import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "../../AxiosConfig";

var path = "club";
const New = () => {

  const [formValue, setFormValue] = useState({
    name: "",
    location: "",
    stadium: "",
    logo: ""
  });

  //handle Change value
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { name, location, stadium, logo } = formValue;
  //function
  function handleSubmit(event) {
    event.preventDefault();
    //To do code here
    alert("Add New Club : " + name + "-" + location + "-" + stadium + "-" + logo)
    axios.post(path, {
      "clubName": name,
      "country": location,
      "img": logo,
      "stadiumId": stadium
    })
      .then(response => {
        alert("Add success")
      })
      .catch(error => {
        alert(error)
        console.log(error);
      });
  }

  //render
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
              <div className="formInput" >
                <label>Name of club</label>
                <input type="text"
                  name="name"
                  onChange={handleChange}
                />
              </div>

              <div className="formInput" >
                <label>Location of club</label>
                <input type="text"
                  name="location"
                  onChange={handleChange}
                />
              </div>

              <div className="formInput" >
                <label>Stadium</label>
                <input type="text"
                  name="stadium"
                  onChange={handleChange}
                />
              </div>

              <div className="formInput" >
                <label>Logo</label>
                <input type="text"
                  name="logo"
                  onChange={handleChange}
                />
              </div>
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
