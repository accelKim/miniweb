
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
        navigate.push('/');
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
      <h1>새 게시글 작성</h1>
      <label>제목:
        <input type="text" name="title" value={newPost.title} onChange={handleChange} />
      </label>
      <br />
      <label>내용:
        <textarea name="content" value={newPost.content} onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleCreate}>작성</button>
      <Link to="/">취소</Link>
    </div>
  );
}

export default PostCreate;