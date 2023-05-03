import React, { useState, useEffect } from 'react';
import "./TopPosts.css";

function TopPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/popular.json')
      .then(response => response.json())
      .then(data => {
        setPosts(data.data.children);
      });
  }, []);

  return (
    <div className="top-posts">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h3>{post.data.title}</h3>
          <img src={post.data.thumbnail} alt="thumbnail" />
          <p>Author: {post.data.author}</p>
          <p>Date: {new Date(post.data.created_utc * 1000).toLocaleString()}</p>
          <p>Comments: {post.data.num_comments}</p>
        </div>
      ))}
    </div>
  );
}

export default TopPosts;
