import { useState, useCallback, useEffect, useMemo } from "react";
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
  const buttonsToTrain = useMemo(() => {
    return ["j", "f", "k", "d", " "];
  }, []);
  const colors = useMemo(() => {
    return [
      "btn btn-primary",
      "btn btn-secondary",
      "btn btn-success",
      "btn btn-danger",
      "btn btn-warning",
    ];
  }, []);

  const handleLogout = useCallback(() => {
    setLoggedIn(false);
  }, []);

  const getRandomInt = useCallback((max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }, []);

  const createButtons = useCallback(() => {
    let buttonsArr = [];
    for (let i = 0; i < 20; i++) {
      let rand = getRandomInt(buttonsToTrain.length);
      buttonsArr.push({ char: buttonsToTrain[rand], color: colors[rand] });
    }
    console.log(buttonsArr);
    setButtonsToGame(buttonsArr);
  }, [colors, getRandomInt, buttonsToTrain]);

  const startGame = useCallback((e) => {
    if (e.key === "Enter") {
      createButtons();
      setIsGameStarted(true)
      // mainGame(); // игра началась
  }
  }, [createButtons])

  useEffect(() => {
    if (!isGameStarted) {
      document.addEventListener("keydown", startGame);
      return () => {
        document.removeEventListener("keydown", startGame);
      };
    }
  }, [isGameStarted, startGame]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Main
                onLogout={handleLogout}
                isGameStarted={isGameStarted}
                buttonsToGame={buttonsToGame}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
