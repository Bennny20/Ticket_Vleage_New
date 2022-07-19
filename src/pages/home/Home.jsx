import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Table from "../../components/table/Table";
import { useState, useEffect } from "react";
import axios from "../../AxiosConfig";


var path = "match";
const Home = () => {
  //load data page list match defaul
  useEffect(
    function () {
      axios.get("match")
        .then(function (data) {
          console.log(data.data.matches);
          setData(data.data.matches);
          // console.log(list);
        })
        .catch(function (err) {
          console.log(32, err);
        });
    },
    []
  );

  const [data, setData] = useState([]);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">

          <div className="listTitle" style={{ fontSize: "20px" }}>Tournament: NIGHT WOLF V.LEAGUE 1 - 2022</div>
          <div className="listTitle" style={{ fontSize: "20px", color: "red" }}>Round: 01</div>
          <Table props={data}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
