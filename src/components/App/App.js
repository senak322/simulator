import { useState, useCallback, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../Header/Header";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [buttonsToGame, setButtonsToGame] = useState([]);
  const buttonsArr = ["j", "f", "k", "d", " "];
  const colors = [
    "text-primary",
    "text-danger",
    "text-success",
    "text-secondary",
    "text-danger-emphasis",
  ];

  const handleLogout = useCallback(() => {
    setLoggedIn(false);
  }, []);

  const getRandomInt = useCallback((max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }, [])

  const createButtons = useCallback(() => {
    for (let i = 0; i < 20; i++) {
      let rand = getRandomInt(buttonsArr.length);
      setButtonsToGame()
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Main onLogout={handleLogout} isGameStarted={isGameStarted} buttonsArr={buttonsArr}/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
