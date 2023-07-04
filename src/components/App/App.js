import { useState, useCallback, useEffect, useMemo } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../Header/Header";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import Login from "../Login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [buttonsToGame, setButtonsToGame] = useState([]);
  const [countRight, setCountRight] = useState(0);
  const [countError, setCountError] = useState(-1);
  const buttonsToTrain = useMemo(() => {
    return ["j", "f", "k", "d", " "];
  }, []);
  const colors = useMemo(() => {
    return [
      "button red",
      "button blue", 
      "button grey",
      "button green",
      "button purple",
    ];
  }, []);

  // let buttonsArr = useMemo(() => [], []);

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

  const pressCheck = useCallback(
    (e) => {
      if (e.key === buttonsToGame[0].char) {
        setCountRight((el) => (el += 1));
        let buttons = buttonsToGame;
        buttons.splice(0, 1);
        setButtonsToGame(buttons);
      } else {
        setCountError((el) => (el += 1));
      }
    },
    [buttonsToGame]
  );

  const startGame = useCallback(
    (e) => {
      if (e.key === "Enter") {
        createButtons();
        setIsGameStarted(true);
      }
    },
    [createButtons]
  );

  useEffect(() => {
    if (countRight === 20) {
      alert("Вы выиграли");
      setCountRight(0);
      setCountError(-1);
      setIsGameStarted(false);
    }
    if (countError === 20) {
      alert("Вы проиграли");
      setCountRight(0);
      setCountError(-1);
      setIsGameStarted(false);
    }
  }, [countRight, countError]);

  useEffect(() => {
    if (!isGameStarted) {
      document.addEventListener("keydown", startGame);
      return () => {
        document.removeEventListener("keydown", startGame);
      };
    }
  }, [isGameStarted, startGame]);

  useEffect(() => {
    if (isGameStarted) {
      document.addEventListener("keyup", pressCheck);
      return () => {
        document.removeEventListener("keyup", pressCheck);
      };
    }
  }, [isGameStarted, pressCheck]);

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
                countRight={countRight}
                countError={countError}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            
              <Login
              loggedIn={loggedIn}
              />
            
          }
        />
      </Routes>
    </div>
  );
}

export default App;
