import React from "react";
import '../css/Location.css';
import buTitleImage from '../images/bu_title.png'; // 상대경로에서 절대경로로 바꿈

const textStyles = {
    color: 'darkslategray',
};

function CosmetologyCareer() {
    return (
        <div className="cosmetology_career">
            <div className="major_bottom_content">
                <div className="department_title">
                    <img src={buTitleImage} className="fr-fil fr-dii" />
                    <h3 style={textStyles}>졸업 후 진로</h3>
                </div>
                <div className="major_career">
                    <ul style={textStyles}>
                        <li>• 헤어디자인분야 : 헤어드레서, 바버(맨즈헤어드레서)</li><br />
                        <li>• 교육분야 : 교사(고교 실기교사, 미용학원 강사, 중고교 방과후교사, 미용직업전문학교 교사, 살롱 교육강사, 헤어제품브랜드회사 기술강사)</li><br />
                        <li>• 두피관리분야 : 두피·모발관리사(트리콜로지스트)</li><br />
                        <li>• 특수헤어분야 : 가모코디네이터, 특수머리전문디자이너, 웨딩헤어코디네이터</li><br />
                        <li>• 방송&amp;매체관련분야 : 무대·방송 헤어코디네이터, 뷰티크리에이터</li><br />
                        <li>• 헤어브랜드 및 살롱경영관련 분야 : 헤어브랜드회사 사원, 뷰티매니져, 미용경영인</li><br />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CosmetologyCareer;
