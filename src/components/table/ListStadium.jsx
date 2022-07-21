import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { stadiumColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";
import Update from "../../pages/Update/UpdateStadium"
import LoadingSpinner from "../../pages/LoadingWait/LoadingSpinner";

var path = "stadium?page=0&size=100&sort=id%2Cdesc";
const ListStadium = () => {
    const [isRender, setisRender] = useState(true);
    const [isShow, setisShow] = useState(true);
    const [formvalue, setDataFormvalue] = useState();
    const [data, setData] = useState([]);

    //UseEffect here ----------------------------------------------------------------------------
    useEffect(
        function () {
            axios
                .get(path)
                .then(function (data) {
                    console.log(data.data.stadiums);
                    setData(data.data.stadiums);
                    setisRender(false)
                })
                .catch(function (err) {
                    console.log(32, err);
                });
        },
        []
    );

    //Handle Delete here ----------------------------------------------------------------------------
    const handleDelete = (id) => {
        console.log(id);
        axios.delete(path + "/" + id)
            .then(res => {
                console.log(res);
                alert('Deleted stadium by id: ' + id);
                setData(data.filter((item) => item.id !== id));

            })
            .catch(function (err) {
                console.log(err);
            });
    };

    //Handle Update here ----------------------------------------------------------------------------
    const handleUpdate = (id) => {
        setDataFormvalue(id)
        setisShow(!isShow)
    };

    //Form action here ----------------------------------------------------------------------------
    const actionColumn = [
        {
            field: "action",
            headerName: "",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <div
                            className="viewButton"
                            onClick={() => handleUpdate(params.row.id)}
                        >
                            Update
                        </div>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
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
            columns={stadiumColumns.concat(actionColumn)}
            pageSize={8}
            rowsPerPageOptions={[8]} /></>
    )

    //Check show loading wait here ----------------------------------------------------------------------------
    const loading = (<>{isRender ? <LoadingSpinner /> : dataGrid}</>)
    
    //Render here ----------------------------------------------------------------------------
    return (
        <div className="datatable">
            <div className="datatableTitle">
                List Stadium
                <Link to="/stadium/newStadium" className="link">
                    Add New
                </Link>
            </div>
            {isShow ? loading : <Update props={formvalue} />}
        </div>
    );
};

export default ListStadium;