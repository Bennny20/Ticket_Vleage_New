import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ListStadium = () => {
    const rows = [
        {
            id: "1",
            name: "Ho Chi Minh City FC",
            location: "Q10 TP HCM",
            stadium: "Thong Nhat Stadium ",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Ho_Chi_Minh_City_FC_logo.svg/360px-Ho_Chi_Minh_City_FC_logo.svg.png",
            status: "On-going",
        },
        {
            id: "2",
            name: "Quang Ninh FC",
            location: "TP Quang Ninh",
            stadium: "Cam Pha Stadium ",
            logo: "https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/360px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png",
            status: "Unavailable",
        },


    ];
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">ID</TableCell>
                        <TableCell className="tableCell">Name</TableCell>
                        <TableCell className="tableCell">Localtion</TableCell>
                        <TableCell className="tableCell">Stadium</TableCell>
                        <TableCell className="tableCell">Logo</TableCell>
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
                                {row.name}
                            </TableCell>
                            <TableCell className="tableCell">{row.location}</TableCell>
                            <TableCell className="tableCell">{row.stadium}</TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img src={row.logo} alt="" className="image" />
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ListStadium;