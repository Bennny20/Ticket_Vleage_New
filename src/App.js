import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import NewRound from "./pages/new/NewRound"
import NewTournament from "./pages/new/NewTournament"
import NewMatch from "./pages/new/NewMatch"
import New from "./pages/new/New";
import Profile from "./pages/profile/Profile"
import Stadium from "./pages/Stadium/Stadium"
import Match from"./pages/Match/Match"
import Club from "./pages/Club/Club"
import UpdateMatch from "./pages/Update/UpdateMatch"
import Ticket from "./pages/Ticket/Ticket"
import UpdateStadium from "./pages/Update/UpdateStadium";
import UpdateClub from "./pages/Update/UpdateClub";
import UpdateUser from "./pages/Update/UpdateUser";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { stadiumInput, userInputs, clubInput } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);


  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  console.log(currentUser);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={<RequiredAuth><Home /></RequiredAuth>} />

            {/* Match */}
            <Route path="match">
            <Route index element={<RequiredAuth><Match /></RequiredAuth>} />
              <Route path="updateMatch" element={<RequiredAuth><UpdateMatch /></RequiredAuth>} />
              <Route path="newMatch"element={<NewMatch/>}/>
              <Route path="newRound"element={<NewRound/>}/>
              <Route path="newTournament"element={<NewTournament/>}/>
            </Route>

            {/* Ticket */}
            <Route path="ticket">
              <Route index element={<Ticket />} />
            </Route>

            {/* User */}
            <Route path="users">
              <Route index element={<RequiredAuth><List /></RequiredAuth>} />
              <Route path="updateUser" element={<RequiredAuth><UpdateUser /></RequiredAuth>} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            {/* Profile */}
            <Route path="profile">
              <Route index element={<RequiredAuth><Profile /></RequiredAuth>} />
            </Route>

            {/* Stadium */}
            <Route path="stadium">
              <Route index element={<RequiredAuth><Stadium /></RequiredAuth>} />
              <Route path="updateStadium" element={<RequiredAuth><UpdateStadium /></RequiredAuth>} />
              <Route
                path="newStadium"
                element={<New inputs={stadiumInput} title="Add New Stadium" />}
              />
            </Route>

            {/* Club */}
            <Route path="club">
              <Route index element={<RequiredAuth><Club /></RequiredAuth>} />
              <Route path="updateClub" index element={<RequiredAuth><UpdateClub /></RequiredAuth>} />
              <Route
                path="newClub"
                element={<New inputs={clubInput} title="Add New Club" />}
              />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
