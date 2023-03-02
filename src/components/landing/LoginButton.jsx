
import { PopupMenu } from "react-simple-widgets";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//npm install formik
//npm install react-simple-widgets
const LoginButton = () => {
    return (
        <a className="primary-button" href="/login">Login</a>
    )
}
export default LoginButton;