import React from "react";
import '../css/Location.css';
import buTitleImage from '../images/bu_title.png'; // 상대경로에서 절대경로로 바꿈

const textStyles = {
    color: 'darkslategray',
};

function Culinary_ArtsCareer() {
    return (
        <div className="cosmetology_career">
            <div className="major_bottom_content">
                <div className="department_title">
                    <img src={buTitleImage} className="fr-fil fr-dii" />
                    <h3 style={textStyles}>졸업 후 진로</h3>
                </div>
                <div className="major_career">
                    <ul style={textStyles}>
                        <li>• 국내외 호텔 F&B영업장</li>
                        <li>• 대기업 외식업체 및 프랜차이즈 업체 조리사</li>
                        <li>• 메뉴 R&D부서 및 조리 연구부서, 식품업체 종사원, 음식 연구원, 전통음식연구원, 외식유통관리자</li>
                        <li>• 단체급식 조리사, 학교, 병원, 대학교 사회복지시설의 조리사</li>
                        <li>• 리조트, 콘도 등의 조리사</li>
                        <li>• 푸드코디네이터, 파티플래너, 테이블코디네이터, 외식업 개인 창업</li>
                        <li>• 제과/제빵/디저트 메뉴 개발업체, 베이커리 관련 기업체, 쇼콜라티에(chocolatier), 파티쉐(patissier)</li>
                        <li>• 소믈리에/바리스타 관련 사업체</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Culinary_ArtsCareer;
