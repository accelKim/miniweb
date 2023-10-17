import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function PostEdit() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // JSON Server의 API 엔드포인트로부터 특정 게시글의 상세 정보를 가져옵니다.
    axios.get(`http://localhost:3001/posts/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }, [id]);

  const handleEdit = () => {
    // 게시글 수정 로직을 구현
    axios.put(`http://localhost:3001/posts/${id}`, post)
      .then(() => {
        navigate(`/posts/${id}`);
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
    
      <label>
        <input type="text" name="title" value={post.title} onChange={handleChange} style={inputStyle} placeholder='제목'/>
      </label>
      <br /><br />
      <label>
        <textarea name="content" value={post.content} onChange={handleChange} style={textareaStyle} placeholder='내용'/>
      </label>
      <br />
      <button onClick={handleEdit} style={buttonStyle}>저장</button>
      <Link to={`/posts/${id}`} style={buttonStyle2}>취소</Link>
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
const inputStyle = {
  width: '500px',
  height: '20px'
}
const hrStyle = {
  width: '800px',
}
const textareaStyle= {
  width:'700px',
  height:'500px',
}

export default PostEdit;