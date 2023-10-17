import React from "react";
import '../css/Location.css';
import buTitleImage from '../images/bu_title.png'; // 상대경로에서 절대경로로 바꿈

const textStyles = {
    color: 'darkslategray',
};

function MakeupCareer() {
    return (
        <div className="cosmetology_career">
            <div className="major_bottom_content">
                <div className="department_title">
                    <img src={buTitleImage} className="fr-fil fr-dii" />
                    <h3 style={textStyles}>졸업 후 진로</h3>
                </div>
                <div className="major_career">
                    <ul style={textStyles}>
                        <li>• 메이크업 아티스트</li>
                        <li>• 화장품 브랜드 뷰티컨설던트</li>
                        <li>• 방송연예 코디네이터</li>
                        <li>• 뷰티크리에이터</li>
                        <li>• 스타일리스트</li>
                        <li>• 웨딩플레너</li>
                        <li>• 메이크업 교육전문가</li>
                        <li>• 뷰티분장사</li>
                        <li>• 무대분장사</li>
                        <li>• 방송분장사</li>
                        <li>• 영화분장사</li>
                        <li>• 특수분장사</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MakeupCareer;
