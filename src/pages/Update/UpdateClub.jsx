import "./update.scss";
import axios from "../../AxiosConfig";
import { useState, useEffect } from "react";
import { DriveFolderUploadOutlined } from "@mui/icons-material";


var path = "clubs/";
var pathStadium = "stadiums/";
const UpdateClub = (props) => {
    const [file, setFile] = useState("");
    const [info, setInfo] = useState({});
    const [stadiumId, setStadiumId] = useState();
    const [dataStadium, setDataStadium] = useState([]);
    const [logo, setLogo] = useState([]);
    const [clubId, setClubId] = useState();
    const [clubName, setClubName] = useState();

    useEffect(
        function () {
            //data club
            axios.get(path + "/" + props.props)
                .then(function (respone) {
                    console.log("data", respone.data);
                    setFormValue({
                        name: respone.data.name,
                        location: respone.data.location,
                    })
                    setStadiumId(respone.data.stadiumId)
                    setClubId(respone.data._id)
                    setLogo(respone.data.logo)
                })
                .catch(function (err) {
                    console.log(32, err);
                });

            //data stadium
            axios.get(pathStadium)
                .then(function (respone) {
                    console.log(respone.data);
                    setDataStadium(respone.data);
                })
                .catch(function (err) {
                    console.log(32, err);
                });
        },
        []
    );

    const [formValue, setFormValue] = useState({
        name: "",
        location: "",
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
        console.log("Test onchange :" + name + " - Value: " + value)
    };

    const { name, location } = formValue;



    // function handleSubmit(event) {
    //     event.preventDefault();
    //     const data = new FormData();
    //     data.append("file", file);
    //     data.append("upload_preset", "upload");
    //     //To do code here
    //     alert("Update Club : " + clubId + " - " + clubName + " - " + location + " - " + stadiumId + " - " + logo)
    //     axios.put(path + clubId, {
    //         "name": clubName,
    //         "location": location,
    //         "logo": logo,
    //         "stadiumId": stadiumId
    //     })
    //         .then(response => {
    //             alert("Updated")
    //             //Go to club page
    //             return window.location.href = "../club"
    //         })
    //         .catch(error => {
    //             alert(error)
    //             console.log(error);
    //         });
    // }

    const handleClick = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        try {
            if (file) {
                const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dlpfx0tnv/image/upload", data);
                const { url } = uploadRes.data;
                const updateClub = {
                    ...formValue,
                    stadiumId: stadiumId,
                    logo: url,
                };

                console.log("handle click", updateClub)
                axios.put("/clubs/" + clubId, updateClub)
                    .then(respone => {
                        alert("Update sucessfully", updateClub)
                        console.log(respone.data)
                    })

            } else {
                const updateClub = {
                    ...formValue,
                    stadiumId: stadiumId,
                };
                axios.put("/clubs/" + clubId, updateClub)
                    .then(respone => {
                        alert("Update sucessfully", updateClub)
                        console.log(respone.data)
                    })
            }

        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="update">
            <div className="newContainer">
                <div className="top">
                    <h1>Update club</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form onSubmit={handleClick}>
                            <div className="formInput" >
                                <label>Name</label>
                                <input id="txtNameClub" type="text"
                                    name="name" placeholder="Name of club"
                                    value={name}
                                    onChange={handleChange} required />
                            </div>

                            <div className="formInput" >
                                <label>Location</label>
                                <input id="txtLocation" type="text"
                                    name="location" placeholder="Location"
                                    value={location}
                                    onChange={handleChange}
                                    required />
                            </div>

                            {/* Stadium for club */}
                            <div className="formInput" >
                                <label>Stadium</label>
                                <select name="stadiumId"
                                    value={stadiumId}
                                    onChange={handleChange}>
                                    {dataStadium.map((entity) => (
                                        <option value={entity._id}
                                            id={entity._id}>{entity.name}</option>
                                    ))
                                    }
                                </select>
                            </div>

                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlined className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                                <input type="text" value={logo} />
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
