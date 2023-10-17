import React from 'react';
import '../css/DeptEduObj.css';
import buTitleImage from '../images/bu_title.png';

const textStyles = {
    color: 'darkslategray',
};

const DeptEduObj = () => {
    return (
        <div className='depteduobj'>
            <div className="bottom_box" style={textStyles}>
                <div className="department_title">
                    <img src={buTitleImage} alt="교육목표 이미지" />
                    <h3 style={textStyles}>교육목표</h3>
                </div>
                <div className="bottom_box_text" style={textStyles}>
                    기본적 학문의 소양은 물론 직무 능력, 서비스 마인드를 함양할 수 있도록 정화인증 프로그램 개발을 
                    실시하여<br />뷰티산업 분야에서 중추적인 역할을 담당할 ‘Beautiful 인재'를 양성하고자 합니다.<br />
                    이에 실천적이고 능동적인 미용전문가를 양성하기 위하여 창의적 기술적 능력뿐 아니라 지식 및 인성을 
                    겸비한 실무능력을 갖춘 전인적 미용예술전문가를 양성하는 데 목표를 두고 있습니다.<br />
                </div>
            </div>
        </div>
    );
}

export default DeptEduObj;
