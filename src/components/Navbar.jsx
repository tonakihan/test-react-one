import React, { useContext } from "react";
import {Link} from "react-router-dom";
import MyButton from "./UI/button/MyButton";
import { AuthContext } from "./contex";

function Navbar() {
  const {setIsAuth} = useContext(AuthContext);

  function logout() {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return(
    <div className="navBar">
      <MyButton style={{marginLeft: "10px"}} onClick={() => logout()}>Выход</MyButton>
      <nav>
        <ul>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;