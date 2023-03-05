
//const of user
export const userColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "username",
    headerName: "Name",
    width: 300,
  },
  {
    field: "email",
    headerName: "email",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Date Created",
    width: 150,
  }
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
    width: 200,
  },
  {
    field: "nameStadium",
    headerName: "Stadium",
    width: 250,
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
  }
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
    field: "_id",
    headerName: "Oder ID",
    width: 100,
  },
  {
    field: "name",
    headerName: "Customer",
    width: 300,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 300,
  },
  {
    field: "address",
    headerName: "Address",
    width: 150,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 150,
  },
  {
    field: "totalPrice",
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
