import React from "react";
import '../css/Location.css';
import '../css/CosmetologyEdGoals.css';
import buTitleImage from '../images/bu_title.png'; // 상대경로에서 절대경로로 바꿈
import PGCPImage from '../images/cosmetology_career.png'; // 상대경로에서 절대경로로 바꿈

const textStyles = {
    color: 'darkslategray',
};

function CosmetologyEdGoals() {
    return (
        <div className="cosmetology_edgoals">
            <div className="major_bottom_content">
                <div className="department_title">
                    <img src={buTitleImage} alt="Title" />
                    <h3 style={textStyles}>교육목표</h3>
                </div>
                <div className="major_career">
                    <ul style={textStyles}>
                        <li>• 행복한 인생설계를 할 수 있는 자존감 있는 인재를 양성합니다.</li><br />
                        <li>• 다변하는 뷰티산업 환경을 이해하고 비즈니스 모델을 분석하여 뷰티전문가로 성장합니다.</li><br />
                        <li>• 헤어디자인에 있어 중요한 항목인 디자인 능력을 함양하고, 숙련된 기술로 디자인 역량을 펼칠 수 있도록 교육합니다.</li><br />
                        <li>• 트렌드를 분석하여 인간의 심미적 욕구를 파악하고 창의적 조형 디자인을 할 수 있는 헤어디자이너를 양성합니다.</li><br />
                        <li>• 소통과 공감능력, 서비스 매너를 갖추어 상황에 맞게 자신을 드러낼 수 있는 전문 뷰티 커뮤니케이터를 양성합니다.</li><br />
                    </ul>
                    <p style={textStyles}><br /></p>
                    <div className="major_career_img">
                        <img src={PGCPImage} alt="Career" />
                        &nbsp;
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CosmetologyEdGoals;
