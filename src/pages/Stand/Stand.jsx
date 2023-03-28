import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/table/ListStand"

import { useNavigate } from "react-router-dom";


const Stand = () => {
    const negative = useNavigate();
    const handleBack = () => {
        negative(-1);
    }

    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <div className="m-3">
                    <button onClick={handleBack} className="btn btn-secondary">
                        Back
                    </button>
                </div>
                <Datatable />
            </div>
        </div>
    )
};

export default Stand;