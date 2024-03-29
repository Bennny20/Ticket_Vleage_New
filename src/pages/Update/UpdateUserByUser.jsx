import Navbar from "../../components/landing/Navbar";
import { useState, useEffect, useContext } from "react";
import axios from "../../AxiosConfig";
import { AuthContext } from "../../context/AuthContext";
import moment from "moment";
import UserUpdateCard from "../../components/updateCard/updateUserCard";
import "./update.scss";



const UpdateUserByUser = () => {
    const { currentUser } = useContext(AuthContext)
    const [data, setData] = useState([]);

    useEffect(
        function () {
            axios
                .get("users/" + currentUser._id)
                .then(function (response) {
                    setData(response.data)
                })
                .catch(function (err) {
                    console.log(32, err);
                });
        },
        []
    );

    return (
        <div>
            <Navbar />
            <div className="single">

                <div className="singleContainer">

                    <div className="top">
                        <div className="left">
                            {/* <div className="editButton">Edit</div> */}
                            <h1 className="title">Information</h1>
                            <div className="item">
                                <img
                                    src="https://i.pinimg.com/736x/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg"
                                    alt=""
                                    className="itemImg"
                                />
                                <div className="details">
                                    <h1 className="itemTitle">{currentUser.username}</h1>
                                    <div className="detailItem">
                                        <span className="itemKey">Email:</span>
                                        <span className="itemValue">{data.email}</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">ROLE:</span>
                                        {data.isAdmin ? <span className="itemValue">ADMIN</span> : <span className="itemValue">USER</span>}

                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">CREATED AT:</span>
                                        <span className="itemValue">
                                            {moment(currentUser.createdAt).format('DD/MM/YYYY -  h:mm A')}
                                        </span>
                                    </div>

                                    {/* <div className="detailItem">
                                        <span className="itemKey">Country:</span>
                                        <span className="itemValue">USA</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="update">
                        <div className="newContainer">
                            <UserUpdateCard pathLink={"profile"} userId={currentUser._id} setShowRole={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateUserByUser;
