import "./table.scss";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "../../AxiosConfig";
import LoadingSpinner from "../../pages/LoadingWait/LoadingSpinner";
import { ticketColumns } from "../../datatablesource";

var path = "ticket";
var matchId = localStorage.getItem("idClickTicket");
const ListStadium = () => {
    const [data, setData] = useState([]);

    useEffect(
        function () {
            axios
                .get(path + "/matchId/" + matchId)
                .then(function (data) {
                    console.log("check data ", data.data);
                    setData(data.data);
                    // console.log(list);
                })
                .catch(function (err) {
                    console.log(32, err);
                });
        },
        []
    );





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
                    rows={data}
                    columns={ticketColumns.concat(actionColumn)}
                    pageSize={8}
                    rowsPerPageOptions={[8]} />
            </div>
        </div>
    );
};

export default ListStadium;