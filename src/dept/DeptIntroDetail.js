import React from 'react';
import '../css/DeptIntro.css';

const textStyles = {
    color: 'darkslategray',
};

const DeptIntroDetail = () => {
    return (
        <div>
            <div className="top_box" style={textStyles}>
                <p style={textStyles}>Department of Beauty Arts</p>
                <div className="top_box_title" style={textStyles}>미용예술학부</div>
                <div className="top_box_text" style={textStyles}>
                    미용예술학부는 국내 최대 규모의 미용예술 분야 단일 학부로서,
                    최적의 교육환경을 제공하기 위한 교육인프라 구축과 미용전공의 
                    특성화된 미용교과로 수요자 중심의 맞춤형 교육을 실시하고 있습니다.
                </div>
            </div>
        </div>
    );
}

export default DeptIntroDetail;
