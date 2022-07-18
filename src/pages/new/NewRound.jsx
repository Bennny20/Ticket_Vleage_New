import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";


var pathTournament = "tournament";
var pathRound = "round";
const New = () => {
    //Tournament list
    useEffect(
        function getTournament() {
            axios
                .get(pathTournament)
                .then(function (data) {
                    console.log(data.data.tournaments);
                    setData(data.data.tournaments);
                    // console.log(list);
                })
                .catch(function (err) {
                    console.log(32, err);
                });
        },
        []
    );
    const [data, setData] = useState([]);
    const rowsTournament = data;

    //State Round
    const [formValue, setFormValue] = useState({
        roundname: "",
        startDate: "",
        endDate: "",
        selectsTournament: "",
        selectsStatus: ""
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

    const { roundname, startDate, endDate, selectsTournament, selectsStatus } = formValue;
    //function
    function handleSubmit(event) {
        event.preventDefault();
        //To do code here
        alert("Add New Round : " + roundname + "-" + startDate + "-" + endDate + "-" + selectsTournament + "-" + selectsStatus)
        axios.post(pathRound, {
            "endDate": endDate,
            "roundName": roundname,
            "startDate": startDate,
            "status": selectsStatus,
            "tournamentId": selectsTournament
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
                    <h1>New Round</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form onSubmit={handleSubmit}>

                            {/* Round name */}
                            <div className="formInput" >
                                <label>Round name</label>
                                <input type="text"
                                    name="roundname"
                                    onChange={handleChange}
                                    placeholder="EX:Round 1" />
                            </div>

                            {/* Tournament */}
                            <div className="formInput" >
                                <label>Tournament</label>
                                <select name="selectsTournament"
                                    onChange={handleChange}>
                                    {rowsTournament.map((entity) => (
                                        <option key={entity.id}>{entity.tournamentName}</option>
                                    ))
                                    }
                                </select>
                            </div>

                            {/* Start Date */}
                            <div className="formInput" >
                                <label>Start Date</label>
                                <input type="Date"
                                    name="startDate"
                                    onChange={handleChange}
                                />
                            </div>


                            {/* End Date */}
                            <div className="formInput" >
                                <label>End Date</label>
                                <input type="Date"
                                    name="endDate"
                                    onChange={handleChange}
                                    placeholder="" />
                            </div>


                            {/* Status */}
                            <div className="formInput" >
                                <label>Status</label>
                                <select name="selectsStatus"
                                    onChange={handleChange}>
                                    <option value="true">Coming</option>
                                    <option value="false">Ending</option>
                                    <option value="true">On-going</option>
                                </select>
                            </div>

                            {/* Button Send to add new */}
                            <div className="btnSend">
                                <button>Save Round</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;
