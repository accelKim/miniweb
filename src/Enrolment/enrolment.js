import React, { useState, useEffect } from 'react';
import "../css/Enrolment.css"

function Enrollment() {

  // 데이터를 가져와서 courseList 상태에 저장
  useEffect(() => {
    fetch('http://localhost:3001/courses')
      .then((response) => response.json())
      .then((data) => {
        setCourseList(data);
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      });
  }, []); // useEffect를 한 번만 실행

  const [cart, setCart] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [userId, setUserId] = useState('userABC'); // 사용자 아이디
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const addToCart = (course) => {
    // 중복 체크: 이미 장바구니에 있는 항목인지 확인
    if (!cart.find((item) => item.id === course.id)) {
      setCart([...cart, course]);
    } else {
      const message = '이 강의는 이미 장바구니에 있습니다.';
      setModalContent(message);
      setShowModal(true);
    }
  };

  const saveToServer = () => {
    // 사용자 아이디와 장바구니 목록을 서버에 저장하는 API 호출
    fetch('http://localhost:3001/cart', {
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
        setModalContent('등록을 완료하였습니다.'); // 성공 메시지
        setShowModal(true);
        // 장바구니 초기화
        setCart([]);
      })
      .catch((error) => {
        console.error('장바구니 목록 서버 저장 중 오류 발생:', error);
        setModalContent('등록에 실패하였습니다.'); // 오류 메시지
        setShowModal(true);
      });
  };

  const removeFromCart = (course) => {
    const updatedCart = cart.filter((item) => item.id !== course.id);
    setCart(updatedCart);
  };

  return (
    <div className="Enrollment">
      <h2>수강신청 목록</h2><br />
      <table className="tableStyle" style={tableStyle}>
      <thead className="theadStyle">
        <tr>
          <th>강의번호</th>
          <th>강의이름</th>
          <th>담당교수</th>
          <th>강의일시</th>
          <th>강의장소</th>
          <th>정원</th>
        </tr>
      </thead>
      </table>
      <section className='Section'>
      <ul className='ulStyle' >
        {courseList.map((course) => (
          <li key={course.id} className='keylist'> 
          {course.id} - {course.name} - {course.instructor} - {course.time} - {course.place} - {course.total}{' '}<button onClick={() => addToCart(course)} style={buttonStyle2}>장바구니에 추가</button>
          
           
          </li>
        ))}
        <div className='animation'></div>
       </ul><br />
    <h2>장바구니</h2>
    <ul style={listStyle} className='ulStyle'>
     {cart.map((course) => (
     <li key={course.id} className='keylist'>
        {course.name} - {course.instructor}
         <button onClick={() => removeFromCart(course)} style={buttonStyle3}>장바구니에서 제외</button>
         
     </li>
     ))}
    </ul>
      <button onClick={saveToServer} style={buttonStyle}>장바구니에 등록</button>
      
      </section>
      {/* 모달 창 */}
      {showModal && (
        <div className="modal-container" style={modalContainer}>
          <div className="modal" style={modalStyle}>
            <div className="modal-content" style={modal_Content}>
              <p>{modalContent}</p>
              <button onClick={() => setShowModal(false)} style={buttonStyle4}>닫기</button>
            </div>
          </div>
        </div>
      )}
     
      
    </div>
  );
}
const listStyle ={
  
    padding: 'auto',
    margin: '15px',
    
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
    position:'relative',
    right:'10px'
  };
  const buttonStyle2 = {
    display: 'inline-block',
    padding: '3px 5px',
    backgroundColor: '#0b9fed',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    margin: '10px',
    position:'relative',
    
  };
  const buttonStyle3 = {
    display: 'inline-block',
    padding: '3px 5px',
    backgroundColor: 'red',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    margin: '10px',
    position:'relative',
    
  };
  const buttonStyle4 = {
    border: 'none',
    padding: '8px 16px',
    backgroundColor: '#1a66b2',
    color: 'white',
    borderRadius: '5px',
    cursor : 'pointer',
  };
  

  const modalContainer = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', /* 반투명한 회색 배경 */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '999', /* 모달을 다른 요소 위에 표시 */
  }
  const modalStyle={
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  }
  const modal_Content = {
    marginBottom :'16px',
    
  }
  const tableStyle ={
    width: '910px',
    position:'relative',
    
  }
 


export default Enrollment;