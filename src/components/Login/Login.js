import { Navigate } from "react-router-dom";
import logo from "../../images/image.png";
import "./Login.css";

function Login({ loggedIn, handleLogin, onOpenForgotPopup, isLogin }) {
  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <main className="login">
      <img className="login__logo" src={logo} alt="Edpalm"></img>
      <p className="login__discription">Войти на платформу</p>
      <form className="login__form" onSubmit={handleLogin}>
        <label className="login__label">
          <input type="text" required></input>
          <span className="login__placeholder">Логин</span>
        </label>
        <label className="login__label">
          <input type="password" required></input>
          <span className="login__placeholder">Пароль</span>
        </label>
        <button className="login__btn" type="submit">Войти</button>
        <a href="#" target="_blank" className="login__link">Забыли логин или пароль?</a>
      </form>
    </main>
  );
}

export default Login;
