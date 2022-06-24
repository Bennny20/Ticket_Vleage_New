export const userColumns = [ 
  {
    field: "email",
    headerName: "Email",
    width: 200,
  }, 
  {
    field: "first",
    headerName: "Firstname",
    width: 200,
  },
  {
    field: "last",
    headerName: "Lastname",
    width: 200,
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

//temporary data
export const userRows = [
  // {
  //   email:"Phientruong20@gmail.com,", 
  //   first: "Phien",
  //   last: "Truong",
  //   phone:"012345689",
  //   status: "active",
  // },
  // {
  //   email: "1snow@gmail.com",
  //   username: "Snow",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   status: "active",
  //   phone: "0122345678",
  //   age: 35,
  // },
  // {
  //   email: 2,
  //   username: "Jamie Lannister",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "2snow@gmail.com",
  //   status: "passive",
  //   age: 42,
  // },
  // {
  //   email: 3,
  //   username: "Lannister",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "3snow@gmail.com",
  //   status: "pending",
  //   age: 45,
  // },
  // {
  //   email: 4,
  //   username: "Stark",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "4snow@gmail.com",
  //   status: "active",
  //   age: 16,
  // },
  // {
  //   email: 5,
  //   username: "Targaryen",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "5snow@gmail.com",
  //   status: "passive",
  //   age: 22,
  // },
  // {
  //   email: 6,
  //   username: "Melisandre",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "6snow@gmail.com",
  //   status: "active",
  //   age: 15,
  // },
  // {
  //   email: 7,
  //   username: "Clifford",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "7snow@gmail.com",
  //   status: "passive",
  //   age: 44,
  // },
  // {
  //   email: 8,
  //   username: "Frances",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "8snow@gmail.com",
  //   status: "active",
  //   age: 36,
  // },
 
  // {
  //   email: 10,
  //   username: "Roxie",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "snow@gmail.com",
  //   status: "active",
  //   age: 65,
  // },
];
