import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const ListStadium = (props) => {
    console.log(props.props.data)
    const rows = [
        {
            id: "",
            orderID: "",
            account: "",
            ticket: "",
            date: "",
            quantity: "",
            total: "",
        }
    ];
    if(props.props.data){
        rows =  props.props.data
    }
    


    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">ID</TableCell>
                        <TableCell className="tableCell">OrderID</TableCell>
                        <TableCell className="tableCell">Account</TableCell>
                        <TableCell className="tableCell">Ticket</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Quantity</TableCell>
                        <TableCell className="tableCell">Price</TableCell>                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">{row.id}</TableCell>
                            <TableCell className="tableCell">{row.orderID}</TableCell>
                            <TableCell className="tableCell">{row.account}</TableCell>
                            <TableCell className="tableCell">{row.ticket}</TableCell>
                            <TableCell className="tableCell">{row.date}</TableCell>
                            <TableCell className="tableCell">{row.quantity}</TableCell>
                            <TableCell className="tableCell">{row.total}</TableCell>
                            {/* <TableCell className="tableCell">
                                <div className="cellAction">
                                    <Link to="/stadium/updateStadium" style={{ textDecoration: "none" }}>
                                        <div className="viewButton">Edit</div>
                                    </Link>
                                    <Link to="/users/test" style={{ textDecoration: "none" }}>
                                        <div className="deleteButton">Delete</div>
                                    </Link>
                                </div>
                            </TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ListStadium;