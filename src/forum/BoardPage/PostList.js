import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Router} from 'react-router-dom';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      <h1>QnA</h1>
      <hr style={hrStyle}/>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h3 style={postStyle}>{post.title}</h3>
              <hr style={hrStyle}/>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/create" style={buttonStyle}>글 작성</Link>
    </div>
  );
}

// 버튼 스타일
const buttonStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: 'blue',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
  margin: '10px',
};
const hrStyle = {
  width: '800px',
  color: 'black',
}
const postStyle = {
  color: 'black',
}

export default PostList;