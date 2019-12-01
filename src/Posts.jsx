import React, { useState } from "react";
import { useRedux } from "react-redux-hooks";
import { fetchPosts } from "./actions/postActions";

const PostForm = ({addPost}) => {
    const emptyPost = { title: "", body: "" };
    const [post, setPost] = useState(emptyPost);

    const handleChange = e => {
        setPost({...post, [e.target.name]: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        fetch(jsonSource, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => {
            addPost(data);
            setPost(emptyPost);
        });
    };

    return (
        <div className="PostForm">
            <h2>Add Post</h2>
            <form>
                <input type="text" 
                        name="title" 
                        placeholder="Title..." 
                        value={post.title} 
                        onChange={e => handleChange(e)} />
                <textarea name="body" 
                        placeholder="Body..." 
                        value={post.body} 
                        onChange={e => handleChange(e)} />
                <button type="submit" onClick={e => handleSubmit(e)}>
                    Submit
                </button>
            </form>
        </div>
    );
}

const Posts = () => {
    //const [loading, posts, setPosts] = useFetch(jsonSource);
    const [state, dispatch] = useRedux();

    const addPost = post => {
        if (typeof posts === "undefined") return;
        setPosts([post, ...posts]);
    };

    return (
        <div className="Posts">
            <PostForm addPost={addPost} />
        {state.posts.map(post => (
            <article key= {post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </article>
        ))}
        </div>
    );
}

export default Posts;
