import React from "react";
import MyButton from "./UI/button/MyButton";
import {Link} from "react-router-dom";
import cl from "./UI/button/Mybutton.module.css";

const Post = ({post, remove, ...props}) => {

  return (
    <div className="post">
      <h2>{post.id}. {post.title}</h2>
      <p>{post.body}</p>
      <Link 
        className={[cl.myBtn, cl.link].join(' ')} 
        to={`/posts/${post.id}`}
      >
        Открыть
      </Link>
      <MyButton onClick={() => remove(post.id)}>Cносим</MyButton>
    </div>
  )
}

export default Post;