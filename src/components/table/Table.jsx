import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from '@mui/material/TablePagination';
import { Link } from "react-router-dom";
import axios from "../../AxiosConfig";
import { useState } from "react";
import LoadingSpinner from "../../pages/LoadingWait/LoadingSpinner";
import { useEffect } from "react";
import { alignProperty } from "@mui/material/styles/cssUtils";

function List(props) {
  console.log(props)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isShow, setShow] = useState(true)

  //UseEffect here ----------------------------------------------------------------------
  useEffect(
    function () {
      if (props.props.length > 0) {
        setShow(false)
      }
    }
  )

  //Handle on click ticket here ----------------------------------------------------------------------
  const handleOnClick = (matchId, stadiumId) => {
    localStorage.setItem("idClickTicket", matchId)
    localStorage.setItem("idClickTicketStadium", stadiumId)
    console.log("Click ticket", matchId, stadiumId)
    return window.location.href = "/ticket"
  }

  //Handle on click status here ----------------------------------------------------------------------
  const handleStatus = (status) => {
    if (status == true) {
      return "On-Going";
    }
    return "Ending";
  }

  //Handle update here ----------------------------------------------------------------------
  const handleUpdate = (id) => {
    localStorage.setItem("editMatchId", JSON.stringify(id));
    return window.location.href = "../match/updateMatch"
  };

  //Handle delete here ----------------------------------------------------------------------
  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
    console.log(id);
    axios.delete("match/" + id)
      .then(res => {
        console.log("check delete ", res);
        alert('Deleted club by id: ' + id);

      })
      .catch(function (err) {
        console.log(err);
      });
  };

  //Form data here ----------------------------------------------------------------------
  const table = (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Home</TableCell>
            <TableCell className="tableCell">Away</TableCell>
            <TableCell className="tableCell">Stadium</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Capacity</TableCell>
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
                  <div className="cellWrapper">
                    {value.stadium.capacity}
                  </div>
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <span className={`status ${value.status}`}>{handleStatus(value.status)} </span>
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellAction">
                  <Link to="/match/updateMatch" style={{ textDecoration: "none" }}>
                    <div className="updateButton" onClick={e => (handleUpdate(value.id))}> Update</div>
                  </Link>
                  <Link to="" style={{ textDecoration: "none" }}>
                    <div className="ticketButton" onClick={() => (handleOnClick(value.id, value.stadiumId))}>Ticket</div>
                  </Link>
                </div>
              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>
    </TableContainer>
  )

  //Render here ----------------------------------------------------------------------
  return (
    <>
      {isShow ? <LoadingSpinner /> : table}
    </>
  );
};

export default List;