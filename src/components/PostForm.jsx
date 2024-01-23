import React, {useState} from "react"; 
import MyButton from "./UI/button/MyButton.jsx";
import MyInput from "./UI/input/MyInput.jsx";

const PostForm = ({posts, createPost, ...props}) => {

  const [newPost, setNewPost] = useState({
    title: '',
    body: ''
  })

  function addNewPost(event) {
    event.preventDefault();
    if (!newPost.title || !newPost.body) {
      alert("Чи шо, охренел? Заполни поля");
      return;
    }
    
    createPost({
      id: (posts.length !== 0) ? posts[posts.length-1].id+1 : 1,
      ...newPost
    })
    setNewPost({
      title: '', 
      body: ''
    });
  } 

  return (
    <form>
      <MyInput 
        type='text'
        placeholder="Шакалы 1" 
        value={newPost.title}
        onChange={event => setNewPost({...newPost, title: event.target.value})}/>
      <MyInput 
        type='text' 
        value={newPost.body}
        onChange={event => setNewPost({...newPost, body: event.target.value})}
        placeholder="Шакалы 2"/>
      <MyButton onClick={addNewPost}>Вот это техст</MyButton>
    </form>
  )
}

export default PostForm;