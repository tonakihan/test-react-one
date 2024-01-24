import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import useFetching from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";

// Боль моя дырка задница
// callback у useFetching не принимает параметры, а если и принимает, то они undefined.
function PostId() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostByID, isPostLoading, errorPost] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading, errorCom] = useFetching(async () => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostByID();
    fetchComments();
  }, [params]);

  return(
    <div>
      {isPostLoading
        ? <Loader visable={isPostLoading}/>
        : <h1>{post.id}. {post.title}</h1>
      }
      <div>
        <h2>Комментарии</h2>
        <Loader visable={isComLoading}/>
        {comments.map(comm => {
          return(
            <div key={comm.id} style={{marginTop: "10px"}}>
              <h5>{comm.email}</h5>
              <p>{comm.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PostId;