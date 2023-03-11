import { useContext, useState } from "react";
import "./register.scss";
import axios from "../../AxiosConfig";
import { useNavigate } from "react-router-dom";
import background from "./backgroundLogin.jpeg"

const Register = () => {
    const [error, setError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    const handleRegister = (e) => {
        e.preventDefault();
    };



    return (
        <section>

            <div className="content-wrapper">
                <div className="content">
                    <div className="signup-wrapper shadow-box">
                        <div className="company-details ">
                            <img src={background} alt="" />
                            <div className="shadow"></div>
                            <div className="wrapper-1">

                            </div>

                        </div>
                        <div className="signup-form ">
                            <div className="wrapper-2">
                                <div className="form-title">Sign up today!</div>
                                <div className="form">
                                    <form>
                                        <div className="content-item">
                                            <label>Username </label>
                                            <input type="text" required />

                                        </div>

                                        <div className="content-item">
                                            <label>email address</label>
                                            <input type="text" name="email" required />

                                        </div>

                                        <div className="content-item">

                                            <label>Password</label>
                                            <input type="password" name="password" required />

                                        </div>
                                        <div className="content-item">

                                            <label>Password confirmation</label>
                                            <input type="password" name="password-con" required />
                                        </div>


                                        <button type="submit" className="signup">SIGN UP </button>
                                        <a href="#" className="loginbtn">login</a>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default Register;