import "./update.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";

var ticketId = JSON.parse(localStorage.getItem("editTicketId"));
var pathUpdate = "ticket";
const UpdateTicket = () => {


    console.log("Edit Ticket ID", ticketId)
    //data--------------------------------------------------------

    const [amount, setAmount] = useState();
    const [price, setPrice] = useState();
    const [area, setArea] = useState([]);

    //useEffect
    useEffect(
        function () {
            //get data match by id
            axios.get(pathUpdate + "/" + ticketId)
                .then(function (data) {
                    console.log("Test search ticket by id", data.data);
                    setAmount(data.data.amount);
                    setPrice(data.data.price);
                    setArea(data.data.area);
                })
                .catch(function (err) {
                    console.log(32, err);
                });
        },
        []
    );
    //check data logs
    console.log("================================");
    console.log("Ticket ID :", ticketId);
    console.log("Amount onchange :", amount);
    console.log("Price onchange :", price);


    //handle Change Search round by Tournament-----------------------------------------------------
    function handleSubmit(event) {
        event.preventDefault();
        //To do code here
        alert("Update matchs: ")
        axios.put(pathUpdate, {
            "amount": "",
            "area": {
                "areaName": "",
                "capacity": "",
                "id": "",
                "stadiumId": ""
            },
            "areaId": "",
            "id": "",
            "matchId": "",
            "price": ""

        })
            .then(response => {
                alert("Success")
                //Go to club page
            })
            .catch(error => {
                alert(error)
                console.log(error);
            });

        //end to do code
    }

    return (
        <div className="update">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Update Ticket</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form onSubmit={e => (handleSubmit)}>
                            {/* Club Home */}
                            <div className="formInput" >
                                <label>Ticket ID</label>
                                <input type="text" value={ticketId} disabled />
                            </div>

                            <div className="formInput" >
                                <label> Area </label>
                                <input type="text" value={area.areaName} disabled />
                            </div>

                            {/* Club Visitor */}
                            <div className="formInput" >
                                <label>Amount</label>
                                <input type="number" value={amount} onChange={e => setAmount(e.target.value)} maxLength={area.capacity} />
                            </div>

                            {/* Stadium for match */}
                            <div className="formInput" >
                                <label>Price</label>
                                <input type="number" value={price} />
                            </div>

                            <div className="btnSend">
                                <button type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateTicket;
