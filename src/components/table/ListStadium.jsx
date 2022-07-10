import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../AxiosConfig";

var path = "stadium";
const ListStadium = () => {
    //load data
    useEffect(
        function () {
            axios
                .get(path)
                .then(function (data) {
                    console.log(data.data.stadiums);
                    setData(data.data.stadiums);
                    // console.log(list);
                })
                .catch(function (err) {
                    console.log(32, err);
                });
        },
        []
    );
    const [data, setData] = useState([]);
    const rows =  data ;
    // {
    //     id: "1",
    //     name: "Thong Nhat Stadium",
    //     location: "Q10 TP HCM",
    //     capcity: "Ho Chi Minh City FC",
    //     status: "On-going",
    // },
    // {
    //     id: "2",
    //     name: "Thien Truong Stadium",
    //     location: "TP Nam Dinh",
    //     capcity: "Nam Dinh Club",
    //     status: "Update",
    // },


    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">ID</TableCell>
                        <TableCell className="tableCell">Name</TableCell>
                        <TableCell className="tableCell">Localtion</TableCell>
                        <TableCell className="tableCell">Capacity</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                        <TableCell className="tableCell"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">
                                {row.id}
                            </TableCell>
                            <TableCell className="tableCell">
                                {row.stadiumName}
                            </TableCell>
                            <TableCell className="tableCell">{row.location}</TableCell>
                            <TableCell className="tableCell">{row.capacity}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                            <TableCell className="tableCell">
                                <div className="cellAction">
                                    <Link to="/stadium/updateStadium" style={{ textDecoration: "none" }}>
                                        <div className="viewButton">Edit</div>
                                    </Link>
                                    <Link to="/users/test" style={{ textDecoration: "none" }}>
                                        <div className="deleteButton">Delete</div>
                                    </Link>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
         </TableContainer>     
    );
};

export default ListStadium;