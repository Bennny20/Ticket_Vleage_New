import { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"
import background from "./backgroundLogin.jpeg"


const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const { dispatch } = useContext(AuthContext)

  //sign in bằng account được cấp qua firebase
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        dispatch({ type: "LOGIN", payload: user })
        navigate("/")
      })
      .catch((error) => {
        setError(true);
      });
  };

  //sign in with google firebase ====> chưa check role admin => ai cũng login được
  // const signInWithGoogle = () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       dispatch({ type: "LOGIN", payload: user })
  //       console.log(user);
  //       navigate("/")
  //       // ...
  //     }).catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // };



  return (

    <section className="vh-100" style={{ backgroundColor: "#55efc4" }}>
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
                        <span className="h1 fw-bold mb-0">Admin Page</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your admin account</h5>

                      <div className="form-outline mb-4">
                        <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" />
                        <label className="form-label" >Email address</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} className="form-control form-control-lg" />
                        <label className="form-label"  >Password</label>
                      </div>

                      <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>

                      {error && <span>Wrong email or password!</span>}
                      <br />
                      <a href="#!" className="small text-muted">Terms of use.</a>
                      <a href="#!" className="small text-muted">Privacy policy</a>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >


  );
};

export default Login;