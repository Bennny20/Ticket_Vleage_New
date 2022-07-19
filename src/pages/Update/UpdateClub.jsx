import "./update.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from "../../AxiosConfig";
import { useState, useEffect } from "react";


var path = "club";
const UpdateClub = (props) => {
    console.log(7, props)

    useEffect(
        function () {
            axios
                .get(path + "/" + props.props)
                .then(function (data) {
                    console.log("data", data.data);
                    setClubId(data.data.id)
                    setClubName(data.data.clubName)
                    setLogo(data.data.img)
                    setStadiumId(data.data.stadiumId)
                    setLocation(data.data.country)
                    // console.log(list);
                })
                .catch(function (err) {
                    console.log(32, err);
                });
        },
        []
    );

    const [logo, setLogo] = useState([]);
    const [clubId, setClubId] = useState();
    const [stadiumId, setStadiumId] = useState();
    const [clubName, setClubName] = useState();
    const [location, setLocation] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        //To do code here
        alert("Update Club : " + clubId + " - " + clubName + " - " + location + " - " + stadiumId + " - " + logo)
        axios.put(path, {
            "clubName": clubName,
            "country": location,
            "id": clubId,
            "img": logo,
            "stadiumId": stadiumId

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
            <div className="newContainer">
                <div className="top">
                    <h1>Update club</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                            <div className="formInput" >
                                <label>ID</label>
                                <input id="txtNameClub" type="text" name="id" placeholder="ID" value={clubId} readOnly />
                            </div>
                            <div className="formInput" >
                                <label>Name</label>
                                <input id="txtNameClub" type="text" name="name" placeholder="Name of club" value={clubName} onChange={e => setClubName(e.target.value)} />
                            </div>

                            <div className="formInput" >
                                <label>Location</label>
                                <input id="txtLocation" type="text" name="location" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
                            </div>

                            <div className="formInput" >
                                <label>Stadium</label>
                                <input id="txtStadium" type="text" name="stadium" placeholder="Stadium" value={stadiumId} onChange={e => setStadiumId(e.target.value)} />
                            </div>

                            <div className="formInput" >
                                <label>Logo</label>
                                <input id="txtLogoUrl" type="text" name="logo" placeholder="Logo url" value={logo} onChange={e => setLogo(e.target.value)} />
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
