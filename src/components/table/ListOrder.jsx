import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { oderColumns } from "../../datatablesource";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";
import LoadingSpinner from "../../pages/LoadingWait/LoadingSpinner";

var path = "order/";
const Datatable = () => {
  const [data, setData] = useState([]);
  const [isShow, setShow] = useState(true)
  //UseEffect here ------------------------------------------------------------------------------
  useEffect(
    function () {
      axios.get(path)
        .then(function (data) {
          setData(data.data);
          setShow(false)
        })
        .catch(function (err) {
          console.log(32, err);
        });
    },
    []
  );

  // Form data grid----------------------------------------------------------
  const dataGrid = (
    <><DataGrid
      className="datagrid"
      rows={data}
      columns={oderColumns}
      getRowId={(row) => row._id}
      pageSize={8}
      rowsPerPageOptions={[8]} /></>
  )

  //Render here--------------------------------------------------------------------
  return (
    <><div className="datatable">
      <div className="datatableTitle">
        List Order
      </div>
      {isShow ? <div className="spinner"><LoadingSpinner /></div> : dataGrid}
    </div>
    </>
  );
};

export default Datatable;