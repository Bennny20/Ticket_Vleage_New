import "./new.scss";
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
                    <h1>New match</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form>
                            <div className="formInput" >
                                <label>Home</label>
                                <select>
                                    <option value="CO2">Hò Chi Minh City</option>
                                    <option value="CO2">Ha Noi</option>
                                    <option value="CO2">Hoang Anh Gia Lai</option>
                                </select>
                            </div>

                            <div className="formInput" >
                                <label>Away</label>
                                <select>
                                    <option value="CO2">Hò Chi Minh City</option>
                                    <option value="CO2">Ha Noi</option>
                                    <option value="CO2">Hoang Anh Gia Lai</option>
                                </select>
                            </div>

                            <div className="formInput" >
                                <label>Stadium</label>
                                <select>
                                    <option value="CO2">Thong Nhat</option>
                                    <option value="CO2">Hang Day</option>
                                    <option value="CO2">Thien Truong</option>
                                </select>
                            </div>

                            <div className="formInput" >
                                <label>Date</label>
                                <input type="Date" placeholder="" />
                            </div>

                            <div className="formInput" >
                                <label>Quantity ticket</label>
                                <input type="text" placeholder="" value="300" />
                            </div>
                            <div className="formInput" >
                                <label>Status</label>
                                <select>
                                    <option value="CO1">Coming</option>
                                    <option value="CO2">Ending</option>
                                    <option value="CO2">On-going</option>
                                </select>
                            </div>

                            <div className="formInput" >
                                <label>Round</label>
                                <select>
                                    <option value="CO1">Round 1</option>
                                    <option value="CO2">Round 2</option>
                                    <option value="CO2">Round 3</option>
                                </select>
                            </div>

                            <div className="formInput" >
                                <label>Tournament</label>
                                <select>
                                    <option value="CO2">NIGHT WOLF V.LEAGUE 1 - 2022</option>
                                    <option value="CO2">LS V.League 1 - 2021</option>
                                    <option value="CO2">LS V.League 1- 2020</option>
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
