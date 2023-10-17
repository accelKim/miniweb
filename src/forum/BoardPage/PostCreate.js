
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function PostCreate() {
  const [newPost, setNewPost] = useState({ title: '', content: '', date: new Date().toLocaleDateString() });
  const navigate = useNavigate();

  const handleCreate = () => {
    axios.post('http://localhost:3001/posts', newPost)
      .then(() => {
        navigate('/post');
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
      <label>
        <input style={inputStyle} type="text" name="title" value={newPost.title} onChange={handleChange} placeholder='제목'/>
      </label>
      <br /><br />
      <label>
        <textarea style={textareaStyle} name="content" value={newPost.content} onChange={handleChange} placeholder='내용'/>
      </label>
      <br />
      <button onClick={handleCreate} style={buttonStyle}>작성</button>
      <Link to="/post" style={buttonStyle2}>취소</Link>
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