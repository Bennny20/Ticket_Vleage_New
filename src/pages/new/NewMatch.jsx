import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";

//path
var pathClub = "club";
var pathStadium = "stadium?page=0&size=20&sort=id%2Cdesc";
var pathTournament = "tournament";
var pathRound = "round/tournamentId/";
var pathUpdate = "match";
const New = () => {
    //data--------------------------------------------------------
    const [dataTournament, setDataTournament] = useState([]);
    const [DataRound, setDataRound] = useState([]);
    const [dataClub, setDataClub] = useState([]);
    const [dataStadium, setDataStadium] = useState([]);
    const [formValue, setFormValue] = useState({
        clubHomeId: "",
        clubVisitorId: "",
        roundId: "",
        stadiumId: "",
        capacity: "",
        status: "",
        timeStart: ""
    });
    //useEffect
    useEffect(
        function () {
            //get data api Club
            axios.get(pathClub)
                .then(function (data) {
                    console.log(data.data.clubs);
                    setDataClub(data.data.clubs);
                    // console.log(list);
                })
                .catch(function (err) {
                    console.log(32, err);
                });

            //get data api Stadium
            axios.get(pathStadium)
                .then(function (data) {
                    console.log(data.data.stadiums);
                    setDataStadium(data.data.stadiums);
                    // console.log(list);
                })
                .catch(function (err) {
                    console.log(32, err);
                });
            //get data api Tournament
            axios
                .get(pathTournament)
                .then(function (data) {
                    console.log(18, data.data.tournaments);
                    setDataTournament(data.data.tournaments);
                    // console.log(list);
                })
                .catch(function (err) {
                    console.log(32, err);
                });
        },
        []
    );
    //handle Change Value--------------------------------------------------------------------------
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name == "tournamentId") {
            axios
                .get(pathRound + value)
                .then(function (data) {
                    console.log(data.data);
                    setDataRound(data.data);
                    // console.log(list);
                })
                .catch(function (err) {
                    console.log(32, err);
                });
        }
        setFormValue((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const { clubHomeId, clubVisitorId, roundId, stadiumId, selectStatus, timeStart, capacity } = formValue;
    //handle Change Search round by Tournament-----------------------------------------------------
    function handleSubmit(event) {
        event.preventDefault();
        //To do code here
        alert("Add New matchs: "
            + "\n -Club home: " + clubHomeId
            + "\n- club Away:" + clubVisitorId
            + "\n- club StadiumId:" + stadiumId
            + "\n- club RoundId:" + roundId
            + "\n- club Status:" + selectStatus
            + "\n- club Time Start:" + timeStart
            + "\n- club Quantity:" + capacity)
        axios.post(pathUpdate, {
            "clubHomeId": clubHomeId,
            "clubVisitorId": clubVisitorId,
            "roundId": roundId,
            "stadiumId": stadiumId,
            "capacity": capacity,
            "status": selectStatus,
            "timeStart": timeStart
        })
            .then(response => {
                alert("Add success")
                //Go to club page
                return window.location.href = "../match"
            })
            .catch(error => {
                alert(error)
                console.log(error);
            });

        //end to do code
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
                            {/* Club Home */}
                            <div className="formInput" >
                                <label>Home</label>
                                <select name="clubHomeId"
                                    onChange={handleChange}>
                                    {dataClub.map((entity) => (
                                        <option value={entity.id} id={entity.id}>{entity.clubName}</option>
                                    ))
                                    }
                                </select>
                            </div>

                            {/* Club Visitor */}
                            <div className="formInput" >
                                <label>Away</label>
                                <select name="clubVisitorId"
                                    onChange={handleChange}>
                                    {dataClub.map((entity) => (
                                        <option value={entity.id} id={entity.id}>{entity.clubName}</option>
                                    ))
                                    }
                                </select>
                            </div>

                            {/* Stadium for match */}
                            <div className="formInput" >
                                <label>Stadium</label>
                                <select name="stadiumId"
                                    onChange={handleChange}>
                                    {dataStadium.map((entity) => (
                                        <option value={entity.id} id={entity.id}>{entity.stadiumName}</option>
                                    ))
                                    }
                                </select>
                            </div>

                            {/* Date */}
                            <div className="formInput" >
                                <label>Date</label>
                                <input type="Date" placeholder=""
                                    name="timeStart"
                                    onChange={handleChange} />
                            </div>

                            {/* Quantity ticket */}
                            <div className="formInput" >
                                <label>Quantity ticket</label>
                                <input type="text" placeholder=""
                                    name="capacity"
                                    onChange={handleChange} />
                            </div>
                            <div className="formInput" >
                                <label>Status</label>
                                <select name="selectStatus"
                                    onChange={handleChange}>
                                    <option value="true">Coming</option>
                                    <option value="false">Ending</option>
                                    <option value="true">On-going</option>
                                </select>
                            </div>

                            {/* Tournament */}
                            <div className="formInput"
                                onChange={handleChange}>
                                <label>Tournament</label>
                                <select name="tournamentId"
                                    onChange={handleChange}>
                                    {dataTournament.map((entity) => (
                                        <option value={entity.id} id={entity.id}>{entity.tournamentName}</option>
                                    ))
                                    }
                                </select>
                            </div>

                            {/* Round */}
                            <div className="formInput" >
                                <label>Round</label>
                                <select name="roundId"
                                    onChange={handleChange}>
                                    {DataRound.map((entity) => (
                                        <option value={entity.id} id={entity.id}>{entity.roundName}</option>
                                    ))
                                    }
                                </select>
                            </div>


                            <div className="btnSend">
                                <button>Save</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;