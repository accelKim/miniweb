import React from "react";
import '../css/Location.css';
import '../css/CosmetologyEdGoals.css';
import buTitleImage from '../images/bu_title.png'; // 상대경로에서 절대경로로 바꿈

const textStyles = {
    color: 'darkslategray',
};

function MakeupEdGoals() {
    return (
        <div className="cosmetology_edgoals">
            <div className="major_bottom_content">
                <div className="department_title">
                    <img src={buTitleImage} alt="Title" />
                    <h3 style={textStyles}>교육목표</h3>
                </div>
                <div className="major_career">
                    <ul style={textStyles}>
                        <li>• 인간존중의 가치 실현과 행복 나눔을 실천할 수 있는 통합적 인성교육 강화</li><br />
                        <li>• 꿈의 실현을 통해 행복한 삶을 찾아갈 수 있는 진로교육 강화</li><br />
                        <li>• 수요자 중심의 교육과정 편성을 통한 산업체 맞춤형 인재 양성</li><br />
                        <li>• 예술성과 전문성이 어우러진 융합교육을 통한 21C형 창의적 인재 양성</li><br />
                        <li>• 디지털 미디어 교육을 통한 미래지향형 인재 양성</li><br />
                    </ul>
                    <p style={textStyles}><br /></p>
                </div>
            </div>
        </div>
    );
}

export default MakeupEdGoals;
