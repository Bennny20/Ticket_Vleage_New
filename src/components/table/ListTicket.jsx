import "./table.scss";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "../../AxiosConfig";
import LoadingSpinner from "../../pages/LoadingWait/LoadingSpinner";
import { ticketColumns } from "../../datatablesource";

const ListStadium = (props) => {

    const [isShow, setisShow] = useState(true);

    setisShow(false);
    const rows = [
        {
            id: "1",
            orderID: "ID3009",
            account: "LongP",
            ticket: "A3",
            date: "30-09-2022",
            quantity: "100",
            total: "200$",
        },
        {
            id: "2",
            orderID: "ID3009",
            account: "LongP",
            ticket: "A3",
            date: "30-09-2022",
            quantity: "100",
            total: "200$",
        }
    ];


    const actionColumn = [
        {
            field: "action",
            headerName: "",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <div className="viewButton">
                            Update
                        </div>
                        <div className="deleteButton">
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];


    return (
        //new code
        <div className="datatable">
            <div className="datatableTitle">
                <DataGrid
                    className="datagrid"
                    rows={rows}
                    columns={ticketColumns.concat(actionColumn)}
                    pageSize={8}
                    rowsPerPageOptions={[8]} />
            </div>
        </div>
    );
};

export default ListStadium;