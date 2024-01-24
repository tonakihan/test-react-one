import React, {useEffect, useState} from "react";
import './styles/index.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AppRouter from "./components/AppRouter.jsx";
import { AuthContext } from "./components/contex/index.js";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isWaitRequest, setIsWaitRequest] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    } 
    setIsWaitRequest(false);
  }, []);
  
  return (
    <AuthContext.Provider 
      value={{
        isAuth, setIsAuth,
        isWaitRequest, setIsWaitRequest,
      }}
    >
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
