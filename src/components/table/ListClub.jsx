import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { clubColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";

var path = "club";
const ListStadium = () => {
    //load data
    useEffect(
        function () {
            axios
                .get(path)
                .then(function (data) {
                    console.log(data.data.clubs);
                    setData(data.data.clubs);
                    // console.log(list);
                })
                .catch(function (err) {
                    console.log(32, err);
                });
        },
        []
    );
    const [data, setData] = useState([]);

    // Delete function
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
        alert(id)
        console.log(id)
    };

    // Delete function
    const handleUpdate = (id, clubName, country, stadiumId, img) => {
        alert(id + "-" + clubName + "-" + country + "-" + stadiumId + "-" + img)
        console.log(id + "-" + clubName + "-" + country + "-" + stadiumId + "-" + img)
        return window.location.href = "/club/updateClub"
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
                            onClick={() => handleUpdate(params.row.id, params.row.clubName, params.row.country, params.row.stadiumId, params.row.img)}
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
        //new code
        <div className="datatable">
            <div className="datatableTitle">
                List Club
                <Link to="/club/newClub" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={clubColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
            />
        </div>
    );


};

export default ListStadium;