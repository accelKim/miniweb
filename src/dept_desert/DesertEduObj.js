import React from 'react';
import '../css/DeptEduObj.css';
import buTitleImage from '../images/bu_title.png'; // 상대경로에서 절대경로로 바꿈

const textStyles = {
    color: 'darkslategray',
};

const DesertEduObj = () => {
    return (
        <div className='depteduobj' style={textStyles}>
            <div className="bottom_box">
                <div className="department_title">
                    <img src={buTitleImage} alt="교육목표 이미지" />
                    <h3>교육목표</h3>
                </div>
                <div className="bottom_box_text">
                    • 외식산업서비스에 필요한 타인을 배려하고 존중하는 기본 소양을 갖춘 인재양성<br />
                    • 현장맞춤형 전문 인재 양성을 기본으로 더 나아가 산업현장에서 필요한 전문지식과 기술을 갖춘 멀티형 인재양성<br />
                    • 멀티플러스 창의적인 인재교육을 통한 미래 자신의 꿈과 행복을 실현하는 인재양성<br />
                </div>
            </div>
        </div>
    );
}

export default DesertEduObj;
