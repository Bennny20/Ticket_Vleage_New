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
import axios from "../../AxiosConfig";



function List() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  var path = "match";

  //load data page list match
  useEffect(() =>{
      axios
        .get(path)
        .then(function (data) {
          console.log(28, data.data.matches);
          setData(data.data.matches);
        })
        .catch(function (err) {
          console.log(32, err);
        });
    },
    [count]
  );

  
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
          {data.map((value, index) => (
            <TableRow key={index}>
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
                  <Link to="/ticket" style={{ textDecoration: "none" }}>
                    <div className="ticketButton">{value.stadium.capacity}</div>
                  </Link>
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

export default List;
