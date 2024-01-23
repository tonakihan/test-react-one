import React, {useState, useEffect} from "react";
import PostList from "./../components/PostList.jsx";
import PostForm from "./../components/PostForm.jsx";
import PostFilter from "./../components/PostFilter.jsx";
import MyModal from "./../components/UI/MyModal/MyModal.jsx";
import MyButton from "./../components/UI/button/MyButton.jsx";
import {usePosts} from "./../hooks/usePosts.js";
import PostService from "./../API/PostService.js";
import Loader from "./../components/UI/Loader/Loader.jsx";
import useFetching from "./../hooks/useFetching.js";
import {getPageCount} from "./../components/utils/pages.js";
import Pagination from "./../components/UI/pagination/Pagination.jsx";


function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    typeSort: 'default',
    searchQuery: ''
  });
  const [modal, setModal] = useState(false);
  const getSortAndSearchPost = usePosts(posts, filter.typeSort, filter.searchQuery);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const res = await PostService.getAll(limit, page);
    const totalCount = res.headers['x-total-count'];
    setPosts(res.data);
    setTotalPages(
      getPageCount(totalCount, limit)
    );
  })

  useEffect(() => {
    fetchPosts()
  }, [page]);

  function createPost(newPosts) {
    setPosts([...posts, newPosts]);
    setModal(false);
  }

  function removePost(id) {
    setPosts(
      posts.filter((post) => post.id !== id)
    );
  }

  return (
    <div className="App">
      <MyButton 
        onClick={() => setModal(true)}
        style={{margin: "20px"}}
      >
        Создать пост
      </MyButton>
      <MyModal visable={modal} setVisable={setModal}>
        <PostForm posts={posts} createPost={createPost}/>
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError && <h1> Имеется ошибка </h1>}
      <Loader visable={isPostsLoading}>Грузим кирпичи... Шутка.</Loader>
      <PostList 
        posts={getSortAndSearchPost} 
        removePost={removePost} 
        filter={filter} setFilter={setFilter}
      />
      <Pagination totalPages={totalPages} page={page} changePage={setPage}/>
    </div>
  );
}

export default Posts;
