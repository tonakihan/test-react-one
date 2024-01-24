import React, {useContext} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import Error from "../pages/Error.jsx"
import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import PostId from "../pages/PostId.jsx";
import Login from "../pages/Login.jsx";
import {AuthContext} from "./contex/index.js";
import Loader from "./UI/Loader/Loader.jsx";

function AppRouter() {
  const {isAuth, isWaitRequest} = useContext(AuthContext);

  if (isWaitRequest) {
    return(
      <div>
        <h1>Подожди. Запрос к серверу...</h1>
        <Loader visable={isWaitRequest}/>
      </div>
    )
  }

  return(
    <div>
      {isAuth
      ? 
      <Routes>
        <Route path="*" element={<Error/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/posts/:id" element={<PostId/>}/>
        <Route path="/login" element={<Navigate to="/posts"/>}/>
        <Route path="/" element={<Navigate to="/posts"/>}/>
      </Routes>
      :
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Navigate to="/login"/>}/>
      </Routes>
      }
    </div>
  )
}

export default AppRouter;