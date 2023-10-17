import React from "react";
import '../css/Location.css';
import buTitleImage from '../images/bu_title.png'; // 상대경로에서 절대경로로 바꿈

function DesertAndBakingCareer() {
    return (
        <div className="cosmetology_career">
            <div className="major_bottom_content">
                <div className="department_title">
                    <img src={buTitleImage} className="fr-fil fr-dii" />
                    <h3>졸업 후 진로</h3>
                </div>
                <div className="major_career">
                    <ul>
                        <li>• 파티쉐 & 블랑쉐</li>
                        <li>• 호텔 및 대기업 베이커리</li>
                        <li>• 외식업체&프랜차이즈업체</li>
                        <li>• 개인 창업</li>
                        <li>• 디저트카페</li>
                        <li>• 쇼콜라티에, 케익디자이너, 설탕공예</li>
                        <li>• 떡 가공 전문가</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DesertAndBakingCareer;