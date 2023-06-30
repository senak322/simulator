import "./Main.css";

function Main({ isGameStarted, buttonsToGame, countRight, countError }) {
  console.log(buttonsToGame);
  return (
    <main className="main">
      <h1>Тренажёр скоростной печати</h1>
      {isGameStarted && <p>Вводите на клавиатуре буквы начиная с крайней левой</p>}
      {isGameStarted && <p>Правильно: {countRight}</p>}
      {isGameStarted && <p>Ошибки: {countError}</p>}
      {!isGameStarted && <p>Нажмите Enter, чтобы начать</p>}
      <div className="main__container">
        {isGameStarted
          ? buttonsToGame.map((btn, index) => {
              return (
                <button className={`main__button ${btn.color}`} key={index}>
                  {btn.char}
                </button>
              );
            })
          : ""}
      </div>
    </main>
  );
}

export default Main;
