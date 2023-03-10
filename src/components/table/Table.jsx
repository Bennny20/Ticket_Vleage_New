import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { matchColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import axios from "../../AxiosConfig";
import { useState } from "react";
import LoadingSpinner from "../../pages/LoadingWait/LoadingSpinner";
import { useEffect } from "react";

function List(props) {
  console.log(props)
  const [data, setData] = useState([]);
  const [isRender, setisRender] = useState(true);

  //UseEffect here ----------------------------------------------------------------------
  useEffect(
    function () {
      if (props.props.length > 0) {
        console.log(props.props);
        setData(props.props);
        setisRender(false);
      }
    }
  )

  //Handle on click ticket here ----------------------------------------------------------------------
  const handleOnClick = (matchId, stadiumId) => {
    localStorage.setItem("idClickTicketStadium", matchId)
    localStorage.setItem("idClickTicket", matchId)
    console.log("Click ticket", matchId)
    return window.location.href = "/ticketbymatch"
  }

  //Handle on click status here ----------------------------------------------------------------------
  const handleStatus = (status) => {
    if (status == true) {
      return "On-Going";
    }
    return "Ending";
  }

  //Handle update here ----------------------------------------------------------------------
  const handleUpdate = (id) => {
    localStorage.setItem("editMatchId", id);
    return window.location.href = "../match/updateMatch"
  };

  //Handle delete here ----------------------------------------------------------------------
  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
    console.log(id);
    axios.delete("matches/" + id)
      .then(res => {
        console.log("check delete ", res);
        alert('Deleted club by id: ' + id);
        setData(data.filter((item) => item.id !== id));
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  // Form action of data grid----------------------------------------------------------
  const actionColumn = [
    {
        field: "action",
        headerName: "Action",
        width: 250,
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
                        <button className="ticketButton"
                            onClick={() => handleOnClick(params.row._id)}>
                            Ticket
                        </button>
                    </div>
                    <div>
                        <button className="deleteButtonn"
                            onClick={() => handleDelete(params.row._id)}>
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
        columns={matchColumns.concat(actionColumn)}
        getRowId={(row) => row._id}
        pageSize={8}
        rowsPerPageOptions={[8]} /></>
)

// Form check show loading if undefine data----------------------------------------------------------
const loading = (<>{isRender ? <LoadingSpinner /> : dataGrid}</>)

// Form render here----------------------------------------------------------
return (
    <div className="datatable">
        <div className="datatableTitle">
            List Match
        </div>
        {loading}
    </div>
);


};

export default List;