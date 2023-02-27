
//const of user
export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "username",
    headerName: "Email",
    width: 300,
  },
  {
    field: "firstname",
    headerName: "Firstname",
    width: 150,
  },
  {
    field: "lastname",
    headerName: "Lastname",
    width: 150,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },

  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

//const of club
export const clubColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "location",
    headerName: "Localtion",
    width: 300,
  },
  {
    field: "stadiumId",
    headerName: "Stadium",
    width: 150,
  },
  {
    field: "logo",
    headerName: "Logo",
    width: 150,
    renderCell: (img) => {
      return (
        <div className="allImage">
          <img style={{width: "32px",height: "32px", borderRadius: "50%",marginRight: "10px",objectFit: "cover"}}
           src={img.value} alt="" className="image"/>
        </div>
      );
    },
  },

  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

//const of stadium
export const stadiumColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "city",
    headerName: "Localtion",
    width: 500,
  },
  {
    field: "capcity",
    headerName: "Capacity",
    width: 150,
  }
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

//const of ticket list
export const ticketColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "orderID",
    headerName: "Oder ID",
    width: 300,
  },
  {
    field: "account",
    headerName: "Account",
    width: 500,
  },
  {
    field: "ticket",
    headerName: "Ticket",
    width: 150,
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 150,
  },
  {
    field: "total",
    headerName: "Total",
    width: 150,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

//const of oder list
export const oderColumns = [
  {
    field: "id",
    headerName: "Oder ID",
    width: 100,
  },
  {
    field: "account.firstname",
    headerName: "Fisrt Name",
    width: 300,
  },
  {
    field: "account.lastname",
    headerName: "Last Name",
    width: 300,
  },
  {
    field: "ticket",
    headerName: "Ticket",
    width: 150,
  },
  {
    field: "orderDate",
    headerName: "Date",
    width: 150,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 150,
  },
  {
    field: "total",
    headerName: "Total",
    width: 150,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];
