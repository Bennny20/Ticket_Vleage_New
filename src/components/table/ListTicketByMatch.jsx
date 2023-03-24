import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { ticketColumns } from "../../datatablesource";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";
import LoadingSpinner from "../../pages/LoadingWait/LoadingSpinner";

var path = "match/tickets/"

const ListStadium = () => {
    var matchId = localStorage.getItem("idClickTicketByMatch")
    const [isRender, setisRender] = useState(true);
    const [data, setData] = useState([])
    //UseEffect here ----------------------------------------------------------------------------
    useEffect(
        function () {
            console.log(matchId)
            axios
                .get(path + matchId)
                .then(function (data) {
                    setData(data.data);
                    setisRender(false)
                })
                .catch(function (err) {
                    console.log(32, err);
                });
        },
        []
    );

    //Handle Update here ----------------------------------------------------------------------------
    const handleUpdate = (id) => {
        localStorage.setItem("editTicketId", id);
        return window.location.href = "../ticket/updateTicket"
    };

    //Handle Sold Out here ----------------------------------------------------------------------------
    const handleDelete = (id) => {
        console.log(id);
        axios.delete(path + matchId + "/" + id)
            .then(res => {
                console.log("check delete ", res);
                alert('Deleted ticket by id: ' + id);
                setData(data.filter((item) => item.id !== id));
                window.location.reload();
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    //Form action here ----------------------------------------------------------------------------
    const actionColumn = [
        {
            field: "action",
            headerName: "",
            width: 300,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <div>
                            <button
                                className="updateButton"
                                onClick={() => handleUpdate(params.row._id)}>
                                Update
                            </button>
                        </div>

                        <div>
                            <button
                                className="deleteButtonn"
                                onClick={() => handleDelete(params.row._id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                );
            },
        },
    ];

    //Form data grid here ----------------------------------------------------------------------------
    const dataGrid = (
        <> <DataGrid
            className="datagrid"
            rows={data}
            columns={ticketColumns.concat(actionColumn)}
            getRowId={(row) => row._id}
            pageSize={8}
            rowsPerPageOptions={[8]} /></>
    )

    //Render here ----------------------------------------------------------------------------
    return (
        <div className="datatable">
            {isRender ? <LoadingSpinner /> : dataGrid}
        </div>
    );
};

export default ListStadium;