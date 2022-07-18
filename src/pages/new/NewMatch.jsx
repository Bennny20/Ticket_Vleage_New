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


    const rowsTournament = [
        {
            id: "1",
            name: "NIGHT WOLF V.LEAGUE 1 - 2022"
        },
        {
            id: "2",
            name: "LS V.League 1 - 2021"
        },
        {
            id: "3",
            name: "LS V.League 1 - 2020"
        },
        {
            id: "4",
            name: "LS V.League 1 - 2019"
        }
    ];


    const rowsRound = [
        {
            id: "1",
            name: "Round 1"
        },
        {
            id: "2",
            name: "Round 2"
        },
        {
            id: "3",
            name: "Round 3"
        }
    ];


    const rowsClubHome = [
        {
            id: "1",
            name: "Ha Noi"
        },
        {
            id: "2",
            name: "Ho Chi Minh City"
        },
        {
            id: "3",
            name: "Hoang ANh Gia Lai"
        }
    ];


    const rowsClubAways = [
        {
            id: "1",
            name: "Ha Noi"
        },
        {
            id: "2",
            name: "Ho Chi Minh City"
        },
        {
            id: "3",
            name: "Hoang ANh Gia Lai"
        }
    ];

    const rowsStadium = [
        {
            id: "1",
            name: "Thong Nhat"
        },
        {
            id: "2",
            name: "Cam Pha"
        },
        {
            id: "3",
            name: "Lach Tray"
        }
    ];

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
<<<<<<< HEAD
                                <select>
                                    {rowsClubHome.map((entity) => (
                                        <option id="{entity.id}">{entity.name}</option>
                                    ))
                                    }
=======

                                {/* Selects Club Home */}
                                <select >
                                    <option value="CO2">Hò Chi Minh City</option>
                                    <option value="CO2">Ha Noi</option>
                                    <option value="CO2">Hoang Anh Gia Lai</option>
>>>>>>> fb24add9c1ac20d5538fd04fd14cd304c732a683
                                </select>
                            </div>

                            <div className="formInput" >
                                <label>Away</label>

                                {/* Select club Visitor */}
                                <select>
                                    {rowsClubAways.map((entity) => (
                                        <option id="{entity.id}">{entity.name}</option>
                                    ))
                                    }
                                </select>
                            </div>

                            <div className="formInput" >
                                <label>Stadium</label>

                                {/* Selects Stadium */}
                                <select>
                                    {rowsStadium.map((entity) => (
                                        <option id="{entity.id}">{entity.name}</option>
                                    ))
                                    }
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
                                    {rowsRound.map((entity) => (
                                        <option id={entity.id}>{entity.name}</option>
                                    ))
                                    }
                                </select>
                            </div>

                            <div className="formInput" >
                                <label>Tournament</label>
                                <select>
                                    {rowsTournament.map((entity) => (
                                        <option id="{entity.id}">{entity.name}</option>
                                    ))
                                    }
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
