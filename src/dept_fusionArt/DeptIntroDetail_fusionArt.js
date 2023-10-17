import React from 'react';
import '../css/DeptIntro.css';

const textStyles = {
    color: 'darkslategray',
};

const DeptIntroDetail = () => {
    return (
        <div style={textStyles}>
            <div className="top_box">
                <p style={textStyles}>Department of Media & Performing Arts</p>
                <div className="top_box_title" style={textStyles}>융합예술학부</div>
                <div className="top_box_text" style={textStyles}>
                융합예술학부는 영상제작 / 미디어디자인 및 연기 / 뮤지컬 / 실용댄스 분야를 중심으로 
                개인의 다재다능한 예술적 재능이 세상의 변화와 발맞춰 나갈 수 있도록 창의적이고 
                미래지향적인 교육시스템을 운영합니다. 
                </div>
            </div>
        </div>
    );
}

export default DeptIntroDetail;
