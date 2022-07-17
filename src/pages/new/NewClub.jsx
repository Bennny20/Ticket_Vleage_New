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
          <h1>New club</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput" >
                <label>Name of club</label>
                <input type="text" placeholder="Ho Chi Minh City FC" />
              </div>

              <div className="formInput" >
                <label>Location of club</label>
                <input type="text" placeholder="" />
              </div>

              <div className="formInput" >
                <label>Stadium</label>
                <input type="text" placeholder="" />
              </div>

              <div className="formInput" >
                <label>Logo</label>
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
