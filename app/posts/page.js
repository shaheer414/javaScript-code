"use client";
import React, { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]); // fixed destructuring

useEffect(() => {
    async function fetchPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
    }
    fetchPosts();
}, []);

    return (
        <>
            <h1>Posts</h1>
            <div className="post-container">
            {posts.map(({ id, title, body }) => (
            <div key={id} className="post-card">
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        ))}
    </div>
    </>
);
}

export default Posts;
