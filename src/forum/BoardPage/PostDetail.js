import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function PostDetail() {
  const [post, setPost] = useState({}); // post를 객체로 변경
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/posts/${id}`)
      .then(() => {
        navigate('/post');
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  };
  

  return (
    <div>
      
      <h2 style={titleStyle}>{post.title}</h2>
      <hr style={hrStyle} /><br />
      <p style={contentStyle}>{post.content}</p>
      <hr style={hrStyle} /><br />
      <button onClick={handleDelete} style={buttonStyle}>삭제</button>
      <Link to={`/posts/${id}/edit`} style={buttonStyle2}>수정</Link>
    </div>
  );
}

const buttonStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: 'red',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
  margin: '10px',
};
const buttonStyle2 = {
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: 'skyblue',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
  margin: '10px',
  position:'relative',
  left:'600px',
};
const titleStyle ={ 

}
const hrStyle = {
  width: '800px',
}
const contentStyle ={ 
  margin: "300px",
  
}

export default PostDetail;
