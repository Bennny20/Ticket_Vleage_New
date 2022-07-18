import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { stadiumColumns, userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";

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
        console.log(id)
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/stadium/updateStadium" style={{ textDecoration: "none" }}>
                            <div className="viewButton">Update</div>
                        </Link>
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
      <div className="datatableTitle">
        List Stadium
        <Link to="/stadium/newStadium" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={stadiumColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>    
    );
};

export default ListStadium;