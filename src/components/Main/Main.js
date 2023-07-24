import "./Main.css";

function Main({ isGameStarted, buttonsToGame, countRight, countError }) {
  console.log(buttonsToGame);
  return (
    <main className="main">
      <h1>Тренажёр скоростной печати</h1>
      <div>
        <audio controls>
          <source src="https://575506.selcdn.ru/Методические%20Материалы/Аудио.%20Панель%204,%20Алгебра%209%20класс.mp3" type="audio/mpeg" />
        </audio>
      </div>
      
      {isGameStarted && (
        <p>Вводите на клавиатуре буквы начиная с крайней левой</p>
      )}
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
      {/* <script>
        document.querySelector('audio').addEventListener("play", () => {

        })
      </script> */}
    </main>
    
  );
}

export default Main;
