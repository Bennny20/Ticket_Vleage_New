import "./match.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
    const [file, setFile] = useState("");

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Update club</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form>
                            <div className="formInput" >
                                <label>Tournament Name</label>
                                <input type="text" placeholder="V.League 1 - 2021" />
                            </div>

                            <div className="formInput" >
                                <label>Start Date</label>
                                <input type="Date" placeholder="" />
                            </div>

                            <div className="formInput" >
                                <label>End Date</label>
                                <input type="Date" placeholder="" />
                            </div>
                            <div className="formInput" >
                                <label>Status</label>
                                <select>
                                    <option value="CO1">Coming</option>
                                    <option value="CO2">Ending</option>
                                    <option value="CO2">On-going</option>
                                </select>
                            </div>
                        </form>
                        <div className="btnSend">
                            <button>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;
