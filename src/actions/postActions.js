import { FETCH_POSTS, NEW_POST } from "./types";

const addPost = post => {
    if (typeof posts === "undefined") return;
    setPosts([post, ...posts]);
};

export const fetchPosts = () => dispatch => {
    const jsonSource = "https://jsonplaceholder.typicode.com/posts";
    fetch(jsonSource)
    .then(res => res.json())
    .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
    }));
};
