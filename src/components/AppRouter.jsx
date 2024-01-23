import React from "react";
import {Route, Routes} from "react-router-dom";
import Error from "../pages/Error.jsx"
import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";

function AppRouter() {
  return(
    <Routes>
      <Route path="*" element={<Error/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/posts" element={<Posts/>}/>
    </Routes>
  )
}

export default AppRouter;