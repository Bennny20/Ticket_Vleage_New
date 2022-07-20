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
    //load data
    useEffect(
        function () {
            axios
                .get(path)
                .then(function (data) {
                    console.log(data.data.clubs);
                    setData(data.data.clubs);
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
    const [formValue, setDataFormvalue] = useState();
    const [isShow, setisShow] = useState(true);


    // Delete function
    const handleDelete = (id) => {
        // setData(data.filter((item) => item.id !== id));
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

    // Update function
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
            rowsPerPageOptions={[9]} /></>)

    const loading = (<>{isRender ? <LoadingSpinner /> : dataGrid}</>)
    return (
        //new code
        <div className="datatable">
            {isShow ? loading : <Update props={formValue} />}

        </div>
    );


};

export default ListStadium;