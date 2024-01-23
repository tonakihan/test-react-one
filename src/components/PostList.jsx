import React from "react";
import Post from "./PostItem.jsx";
import {TransitionGroup, CSSTransition} from "react-transition-group";
//import MySelect from "./UI/select/MySelect.jsx";
//import MyInput from "./UI/input/MyInput.jsx";

const PostList = ({posts, removePost, ...props}) => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        {(posts.length !== 0) ? "Список постов" : "Нет постов"}
      </h1>
      <div>
        <TransitionGroup>
          {posts.map((post) => 
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
            >
              <Post post={post} remove={removePost}/>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    </div>
  )
}

export default PostList;