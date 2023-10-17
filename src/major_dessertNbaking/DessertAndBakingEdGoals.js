import React from "react";
import '../css/Location.css';
import '../css/CosmetologyEdGoals.css';
import buTitleImage from '../images/bu_title.png';
import BakingImage from '../images/baking.png';

function DessertAndBakingEdGoals() {
    const textStyles = {
        color: 'darkslategray',
        margin: '10px 10px'
    };

    const imageStyles = {
        borderRadius: '10px',
        float: 'left',
        marginRight: '25px'
    };

    return (
        <div className="cosmetology_edgoals">
            <div className="major_bottom_content">
                <div className="department_title">
                    <img src={buTitleImage} alt="Title" />
                    <h3 style={textStyles}>교육목표</h3>
                </div>
                <div className="major_career">
                    <div className="major_career_img">
                        <img src={BakingImage} alt="Career" style={imageStyles} />
                        &nbsp;
                    </div>
                    <ul style={textStyles}>
                        <li>• 산업체 멘토링 & 리쿠르팅 <br /> : 학기 마다 지도교수와 1:1 멘토링을 운영하고 개인에 맞는 산업체를 발굴하여 전문가와 멘토링 진행, 자신감을 고취시키고 디저트베이커리 산업 & 기업과의 리쿠르팅, 일본 동경, 오사카 연수 프로그램 시행을 통한 맞춤형 진로 설계를 목표로 한다.<br /><br /></li>
                        <li>• 실전 프로젝트 <br /> : 산업체에서 요구하는 트렌드를 반영한 제품 제조와 직무를 산업체 전문가에게 교육받고 시뮬레이션실습(파티쉐 & 블랑제 행복디자인, 졸업작품)을 통해 취업의식 고취와 산업체 적응력을 높이는 교육 운영을 목표로 한다.<br /><br /></li>
                        <li>• 국내 최고 교수진 <br /> : (사)한국기능장협회, (사)대한제과협회, 기업대표, R&D 전문가, 데코레이션 전문가, 테이블코디네이터 등 디저트베이커리 관련 최고의 전문가로 구성되어 있으며, 창업 및 취업을 활성화 할 수 있게 디저트베이커리 산업 네트워크를 형성하고 있다.<br /></li>
                    </ul>
                    <p style={textStyles}><br /></p>
                </div>
            </div>
        </div>
    );
}

export default DessertAndBakingEdGoals;
