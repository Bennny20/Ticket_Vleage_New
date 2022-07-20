import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { stadiumColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";
import Update from "../../pages/Update/UpdateStadium"
import LoadingSpinner from "../../pages/LoadingWait/LoadingSpinner";

var path = "stadium";
const ListStadium = () => {
    const [isRender, setisRender] = useState(true);
    //load data
    useEffect(
        function () {
            axios
                .get(path + "?page=0&size=100&sort=id%2Cdesc")
                .then(function (data) {
                    console.log(data.data.stadiums);
                    setData(data.data.stadiums);
                    setisRender(false)
                    // console.log(list);
                })
                .catch(function (err) {
                    console.log(32, err);
                });
        },
        []
    );
    const [data, setData] = useState([]);

    // xóa
    const handleDelete = (id) => {
        // setData(data.filter((item) => item.id !== id));
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
    //Update 
    const [isShow, setisShow] = useState(true);
    const [formvalue, setDataFormvalue] = useState();
    // var idData, stadiumNameData, locationData, capacityData;
    const handleUpdate = (id) => {
        setDataFormvalue(id)
        setisShow(!isShow)
    };

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

    const dataGrid = (<><div className="datatableTitle">
        List Stadium
        <Link to="/stadium/newStadium" className="link">
            Add New
        </Link>
    </div>
        <DataGrid
            className="datagrid"
            rows={data}
            columns={stadiumColumns.concat(actionColumn)}
            pageSize={8}
            rowsPerPageOptions={[8]} /></>)

    const loading = (<>{isRender ? <LoadingSpinner /> : dataGrid}</>)
    return (
        //new code
        <div className="datatable">
<<<<<<< HEAD
            {isShow ? <><div className="datatableTitle">
                List Stadium
                <Link to="/stadium/newStadium" className="link">
                    Add New
                </Link>
            </div><DataGrid
                    className="datagrid"
                    rows={data}
                    columns={stadiumColumns.concat(actionColumn)}
                    pageSize={8}
                    rowsPerPageOptions={[8]} /></> : <Update props={formvalue} />}
=======
            {isShow ? loading : <Update props={formvalue} />}

>>>>>>> 45167b1127207f204bf0a3fd7f6d7db1ded23d32
        </div>
    );
};

export default ListStadium;