import Footer from "../../components/landing/Footer";
import MatchCard from "../../components/landing/matchCard";
import { Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "../../AxiosConfig";
import Navbar from "../../components/landing/Navbar";
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

//npm install slick-carousel --save

const Landing = ({ itemsPerPage }) => {

    var pathMatch = "/matches";
    const [matches, setMatches] = useState([]);
    const list = [];
    useEffect(
        function () {
            localStorage.removeItem("onClickMatch")
            axios.get(pathMatch)
                .then(function (response) {
                    Array.from(response.data).sort().map((x) => {
                        list.push(x)
                    })
                    setMatches(list)
                })
                .catch(function (err) {
                    console.log(32, err);
                });
        },
        []
    );
    itemsPerPage = 6;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = matches.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(matches.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % matches.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };




    return (
        <div>
            <Navbar />
            <div className="App">
                <div className="matchs">
                    {matches.length === 0 ? (
                        <Alert className="mt-5" variant="info">
                            No matches found Managers Will add soon
                        </Alert>
                    )
                        : (<>
                            {Array.from(currentItems).sort().map((x) => (
                                <MatchCard key={x._id} match={x} />
                            ))}
                        </>
                        )
                    }</div>
                <div className="pagin-box">
                    <ReactPaginate
                        activeClassName={'itempaging active '}
                        breakClassName={'itempaging break-me '}
                        breakLabel={'...'}
                        containerClassName={'pagination'}
                        disabledClassName={'disabled-page'}
                        marginPagesDisplayed={2}
                        nextClassName={"itempaging next "}
                        nextLabel={<ArrowForwardIosIcon style={{ fontSize: 18, width: 150 }} />}
                        onPageChange={handlePageClick}
                        pageCount={pageCount}
                        pageClassName={'itempaging pagination-page '}
                        pageRangeDisplayed={2}
                        previousClassName={"itempaging previous"}
                        previousLabel={<ArrowBackIosIcon style={{ fontSize: 18, width: 150 }} />}
                    />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Landing