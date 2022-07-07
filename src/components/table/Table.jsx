import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const List = () => {
  const rows = [
    {
      home: "Ho Chi Minh City FC",
      imgHome: "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Ho_Chi_Minh_City_FC_logo.svg/360px-Ho_Chi_Minh_City_FC_logo.svg.png",
      away: "Hoang Anh Gia Lai",
      imgAway: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Hoang_Anh_Gia_Lai_FC_logo.svg/300px-Hoang_Anh_Gia_Lai_FC_logo.svg.png",
      stadium: "Thong Nhat",
      date: "1 March",
      ticket: "400/500",
      status: "Coming",
    },
    {
      home: "Ho Chi Minh City FC",
      imgHome: "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Ho_Chi_Minh_City_FC_logo.svg/360px-Ho_Chi_Minh_City_FC_logo.svg.png",
      away: "Hoang Anh Gia Lai",
      imgAway: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Hoang_Anh_Gia_Lai_FC_logo.svg/300px-Hoang_Anh_Gia_Lai_FC_logo.svg.png",
      stadium: "Thong Nhat",
      date: "1 March",
      ticket: "400/500",
      status: "Ending",
    },
    {
      home: "Ho Chi Minh City FC",
      imgHome: "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Ho_Chi_Minh_City_FC_logo.svg/360px-Ho_Chi_Minh_City_FC_logo.svg.png",
      away: "Hoang Anh Gia Lai",
      imgAway: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Hoang_Anh_Gia_Lai_FC_logo.svg/300px-Hoang_Anh_Gia_Lai_FC_logo.svg.png",
      stadium: "Thong Nhat",
      date: "1 March",
      ticket: "400/500",
      status: "On-going",
    },


  ];
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.imgHome} alt="" className="image" />
                  {row.home}
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.imgAway} alt="" className="image" />
                  {row.away}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.stadium}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">
                <div className="cellAction">
                  <Link to="/ticket" style={{ textDecoration: "none" }}>
                    <div className="ticketButton">{row.ticket}</div>
                  </Link>
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
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
