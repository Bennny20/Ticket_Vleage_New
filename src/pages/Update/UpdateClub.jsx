import "./update.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from "../../AxiosConfig";
import { useState } from "react";


var path = "club";
const UpdateClub = () => {

    const [formValue, setFormValue] = useState({
        name: "",
        location: "",
        stadium: "",
        logo: ""
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

    const { name, location, stadium, logo } = formValue;

    function handleSubmit(event) {
        event.preventDefault();
        //To do code here
        alert("Update Club : " + name + "-" + location + "-" + stadium + "-" + logo)
        axios.put(path, {
            "clubName": name,
            "country": location,
            "id": 18,
            "img": logo,
            "stadiumId": stadium

        })
            .then(response => {
                alert("Updated")
                //Go to club page
                return window.location.href = "../club"
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
                    <h1>Update club</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                            <div className="formInput" >
                                <label>ID</label>
                                <input id="txtNameClub" type="text" name="id" placeholder="ID" onChange={handleChange} />
                            </div>
                            <div className="formInput" >
                                <label>Name</label>
                                <input id="txtNameClub" type="text" name="name" placeholder="Name of club" onChange={handleChange} />
                            </div>

                            <div className="formInput" >
                                <label>Location</label>
                                <input id="txtLocation" type="text" name="location" placeholder="Location" onChange={handleChange} />
                            </div>

                            <div className="formInput" >
                                <label>Stadium</label>
                                <input id="txtStadium" type="text" name="stadium" placeholder="Stadium" onChange={handleChange} />
                            </div>

                            <div className="formInput" >
                                <label>Logo</label>
                                <input id="txtLogoUrl" type="text" name="logo" placeholder="Logo url" onChange={handleChange} />
                            </div>
                            <div className="formInput" >
                                <label>Status</label>
                                <select id="FormSelectStatus">
                                    <option value="CO2">Unavailable</option>
                                    <option value="CO2">On-going</option>
                                </select>
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

export default UpdateClub;
