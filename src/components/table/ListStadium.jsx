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
            name: "Thong Nhat Stadium",
            location: "Q10 TP HCM",
            capcity: "Ho Chi Minh City FC",
            status: "On-going",
        },
        {
            id: "2",
            name: "Thien Truong Stadium",
            location: "TP Nam Dinh",
            capcity: "Nam Dinh Club",
            status: "Update",
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
                                {row.name}
                            </TableCell>
                            <TableCell className="tableCell">{row.location}</TableCell>
                            <TableCell className="tableCell">{row.capcity}</TableCell>
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