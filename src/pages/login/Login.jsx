

import { useContext, useState } from "react";
import "./login.scss";
import axios from "../../AxiosConfig";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"
import background from "./backgroundLogin.jpeg"

const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const { dispatch } = useContext(AuthContext)


  const handleLogin = (e) => {
    e.preventDefault();
    try {
      axios.post("auth/login", { username, password })
        .then(
          response => {
            console.log(response.data)
            const isAdmin = response.data.isAdmin
            const user = response.data
            console.log(isAdmin)
            console.log(JSON.stringify(response.data.token))
            localStorage.setItem("access_token", response.data.token)
            dispatch({ type: "LOGIN", payload: user })

            if (isAdmin) {
              console.log("Admin")
              navigate("/admin")
            }
            else {
              console.log("User")
              navigate("/")
            }

          })
        .catch(error => {
          alert("Wrong username or password!")
          console.log(error);
        });
    } catch (err) {
      alert(error)
      console.log(error);
    }
  };



  return (

    <section className="vh-100" >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src={background} className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form id="LoginForm" onSubmit={handleLogin}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                        <span className="h1 fw-bold mb-0">Sign In</span>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" >Username</label>
                        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="form-control form-control-lg" />

                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label"  >Password</label>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="form-control form-control-lg" />

                      </div>

                      <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>

                      {error && <span>Wrong email or password!</span>}
                      <br />
                      <a href="#!" className="small text-muted">Terms of use.</a>
                      <br />
                      <a href="#!" className="small text-muted">Privacy policy</a>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

      <div className="form">
        <form >
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />

          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </section >


  );
};

export default Login;