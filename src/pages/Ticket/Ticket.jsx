import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ListTicket from "../../components/table/ListTicket"
import { Link } from "react-router-dom";
import "./ticket.scss";


const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              {/* <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              /> */}
              <div className="details">
               <h1 className="itemTitle">Ho Chi Minh City </h1> 
               <h4 className="itemTitle">VS </h4> 
                <h1 className="itemTitle">Hoang Anh Gia Lai </h1>
                <div className="detailItem">
                  <span className="itemKey">Time:</span>
                  <span className="itemValue">17:00</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Day:</span>
                  <span className="itemValue">10/07/2022</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Stadium:</span>
                  <span className="itemValue">
                    Thong Nhat Stadium
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="bottom">
          <h1 className="title">List Ticket</h1>
          <ListTicket />
        </div>
      </div>
    </div>
  );
};

export default Single;
