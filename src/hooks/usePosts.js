import {useMemo} from "react";

export function useSortedPosts(posts, typeSort) {
  // Возвращает массив в соответствии с параметрами
  const getSortedPosts = useMemo(() => {
    if (typeSort !== 'default') {
      return [...posts].sort((a, b) => 
        a[typeSort].localeCompare(b[typeSort]));
    }
    return posts;
  }, [typeSort, posts]
  );

  return getSortedPosts;
}

export function usePosts(posts, typeSort, query) {
  // Поиск постов в соответсвии с параметрами 
  const sortedPosts = useSortedPosts(posts, typeSort);

  const getSortAndSearchPost = useMemo(() => {
    return sortedPosts.filter((post)=> 
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [sortedPosts, query]
  );

  return getSortAndSearchPost;
}