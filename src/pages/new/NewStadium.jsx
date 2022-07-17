import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>New Stadium</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
            <div className="formInput" >
                <label>ID of Stadium</label>
                <input type="text" placeholder="" />
              </div>

              <div className="formInput" >
                <label>Name of Stadium</label>
                <input type="text" placeholder="Ho Chi Minh City FC" />
              </div>

              <div className="formInput" >
                <label>Location of Stadium</label>
                <input type="text" placeholder="" />
              </div>

              <div className="formInput" >
                <label>Capcity</label>
                <input type="text" placeholder="" />
              </div>

             

            </form>
            <div className="btnSend">
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
