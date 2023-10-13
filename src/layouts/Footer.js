import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer class="footer">
      <div class="footer-left col-md-4 col-sm-6">
        <p class="about">
          <h2> 오리대학교</h2><span>오리대학교는 평생교육법에 의한 전공대학입니다.</span>
        </p>
        <div class="icons">
          {/* <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <a href="#"><i class="fa fa-google-plus"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a> */}
        </div>
      </div>
      <div class="footer-center col-md-4 col-sm-6">
        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>경기도 성남시 분당구 성남대로 34</span>하나프라자 6층</p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <p>0507-1309-9319</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="#">kosta01@kosta.com</a></p>
        </div>
      </div>
      <div class="footer-right col-md-4 col-sm-6">
        <img class="footer-logo" alt='logo' src="/img/logo.png" style={{ width: 200, height: 130 }} />
        <p class="menu">
          <a href="#">  관련사이트</a> |
          <a href="#">  입학안내</a> |
          <a href="#">  원격교육</a> |
          <a href="#">  종합정보시스템</a> |
          <a href="#">  학술정보관</a> |
          <a href="#">  커리어매니지먼트센터</a>
        </p>
        <p class="name">ⓒ Since 2023 Ori College, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;