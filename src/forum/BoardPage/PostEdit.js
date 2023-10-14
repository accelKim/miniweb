import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function PostEdit() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // JSON Server의 API 엔드포인트로부터 특정 게시글의 상세 정보를 가져옵니다.
    axios.get(`http://localhost:3000/posts/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }, [id]);

  const handleEdit = () => {
    // 게시글 수정 로직을 구현
    axios.put(`http://localhost:3000/posts/${id}`, post)
      .then(() => {
        navigate.push(`/posts/${id}`);
      })
      .catch(error => {
        console.error('Error editing post:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  return (
    <div>
      <h1>게시글 수정</h1>
      <label>제목:
        <input type="text" name="title" value={post.title} onChange={handleChange} />
      </label>
      <br />
      <label>내용:
        <textarea name="content" value={post.content} onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleEdit}>저장</button>
      <Link to={`/posts/${id}`}>취소</Link>
    </div>
  );
}

export default PostEdit;