import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect } from "react";

const New = () => {
  useEffect(
    function () {

    }
  )

  const form = (
    <div className="bottom">
      <div className="right">
        <form>
          {/* Club Home */}
          <div className="formInput" >
            <label>Match</label>
            <select>
              <option>Ho Chi Minh FC - Hoang Anh Gia Lai FC  |  Date: 30-09-2022 </option>
              <option>Ho Chi Minh FC - Hoang Anh Gia Lai FC  |  Date: 30-09-2022</option>
              <option>Ho Chi Minh FC - Hoang Anh Gia Lai FC  |  Date: 30-09-2022</option>
              <option>Ho Chi Minh FC - Hoang Anh Gia Lai FC  |  Date: 30-09-2022</option>
            </select>
          </div>

          <div className="formInput" >
            <label> Area </label>
            <input type="text" />
          </div>

          {/* Club Visitor */}
          <div className="formInput" >
            <label>Amount</label>
            <input type="number" />
          </div>

          {/* Stadium for match */}
          <div className="formInput" >
            <label>Price</label>
            <input type="number" />
          </div>

          <div className="btnSend">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>New Ticket</h1>
        </div>
        {form}
        {/* Note here : - */}
      </div>
    </div>
  );
};

export default New;