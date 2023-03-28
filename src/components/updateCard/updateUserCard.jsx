import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../AxiosConfig";
import Swal from "sweetalert2";

const UserUpdateCard = ({ pathLink = "users", userId, setShowRole = true }) => {
  var path = "/users"
  const [data, setData] = useState([]);
  const [isPassword, setIsPassword] = useState(false);
  const [email, setEmail] = useState();
  const [role, setRole] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const negative = useNavigate();

  console.log("------Onchange-----")
  console.log("User ID: ", userId);
  console.log("Email: ", email);
  console.log("isAdmin: ", role);
  console.log("Password: ", password);
  console.log("Confirm: ", confirm);

  useEffect(
    function () {
      //data club
      axios.get(path + "/" + userId)
        .then(function (response) {
          console.log("User data to update: ", response.data)
          setData(response.data)
          setEmail(response.data.email)
          setRole(response.data.isAdmin)
        })
        .catch(function (err) {
          console.log(32, err);
        });
    },
    []
  );

  const checkConfirm = (password, confirm) => {
    if (password == confirm) {
      return true
    } else return false
  }

  const handleChangeRole = (value) => {
    if (value == "false") {
      setRole(false);
    } else setRole(true);
  }

  const handlePassword = () => {
    if (isPassword) {
      setIsPassword(false);
    } else setIsPassword(true);
  }

  function showError(text) {
    Swal.fire({
      title: 'Oops...',
      text: text,
      icon: "error",
      confirmButtonText: "OK",
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    if (isPassword == false) {
      if (email == data.email && role == data.isAdmin) {
        showError("Nothing change! Try again")
      } else {
        Swal.fire({
          title: 'Do you want to save changes?',
          showDenyButton: true,
          confirmButtonText: 'Save',
          denyButtonText: `Don't save`,
        }).then((result) => {
          if (result.isConfirmed) {
            axios.put(path + "/" + userId, {
              "username": data.username,
              "email": email,
              "isAdmin": role,
            }).then(response => {
              Swal.fire('Saved!', '', 'success')
                .then(response => { window.location.href = "/" + pathLink })
            })
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
      }
    } else if (isPassword == true) {
      if (checkConfirm(password, confirm)) {
        Swal.fire({
          title: 'Do you want to save changes?',
          showDenyButton: true,
          confirmButtonText: 'Save',
          denyButtonText: `Don't save`,
        }).then((result) => {

          if (result.isConfirmed) {

            axios.put(path + "/" + userId, {
              "username": data.username,
              "email": email,
              "password": password,
              "isAdmin": role,
            }).then(response => {
              Swal.fire('Saved!', '', 'success')
                .then(response => { window.location.href = "../users" })
            })

          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }

        })
      } else showError("New and confirm password must be equal!")
    }
  }
  const handleBack = () => {
    negative(-1);
  }

  return (

    <div className="bottom">
      <div className="right">
        <form onSubmit={handleSubmit}>
          <div className="formInput" >
            <label>Username</label>
            <input type="text" placeholder="Username" value={data.username} disabled required />
          </div>

          <div className="formInput" >
            <label>Email</label>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>



          {isPassword ?
            <>
              <div className="formInput" >
                <label>New Password</label>
                <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
              </div>

              <div className="formInput" >
                <label>Confirm Password</label>
                <input type="text" placeholder="Confirm Password" onChange={(e) => setConfirm(e.target.value)} required />
              </div>
            </>
            : <>
            </>
          }
          <span className="spanButton" onClick={handlePassword}>UPDATE PASSWORD</span>

          {setShowRole ?
            <div className="formInput" >
              <label>Set Role</label>
              <select value={role} onChange={(e) => handleChangeRole(e.target.value)}>
                <option value={false}>USER</option>
                <option value={true}>ADMIN</option>
              </select>
            </div>
            : <></>
          }
          <div className="btnUpdateUser">

            <button className="btnUpdate">Save</button>
            <span onClick={handleBack} className="btnCancel">Cancel</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserUpdateCard;
