import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = () => {
    // const [formValue, setFormValue] = useState({
    //     idStadium: "",
    //     nameStadium: "",
    //     locationStadium: "",
    //     capcity: ""
    //   });
    
    //   //handle Change value
    //   const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormValue((prevState) => {
    //       return {
    //         ...prevState,
    //         [name]: value,
    //       };
    //     });
    //   };
    
    //   const { idStadium, nameStadium, locationStadium, capcity} = formValue;
    //   //function
    //   function handleSubmit(event) {
    //     event.preventDefault();
    //     //To do code here
    //     alert("Add New Round : " + idStadium + "-" + nameStadium + "-" + locationStadium + "-" + capcity)
    //     axios.post(path, {    
    //         "capacity": capcity,
    //         "location": locationStadium,
    //         "stadiumName": nameStadium  
    //     })
    //       .then(response => {
    //         alert("Add success")
    //         //Go to Stadium page
    //         return window.location.href = "../stadium"
    //       })
    //       .catch(error => {
    //         alert(error)
    //         console.log(error);
    //       });
    //     //end to do code
    //   }

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

                                {/* Selects Club Home */}
                                <select >
                                    <option value="CO2">Hò Chi Minh City</option>
                                    <option value="CO2">Ha Noi</option>
                                    <option value="CO2">Hoang Anh Gia Lai</option>
                                </select>
                            </div>

                            <div className="formInput" >
                                <label>Away</label>

                                {/* Select club Visitor */}
                                <select>
                                    <option value="CO2">Hò Chi Minh City</option>
                                    <option value="CO2">Ha Noi</option>
                                    <option value="CO2">Hoang Anh Gia Lai</option>
                                </select>
                            </div>

                            <div className="formInput" >
                                <label>Stadium</label>

                                {/* Selects Stadium */}
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
