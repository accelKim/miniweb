import React from "react";
import '../css/Location.css';
import '../css/CosmetologyEdGoals.css';
import buTitleImage from '../images/bu_title.png';
import CulinaryArtsImage from '../images/cooking.png';

const textStyles = {
    color: 'darkslategray',
};

const imageStyles = {
    borderRadius: '10px',
};

function Culinary_ArtsEdGoals() {
    return (
        <div className="cosmetology_edgoals">
            <div className="major_bottom_content">
                <div className="department_title">
                    <img src={buTitleImage} alt="Title" />
                    <h3 style={textStyles}>교육목표</h3>
                </div>
                <div className="major_career">
                    <ul style={textStyles}>
                        <li>• 조리 기초 지식 함양 및 인성교육 과정을 통한 사회 실무 인재 양성<br /></li>
                        <li>• 조리전공 분야의 멀티형 교육과정<br /></li>
                        <li>• 현장 직무 연계 및 취업 강화를 위한 현장 맞춤형 교육과정</li>
                        <li>• 외식조리 분야의 멀티 플러스 창조적인 인재양성</li>
                    </ul>
                    <p style={textStyles}><br /></p>
                    <div className="major_career_img">
                        <img src={CulinaryArtsImage} alt="Career" style={imageStyles}/>
                        &nbsp;
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Culinary_ArtsEdGoals;
