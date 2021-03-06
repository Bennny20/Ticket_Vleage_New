import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";
import LoadingSpinner from "../../pages/LoadingWait/LoadingSpinner";

var path = "order/all?page=0&size=100&sort=id%2Cdesc";
const Datatable = () => {
  const [data, setData] = useState([]);
  const [isShow, setShow] = useState(true)
  //UseEffect here ------------------------------------------------------------------------------
  useEffect(
    function () {
      axios.get(path)
        .then(function (data) {
          console.log(data.data);
          setData(data.data.orderList);
          setShow(false)
        })
        .catch(function (err) {
          console.log(32, err);
        });
    },
    []
  );

  // Form table data ------------------------------------------------------------------------------
  const render = (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID.</TableCell>
            <TableCell className="tableCell">Last Name</TableCell>
            <TableCell className="tableCell">First Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Ticket Type</TableCell>
            <TableCell className="tableCell">Quantity</TableCell>
            <TableCell className="tableCell">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((value) => (
            <TableRow key={value.id}>
              <TableCell className="tableCell">{value.id}</TableCell>
              <TableCell className="tableCell">{value.account.firstname}</TableCell>
              <TableCell className="tableCell">{value.account.lastname}</TableCell>
              <TableCell className="tableCell">{value.account.username}</TableCell>
              <TableCell className="tableCell">{value.orderDate}</TableCell>
              <TableCell className="tableCell">{value.orderDetails.map((value) => value.ticket.area.areaName + "/")}</TableCell>
              <TableCell className="tableCell">{value.orderDetails.map((value) => value.quantity + "/")}</TableCell>
              <TableCell className="tableCell">{value.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  //Render here--------------------------------------------------------------------
  return (
    <><div className="datatable">
      <div className="datatableTitle">
        List Order
      </div>
      {isShow ? <div className="spinner"><LoadingSpinner /></div> : render}
    </div>
    </>
  );
};

export default Datatable;