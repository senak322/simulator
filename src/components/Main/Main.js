import "./Main.css";

function Main({ isGameStarted, buttonsArr }) {
  return (
    <main className="main">
      <h1>Тренажёр скоростной печати</h1>
      {!isGameStarted && <p>Нажмите Enter, чтобы начать</p>}
      <div className="main__container">
        {isGameStarted
          ? buttonsArr.map((btn, index) => {
              return <button key={index}>{btn}</button>;
            })
          : ""}
      </div>
    </main>
  );
}

export default Main;
