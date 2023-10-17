import React from 'react';
import '../css/DeptEduObj.css';
import buTitleImage from '../images/bu_title.png'; // 상대경로에서 절대경로로 바꿈

const textStyles = {
    color: 'darkslategray',
};

const DeptEduObj = () => {
    return (
        <div className='depteduobj' style={textStyles}>
            <div className="bottom_box">
                <div className="department_title">
                    <img src={buTitleImage} alt="교육목표 이미지" />
                    <h3 style={textStyles}>교육목표</h3>
                </div>
                <div className="bottom_box_text" style={textStyles}>
                    각 전공별 전문성 증진, 전공 간 연계를 통한 경험의 확장이 가능하도록 유연하고 역동적인 교육과정을 제공함으로써 영상 및 공연예술
                    분야에서 전공 간, 예술과 기술 간 경계를 허물고 다양한 장르의 문화예술 콘텐츠를 창출할 수 있는 융합형 문화예술인을 양성합니다.
                </div>
            </div>
        </div>
    );
}

export default DeptEduObj;
