
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
          <img style={{ width: "32px", height: "32px", borderRadius: "50%", marginRight: "10px", objectFit: "cover" }}
            src={img.value} alt="" className="image" />
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
    headerName: "Order ID",
    width: 200,
  },
  {
    field: "name",
    headerName: "Username",
    width: 100,
  },

  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
  },
  {
    field: "totalPrice",
    headerName: "Total Payment",
    width: 150,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "address",
    headerName: "Address",
    width: 150
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

export const userOrderColumns = [
  {
    field: "_id",
    headerName: "Order ID",
    width: 300,
  },
  {
    field: "name",
    headerName: "Username",
    width: 100,
  },

  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
  },
  {
    field: "totalPrice",
    headerName: "Total Payment",
    width: 150,
  }
];


//Match Colums
export const matchColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "logoHomeClub",
    headerName: "-",
    width: 45,
    renderCell: (img) => {
      return (
        <div className="allImage">
          <img style={{ width: "32px", height: "32px", borderRadius: "50%", marginRight: "10px", objectFit: "cover" }}
            src={img.value} alt="" className="image" />
        </div>
      );
    },
  },
  {
    field: "nameHomeClub",
    headerName: "Home",
    width: 190,
  },
  {
    field: "logoAwayClub",
    headerName: "-",
    width: 45,
    renderCell: (img) => {
      return (
        <div className="allImage">
          <img style={{ width: "32px", height: "32px", borderRadius: "50%", marginRight: "10px", objectFit: "cover" }}
            src={img.value} alt="" className="image" />
        </div>
      );
    },
  },
  {
    field: "nameAwayClub",
    headerName: "Away",
    width: 190,
  },
  {
    field: "nameStadium",
    headerName: "Stadium",
    width: 180,
  },
  {
    field: "date",
    headerName: "Date",
    width: 115,
  },
];