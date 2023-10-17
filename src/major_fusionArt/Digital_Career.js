import React from "react";
import '../css/Location.css';
import buTitleImage from '../images/bu_title.png';
import digital1 from "../images/digital2.jpg"

function Digital_Career() {
    const textStyles = {
        color: 'darkslategray',
    };

    const imgStyles = {
        width: '800px',
        borderRadius: '10px', // 10px의 둥근 효과를 줍니다.
    };

    return (
        <div className="digital_Major_career">
            <div>
                <div className="department_title"> <br /> <br />
                    <img src={buTitleImage} className="fr-fil fr-dii" />
                    <h3 style={textStyles}>졸업 후 진로</h3>
                </div>
                <div className="major_career">
                    <ul style={textStyles}>
                        <li>콘텐츠제작자 / 편집 / 사운드믹싱 / VFX프로듀서 / 기획·홍보 및 광고기획 / 영상디자인</li><br /><br />
                        <div className="career_image">
                            <img src={digital1} style={imgStyles} alt="Digital Career" />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Digital_Career;
