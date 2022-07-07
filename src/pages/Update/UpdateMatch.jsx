import "./update.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";

const Single = () => {

  return (
    <div className="update">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Update match</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput" >
                <label>Home</label>
                <input type="text" placeholder="Name of home club" value="Ho Chi Minh City FC" required />
              </div>

              <div className="formInput" >
                <label>Away</label>
                <input type="text" placeholder="Name of away club" value="Hoang Anh Gia Lai" />
              </div>

              <div className="formInput" >
                <label>Stadium</label>
                <input type="text" placeholder="Name of stadiun" value="Thong Nhat" />
              </div>

              <div className="formInput" >
                <label>Date</label>
                <input type="Date" placeholder="" />
              </div>

              <div className="formInput" >
                <label>Quantity ticket</label>
                <input type="text" placeholder="" value="300" />
              </div>
              <div className="formInput" >
                <label>Status</label>
                <select>
                  <option value="CO1">Coming</option>
                  <option value="CO2">Ending</option>
                  <option value="CO2">On-going</option>
                </select>
              </div>
            </form>
            <div className="btnSend">
              <button>Save</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
