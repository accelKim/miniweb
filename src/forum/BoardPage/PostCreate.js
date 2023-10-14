
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function PostCreate() {
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  const handleCreate = () => {
    // 새 게시글 생성 로직을 구현
    axios.post('http://localhost:3000/posts', newPost)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Error creating post:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };
 
  return (
    <div>
      <h1>QnA 작성</h1>
      <hr style={hrStyle}/><br />
      <label>제목:
        <input style={inputStyle} type="text" name="title" value={newPost.title} onChange={handleChange} />
      </label>
       <br /><hr style={hrStyle}/><br />
      
      <label>내용:
        <textarea style={textareaStyle} name="content" value={newPost.content} onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleCreate} Link="/" style={buttonStyle}>작성</button>
      <Link to="/" style={buttonStyle2}>취소</Link>
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
  position:'relative',
  left:'30px',
};
// 버튼 스타일
const buttonStyle2 = {
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: 'skyblue',
  color: 'black',
  textDecoration: 'none',
  borderRadius: '5px',
  margin: '10px',
  position:'relative',
  left:'600px',
};
const hrStyle = {
  width: '800px',
}
const inputStyle = {
  width: '500px',
  height: '20px'
}
const textareaStyle= {
  width:'700px',
  height:'500px',
}
export default PostCreate;