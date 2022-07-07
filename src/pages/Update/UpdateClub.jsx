import "./update.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const UpdateClub = () => {

    return (
        <div className="update">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Update club</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form>
                            <div className="formInput" >
                                <label>ID</label>
                                <input type="text" placeholder="ID of club" value="01" readOnly />
                            </div>

                            <div className="formInput" >
                                <label>Name</label>
                                <input type="text" placeholder="Name of club" value="Hoang Anh Gia Lai" />
                            </div>

                            <div className="formInput" >
                                <label>Localtion</label>
                                <input type="text" placeholder="" value="Q10 TP HCM" />
                            </div>

                            <div className="formInput" >
                                <label>Stadium</label>
                                <input type="text" placeholder="" value="Thong Nhat Stadium" />
                            </div>

                            <div className="formInput" >
                                <label>Logo</label>
                                <input type="text" placeholder="" value="https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Ho_Chi_Minh_City_FC_logo.svg/360px-Ho_Chi_Minh_City_FC_logo.svg.png" />
                            </div>
                            <div className="formInput" >
                                <label>Status</label>
                                <select>
                                    <option value="CO2">Unavailable</option>
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

export default UpdateClub;
