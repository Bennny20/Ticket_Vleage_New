
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

  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//const of club
export const clubColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "clubName",
    headerName: "Name",
    width: 300,
  },
  {
    field: "country",
    headerName: "Localtion",
    width: 150,
  },
  {
    field: "stadiumId",
    headerName: "Stadium",
    width: 150,
  },
  {
    field: "img",
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

  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//const of stadium
export const stadiumColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "stadiumName",
    headerName: "Name",
    width: 300,
  },
  {
    field: "location",
    headerName: "Localtion",
    width: 150,
  },
  {
    field: "capacity",
    headerName: "Capacity",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
