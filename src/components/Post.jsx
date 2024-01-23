import React from "react";
import MyButton from "./UI/button/MyButton";

const Post = ({post, remove, ...props}) => {
  return (
    <div className="post">
      <h2>{post.id}. {post.title}</h2>
      <p>{post.body}</p>
      <MyButton onClick={() => remove(post.id)}>Cносим</MyButton>
    </div>
  )
}

export default Post;