import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className='footer_info'>
          <span>찾아오시는길</span>
          <span>이메일무단수집거부</span>
          <span>개인정보처리방침</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;