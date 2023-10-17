import React from 'react';
import '../css/DeptIntro.css';
import refinementImage from '../images/cla-icon.jpg'; // 상대경로에서 절대경로로 바꿈

const textStyles = {
    color: 'darkslategray',
};

const imageStyles = {
    borderRadius: '10px',
    width: '300px',
    height: '300px',
    display: 'block',
    margin: '0 auto', // Center the image horizontally
};

const RefinementDeptIntroDetail = () => {
    return (
        <div>
            <div className="top_box">
                <p style={textStyles}>Refinement</p>
                <div className="top_box_title" style={textStyles}>교양</div>
                <div className="top_box_text" style={textStyles}>
                    <h3 style={textStyles}>“인성과 지성을 겸비한 기본을 갖춘 교양인”</h3><br />
                     21세기 미래 선도 산업으로 주도적인 역할을 담당할 수 있는 서비스 마인드와
                     기본 소양을 갖춘 인재교육과 외식산업현장에서 필요한 전문지식과 기술을 겸비한<br /><br />
                     <img src={refinementImage} alt="이미지" style={imageStyles} />
                </div>
            </div>
        </div>
    );
};

export default RefinementDeptIntroDetail;
