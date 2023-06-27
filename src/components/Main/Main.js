import "./Main.css";

function Main({ isGameStarted, buttonsToGame }) {
  return (
    <main className="main">
      <h1>Тренажёр скоростной печати</h1>
      {!isGameStarted && <p>Нажмите Enter, чтобы начать</p>}
      <div className="main__container">
        {isGameStarted
          ? buttonsToGame.map((btn, index) => {
            
              return <button className={`main__button ${btn.color}`} key={index}>{btn.char}</button>;
            })
          : ""}
      </div>
    </main>
  );
}

export default Main;
