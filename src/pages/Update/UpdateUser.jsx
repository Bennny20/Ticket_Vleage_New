import "./update.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import UserUpdateCard from "../../components/updateCard/updateUserCard";

const Single = () => {
  var userId = sessionStorage.getItem("updateUserId");

  return (
    <div className="update">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Update User</h1>
        </div>
        <UserUpdateCard userId={userId} setShowRole={true} />
      </div>
    </div>
  );
};

export default Single;
