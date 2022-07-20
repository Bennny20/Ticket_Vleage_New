import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";
import LoadingSpinner from "../../pages/LoadingWait/LoadingSpinner";

var path = "account?page=0&size=100&sort=id%2Cdesc";
const Datatable = () => {

  const [isShow, setShow] = useState(true)
  //load data
  useEffect(
    function () {
      axios
        .get(path)
        .then(function (data) {
          console.log(data.data.accounts);
          setData(data.data.accounts);
          setShow(false)
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
  const handleDelete = (email) => {
    setData(data.filter((item) => item.email !== email));
    console.log(email)
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/updateUser" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
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

  const render = (
    <>
      <div className="datatableTitle">
        List user
        {/* <Link to="/users/newUser" className="link">
          Add New
        </Link> */}
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </>);
  return (
    <><div className="datatable">
      {isShow ? <div className="spinner"><LoadingSpinner /></div> : render}
    </div>
    </>
  );
};

export default Datatable;