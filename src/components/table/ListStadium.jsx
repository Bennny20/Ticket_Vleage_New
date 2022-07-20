import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { stadiumColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";
import Update from "../../pages/Update/UpdateStadium"

var path = "stadium";
const ListStadium = () => {
    //load data
    useEffect(
        function () {
            axios
                .get(path + "?page=0&size=20&sort=id%2Cdesc")
                .then(function (data) {
                    console.log(data.data.stadiums);
                    setData(data.data.stadiums);
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


    return (
        <div className="datatable">
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
        </div>
    );
};

export default ListStadium;