import React from "react";
import {Route, Routes} from "react-router-dom";
import Error from "../pages/Error.jsx"
import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import PostId from "../pages/PostId.jsx";

function AppRouter() {
  return(
    <Routes>
      <Route path="*" element={<Error/>} />
      <Route path="/about" element={<About/>}/>
      <Route exact path="/posts" element={<Posts/>}/>
      <Route exact path="/posts/:id" element={<PostId/>}/>
    </Routes>
  )
}

export default AppRouter;