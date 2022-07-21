import "./table.scss";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import axios from "../../AxiosConfig";
import LoadingSpinner from "../../pages/LoadingWait/LoadingSpinner";

var path = "ticket";
var matchId = localStorage.getItem("idClickTicket");
const ListStadium = (props) => {
    const [data, setData] = useState([]);




    useEffect(
        function () {
            axios
                .get(path + "/matchId/" + matchId)
                .then(function (data) {
                    console.log("check data ", data.data);
                    setData(data.data);
                    // console.log(list);
                })
                .catch(function (err) {
                    console.log(32, err);
                });
        },
        []
    );

    console.log("test", data)

    const handleUpdate = (id) => {
        localStorage.setItem("editTicketId", JSON.stringify(id));
        return window.location.href = "../ticket/updateTicket"
    };


    const handleSoldOut = (id, areaId, areaName, capacity, stadiumId, matchId, price) => {
        alert("Update amount = 0: ")
        console.log("id checking ", id);
        console.log("check", areaId + " " + areaName + " " + capacity + " " + stadiumId + " " + matchId + " " + price)
        axios.put(path + "/" + id, {
            "amount": 0,
            "area": {
                "areaName": areaName,
                "capacity": capacity,
                "id": areaId,
                "stadiumId": stadiumId
            },
            "areaId": areaId,
            "id": id,
            "matchId": matchId,
            "price": price
        })
    }

    return (
        //new code
        <div className="datatable">
            <div className="datatableTitle"><TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableCell">Ticket ID</TableCell>
                            <TableCell className="tableCell">Area</TableCell>
                            <TableCell className="tableCell">Stadium ID</TableCell>
                            <TableCell className="tableCell">Match ID</TableCell>
                            <TableCell className="tableCell">Amount</TableCell>
                            <TableCell className="tableCell">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((value) => (
                            <TableRow key={value.id}>
                                <TableCell className="tableCell">
                                    <div className="cellWrapper">
                                        {value.id}
                                    </div>
                                </TableCell>
                                <TableCell className="tableCell">
                                    <div className="cellWrapper">
                                        {value.area.areaName}
                                    </div>
                                </TableCell>
                                <TableCell className="tableCell">
                                    <div className="cellAction">
                                        <div className="cellWrapper">
                                            {value.area.stadiumId}
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell className="tableCell">
                                    <div className="cellAction">
                                        <div className="cellWrapper">
                                            {value.matchId}
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell className="tableCell">
                                    <div className="cellAction">
                                        <div className="cellWrapper">
                                            {value.amount}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="tableCell">
                                    <div className="cellAction">
                                        <div className="cellWrapper">
                                            {value.price}VND
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="tableCell">
                                    <div className="cellAction">
                                        <Link to="" style={{ textDecoration: "none" }}>
                                            <div className="viewButton" onClick={e => (handleUpdate(value.id))} > Update</div>
                                        </Link>
                                        <Link to="" style={{ textDecoration: "none" }}>
                                            <div className="deleteButton" onClick={e => handleSoldOut(
                                                value.id,
                                                value.areaId,
                                                value.area.areaName,
                                                value.area.capacity,
                                                value.area.stadiumId,
                                                value.matchId,
                                                value.price
                                            )} >Sold Out</div>
                                        </Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </div>
    );
};

export default ListStadium;