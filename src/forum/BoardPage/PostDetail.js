import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function PostDetail() {
  const [post, setPost] = useState({}); // post를 객체로 변경
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  };

  return (
    <div>
      <h1>게시글 상세 정보</h1>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={handleDelete}>삭제</button>
      <Link to={`/posts/${id}/edit`}>수정</Link>
    </div>
  );
}

export default PostDetail;
