import React from 'react';
import '../css/main.css';

function Footer() {
  return (
      <footer>
        {/* 푸터에 표시할 메뉴와 SNS 계정 링크는 #bottomMenu로 묶고, 회사 주소와 연락처는 #company로 묶음 */}
        <div id="bottomMenu">
          <ul>
            <li><a href="#">회사 소개</a></li>
            <li><a href="#"></a>개인정보처리방침</li>
            <li><a href="#"></a>여행약관</li>
            <li><a href="#"></a>사이트맵</li>
          </ul>
          <div id="sns">
            <ul>
              <li><a href="#"><img src="images/sns-1.png" alt="" /></a></li>
              <li><a href="#"><img src="images/sns-2.png" alt="" /></a></li>
              <li><a href="#"><img src="images/sns-3.png" alt="" /></a></li>
            </ul>
          </div>
        </div>
        <div id="company">
          <p>제주특별자치도 ***동 ***로 *** (대표전화) 123-456-7890</p>
        </div>
      </footer>
  );
};

export default Footer;