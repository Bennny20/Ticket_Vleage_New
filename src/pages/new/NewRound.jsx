import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";

const New = () => {
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
                                    <option value="CO2">NIGHT WOLF V.LEAGUE 1 - 2022</option>
                                    <option value="CO2">LS V.League 1 - 2021</option>
                                    <option value="CO2">LS V.League 1- 2020</option>
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
                                    <option value="CO1">Coming</option>
                                    <option value="CO2">Ending</option>
                                    <option value="CO2">On-going</option>
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
