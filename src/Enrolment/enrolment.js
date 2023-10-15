import React, { useState } from 'react';

function Enrollment() {
  const [courseList, setCourseList] = useState([
    { id: 1, name: '미용의정석', instructor: '김선생님' ,time: '수요일 3~6교시', place:'제1 강의실', total:'30'  },
    { id: 2, name: '융합예술의 정석', instructor: '이선생님',  time: '수요일 3~6교시', place:'제1 강의실', total:'20'},
  ]);

  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState('user456'); // 사용자 아이디

  const addToCart = (course) => {
    setCart([...cart, course]);
  };

  const saveToServer = () => {
    // 사용자 아이디와 장바구니 목록을 서버에 저장하는 API 호출
    fetch('http://localhost:3000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId,
        cart: cart,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('장바구니 목록 서버에 저장됨:', data);
      })
      .catch((error) => {
        console.error('장바구니 목록 서버 저장 중 오류 발생:', error);
      });
  };

  return (
    <div className="Enrollment">
      <h2>수강신청 목록</h2>
      <ul style={listStyle}>
        {courseList.map((course) => (
          <li key={course.id}>
            {course.name} - {course.instructor} - {course.time} - {course.place} - {course.total}{' '}
            <button onClick={() => addToCart(course)}>장바구니에 추가</button>
          </li>
        ))}
      </ul>

      <h2>장바구니</h2>
      <ul style={listStyle}>
        {cart.map((course) => (
          <li key={course.id}>
            {course.name} - {course.instructor}
          </li>
        ))}
      </ul>

      <button onClick={saveToServer} style={buttonStyle}>장바구니에 등록</button>
    </div>
  );
}
const listStyle ={
    border :'1px solid black',
    padding: '20px',
    margin: '20px'
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
export default Enrollment;