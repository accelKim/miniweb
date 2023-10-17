import React from 'react';
import '../css/DeptEduObj.css';
import buTitleImage from '../images/bu_title.png'; // 상대경로에서 절대경로로 바꿈

const textStyles = {
    color: 'darkslategray',
};

const RefinementEduObj = () => {
    return (
        <div className='depteduobj'>
            <div className="bottom_box">
                <div className="department_title">
                    <img src={buTitleImage} alt="교육목표 이미지" />
                    <h3 style={textStyles}>교육목표</h3>
                </div>
                <div className="bottom_box_text" style={textStyles}>
                    • 인간과 공동체 이해를 바탕으로 한 바른 인성 함양<br />
                    • 전문 직업인으로서의 핵심역량 증진에 초석이 되는 직업기초 소양능력 함양<br />
                    • 더불어 함께사는 글로벌 민주시민으로서의 세계화, 정보화 능력 함양<br />
                    • 행복한 삶을 주도적으로 설계하기 위한 자기개발 능력 함양<br />
                </div>
            </div>
        </div>
    );
}

export default RefinementEduObj;
