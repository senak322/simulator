import "./Main.css";

function Main({buttons}) {
  return (
    <main className="main">
      
        <h1>Тренажёр скоростной печати</h1>
        <p>Нажмите Enter, чтобы начать</p>
      <div className="main__container">
{buttons.lenght !== 0 ? buttons.map((btn) => {
    return(
        <button>{btn}</button>
    )
} ) : ""}
      </div>
    </main>
  );
}

export default Main;
