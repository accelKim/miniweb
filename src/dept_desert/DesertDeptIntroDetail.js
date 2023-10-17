import React from 'react';
import '../css/DeptIntro.css';

const textStyles = {
    color: 'darkslategray',
};

const DesertDeptIntroDetail = () => {
    return (
        <div style={textStyles}>
            <div className="top_box">
                <p style={textStyles}>Department of Dessert & Culinary Arts</p>
                <div className="top_box_title" style={textStyles}>디저트·조리학부</div>
                <div className="top_box_text" style={textStyles}>
                21세기 미래 선도 산업으로 주도적인 역할을 담당할 수 있는 서비스 마인드와 <br />기본 소양을 갖춘 인재교육과 외식산업현장에서 필요한 전문지식과 기술을 겸비한<br />
                교육 및 더 나아가 창의적으로 미래를 설계할 수 있는 있는 외식조리전문 인재 양성과 디저트·제빵 관련 분야에 전문 인재를 육성하고자 한다.
                </div>
            </div>
        </div>
    );
}

export default DesertDeptIntroDetail;
