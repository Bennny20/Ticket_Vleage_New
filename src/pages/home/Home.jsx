import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Table from "../../components/table/Table";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";
import Widget from "../../components/widget/Widget";
import OrderWidget from "../../components/widget/OrderWidget"
import MatchWidget from "../../components/widget/MatchWidget"
import UserWidget from "../../components/widget/UserWidget"

var path = "match?page=0&size=100&sort=id%2Cdesc";
const Home = () => {
  // //load data page list match defaul
  // useEffect(
  //   function () {
  //     axios.get("match")
  //       .then(function (data) {
  //         console.log(data.data.matches);
  //         setData(data.data.matches);
  //         // console.log(list);
  //       })
  //       .catch(function (err) {
  //         console.log(32, err);
  //       });
  //   },
  //   []
  // );

  // const [data, setData] = useState([]);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <UserWidget />
          <OrderWidget />
          <MatchWidget />
        </div>
        <div className="listContainer">
          <div className="listTitle" style={{ fontSize: "20px" }}>Tournament: NIGHT WOLF V.LEAGUE 1 - 2022</div>
          <div className="listTitle" style={{ fontSize: "20px" }}>Round: 01</div>
          {/* <Table props={data} /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
