import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useState } from "react";


function List(props) {
  console.log(props)

  const handleOnClick = (id) => {
      localStorage.setItem("idClickTicket", id)
      if(localStorage.getItem("idClickTicket") != 0){
        console.log("Local store " + id)
        // return window.location.href = "/ticket"
      }
     
  }


  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Home</TableCell>
            <TableCell className="tableCell">Away</TableCell>
            <TableCell className="tableCell">Stadium</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Ticket</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.props.map((value) => (
            <TableRow key={value.id}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={value.clubHome.img} alt="" className="image" />
                  {value.clubHome.clubName}
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={value.clubVisitor.img} alt="" className="image" />
                  {value.clubVisitor.clubName}
                </div>
              </TableCell>
              <TableCell className="tableCell">{value.stadium.stadiumName}</TableCell>
              <TableCell className="tableCell">{value.timeStart}</TableCell>
              <TableCell className="tableCell">
                <div className="cellAction">
                  {/* <Link to="/ticket" style={{ textDecoration: "none" }}> */}
                    <div className="ticketButton" onClick={() =>handleOnClick(value.id)}>
                    {value.stadium.capacity}
                    </div>
                
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <span className={`status ${value.status}`}>{value.status} On-going</span>
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellAction">
                  <Link to="/match/updateMatch" style={{ textDecoration: "none" }}>
                    <div className="viewButton">Edit</div>
                  </Link>
                  <Link to="" style={{ textDecoration: "none" }}>
                    <div className="deleteButton">delete</div>
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

export default List;
