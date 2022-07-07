import "./update.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const UpdateStadium = () => {

  return (
    <div className="update">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Update Stadium</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput" >
                <label>ID</label>
                <input type="text" placeholder="ID of stadium" value="01" readOnly />
              </div>

              <div className="formInput" >
                <label>Name</label>
                <input type="text" placeholder="Name of stadium" value="Thong Nhat Stadium" />
              </div>

              <div className="formInput" >
                <label>Localtion</label>
                <input type="text" placeholder="" value="Q10 TP HCM" />
              </div>

              <div className="formInput" >
                <label>Capacity</label>
                <input type="text" placeholder="" value="Ho Chi Minh City FC" />
              </div>

              <div className="formInput" >
                <label>Status</label>
                <select>
                  <option value="CO2">Update</option>
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

export default UpdateStadium;
