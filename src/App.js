import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
//Add new
import NewRound from "./pages/new/NewRound"
import NewTournament from "./pages/new/NewTournament"
import NewMatch from "./pages/new/NewMatch"
import NewUser from "./pages/new/NewUser";
import NewStadium from "./pages/new/NewStadium";
import NewClub from "./pages/new/NewClub";
import NewTicket from "./pages/new/NewTicket";
import NewStand from "./pages/new/NewStand";

//View List
import List from "./pages/list/List";
import Profile from "./pages/profile/Profile"
import Stadium from "./pages/Stadium/Stadium"
import Match from "./pages/Match/Match"
import Club from "./pages/Club/Club"
import TicketByMatch from "./pages/Ticket/Ticket"
import Ticket from "./pages/Ticket/Ticket"
import Order from "./pages/order/Order"
import StandByStadium from "./pages/Stand/Stand";

//Update
import UpdateMatch from "./pages/Update/UpdateMatch"
import UpdateStadium from "./pages/Update/UpdateStadium";
import UpdateRound from "./pages/Update/UpdateRound";
import UpdateStand from "./pages/Update/UpdateStand";
import UpdateTournament from "./pages/Update/UpdateTournament";
import UpdateClub from "./pages/Update/UpdateClub";
import UpdateUser from "./pages/Update/UpdateUser";
import UpdateTicket from "./pages/Update/UpdateTicket";
//More libary
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { stadiumInput, userInputs, clubInput } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import Landing from "./pages/Landing/Landing";
import BuyTicket from "./pages/BuyTicket/buyTicket";
import Single from "./pages/single/Single";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);


  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  console.log(currentUser);

  const RequiredAdmin = ({ children }) => {
    return currentUser.isAdmin ? children : <Navigate to="/" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
            <Route path="login" element={<Login />} />

            {/* Admin */}
            <Route path="admin">
              <Route index element={<RequiredAuth><Home /></RequiredAuth>} />
            </Route>

            {/* Match */}
            <Route path="match">
              <Route index element={<RequiredAuth><Match /></RequiredAuth>} />
              <Route path="updateMatch" element={<RequiredAuth><UpdateMatch /></RequiredAuth>} />
              <Route path="updateRound" element={<RequiredAuth><UpdateRound /></RequiredAuth>} />
              <Route path="updateTournament" element={<RequiredAuth><UpdateTournament /></RequiredAuth>} />
              <Route path="newMatch" element={<NewMatch />} />
              <Route path="newRound" element={<NewRound />} />
              <Route path="newTournament" element={<NewTournament />} />
            </Route>


            {/* Ticket  By Match*/}
            <Route path="ticketbymatch">
              <Route index element={<RequiredAuth><TicketByMatch /></RequiredAuth>} />
            </Route>

            {/* Stand  By Stadium*/}
            <Route path="standbystadium">
              <Route index element={<RequiredAuth><StandByStadium /></RequiredAuth>} />
              <Route path="newStand" element={<RequiredAuth><NewStand /></RequiredAuth>} />
              <Route path="updateStand" element={<RequiredAuth><UpdateStand /></RequiredAuth>} />
            </Route>


            {/* Ticket  */}
            <Route path="ticket">
              <Route index element={<RequiredAuth><Ticket /></RequiredAuth>} />
              <Route path="updateTicket" element={<RequiredAuth><UpdateTicket /></RequiredAuth>} />
              <Route path="newTicket" element={<RequiredAuth><NewTicket /></RequiredAuth>} />
            </Route>

            {/* User */}
            <Route path="users">
              <Route index element={<RequiredAuth><List /></RequiredAuth>} />
              <Route path="updateUser" element={<RequiredAuth><UpdateUser /></RequiredAuth>} />
              <Route path="newUser" element={<NewUser />} />
            </Route>

            {/* Order */}
            <Route path="order">
              <Route index element={<RequiredAuth><Order /></RequiredAuth>} />
            </Route>

            {/* Profile */}
            <Route path="profile">
              <Route index element={<RequiredAuth><Profile /></RequiredAuth>} />
            </Route>

            {/* Stadium */}
            <Route path="stadium">
              <Route index element={<RequiredAuth><Stadium /></RequiredAuth>} />
              <Route path="updateStadium" element={<RequiredAuth><UpdateStadium /></RequiredAuth>} />
              <Route path="newStadium" element={<RequiredAuth><NewStadium /></RequiredAuth>} />
            </Route>

            {/* Buy Ticket */}
            <Route path="purchase">
              <Route index element={<RequiredAuth><BuyTicket /></RequiredAuth>} />
            </Route>


            {/* Club */}
            <Route path="club">
              <Route index element={<RequiredAuth><Club /></RequiredAuth>} />
              <Route path="updateClub" index element={<RequiredAuth><UpdateClub /></RequiredAuth>} />
              <Route path="newClub" element={<RequiredAuth><NewClub /></RequiredAuth>} />
            </Route>



          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
