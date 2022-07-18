import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "../../AxiosConfig";

var pathTournament = "tournament";
const New = () => {
    const [formValue, setFormValue] = useState({
        tournamentname: "",
        startDate: "",
        endDate: "",
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

    const { tournamentname, startDate, endDate, selectsStatus } = formValue;
    //function
    function handleSubmit(event) {
        event.preventDefault();
        //To do code here
        alert("Add New Tournament : " + tournamentname + "-" + startDate + "-" + endDate + "-" + selectsStatus)
        axios.post(pathTournament, {
            "endDate": endDate,
            "startDate": startDate,
            "status": selectsStatus,
            "tournamentName": tournamentname
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
                    <h1>New tournament</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form onSubmit={handleSubmit}>

                            {/* Tournament Name */}
                            <div className="formInput" >
                                <label>Tournament Name</label>
                                <input type="text"
                                name="tournamentname"
                                onChange={handleChange}
                                 placeholder="V.League 1 - 2021" />
                            </div>

                            {/* Start Date */}
                            <div className="formInput" >
                                <label>Start Date</label>
                                <input type="Date"
                                name="startDate"
                                onChange={handleChange}
                                 placeholder="" />
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
