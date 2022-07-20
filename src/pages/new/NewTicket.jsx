import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const New = () => {

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />


        <h1>New Ticket</h1>
        {/* Note here : - */}
      </div>
    </div>
  );
};

export default New;