import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { clubColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";
import Update from "../../pages/Update/UpdateClub";
import LoadingSpinner from "../../pages/LoadingWait/LoadingSpinner";

var path = "club";
const ListStadium = () => {
    const [isRender, setisRender] = useState(true);
    const [data, setData] = useState([]);
    const [formValue, setDataFormvalue] = useState();
    const [isShow, setisShow] = useState(true);

    //UseEffect load data ----------------------------------------------------------
    useEffect(
        function () {
            axios
                .get(path + "?page=0&size=100&sort=id%2Cdesc")
                .then(function (data) {
                    console.log(data.data.clubs);
                    setData(data.data.clubs);
                    setisRender(false)
                })
                .catch(function (err) {
                    console.log(32, err);
                });
        },
        []
    );

    // Delete function ----------------------------------------------------------
    const handleDelete = (id) => {
        console.log(id);
        axios.delete(path + "/" + id)
            .then(res => {
                console.log(res);
                alert('Deleted club by id: ' + id);
                setData(data.filter((item) => item.id !== id));
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    // Handle Update ----------------------------------------------------------
    const handleUpdate = (id) => {
        setDataFormvalue(id)
        setisShow(!isShow)
    };

    // Form action of data grid----------------------------------------------------------
    const actionColumn = [
        {
            field: "action",
            headerName: "",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <div>
                            <button
                                className="updateButton"
                                onClick={() => handleUpdate(params.row.id)}>
                                Update
                            </button>
                        </div>
                        <div>
                            <button className="deleteButtonn"
                                onClick={() => handleDelete(params.row.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                );
            },
        },
    ];

    // Form data grid----------------------------------------------------------
    const dataGrid = (
        <><DataGrid
            className="datagrid"
            rows={data}
            columns={clubColumns.concat(actionColumn)}
            pageSize={8}
            rowsPerPageOptions={[8]} /></>
    )

    // Form check show loading if undefine data----------------------------------------------------------
    const loading = (<>{isRender ? <LoadingSpinner /> : dataGrid}</>)

    // Form render here----------------------------------------------------------
    return (
        <div className="datatable">
            <div className="datatableTitle">
                List Club
                <Link to="/club/newClub" >
                    <button className="newButton">
                        Add New
                    </button>
                </Link>
            </div>
            {isShow ? loading : <Update props={formValue} />}
        </div>
    );


};

export default ListStadium;