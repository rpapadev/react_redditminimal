import React, { useState, useEffect } from 'react';
import "./TopPosts.css";

function TopPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/popular.json')
      .then(response => response.json())
      .then(data => setPosts(data.data.children.slice(0, 10).map(child => child.data)))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="posts">
      {posts.map(post => (
        <div key={post.id} className='post-border'>
          <h2>{post.title}</h2>
          <img src={post.thumbnail} alt={post.title} /><hr></hr>
          <p>Posted by {post.author} on {new Date(post.created_utc * 1000).toLocaleString()}</p>
          <p>{post.num_comments} comments</p><br></br>
        </div>
      ))}
    </div>
  );
}

export default TopPosts;