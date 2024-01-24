import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../components/contex";

function Login() {
  const {setIsAuth} = useContext(AuthContext);

  function auth(e) {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }

  return(
    <div>
      <h1>Авторизация пользователя</h1>
      <form onSubmit={(e) => auth(e)}>
        <MyInput type="text" placeholder="Login"></MyInput>
        <MyInput type="password" placeholder="password"></MyInput>
        <MyButton>Вход</MyButton>
      </form>
    </div>
  )
}

export default Login;