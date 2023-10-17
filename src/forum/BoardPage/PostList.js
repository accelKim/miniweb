import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import "../../css/PostListStyle.scss"

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div style={textStlye}>
      <ul>
        {posts.map((post, index) => (
            <ol className='gradient-list'>
            <li key={post.id} >
            <Link to={`/posts/${post.id}`} >
            <span className='key'>{post.id}</span><span style={posttitleStyle}>{post.title}</span> <span style={postdateStyle}>{post.date}</span> 
            </Link>
          </li>
          </ol>
        ))}
      </ul>
      <Link to="/create" style={buttonStyle}>글 작성</Link>
    </div>
  );
}

const textStlye ={
  color: '#2F4F4F'
}
// 버튼 스타일
const buttonStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: '#1a66b2',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
  margin: '10px',
};
const hrStyle = {
  width: '800px',
  color: '#2F4F4F',
}
const postidStyle = {
  color: '#2F4F4F',
  
}
const posttitleStyle = {
  position: 'relative',
  color: '#2F4F4F',
  left: '200px',
  
}
const postdateStyle = {
  color: '#2F4F4F',
  position: 'relative',
  left:'500px'
  
  
  
}
const textboxStyle ={
  width:'800px',
  height:'25px',
  textAlign: 'left',
  color: '#2F4F4F',
}

export default PostList;