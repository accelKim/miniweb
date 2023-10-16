import React from "react";
import '../css/Location.css';
import buTitleImage from '../images/bu_title.png'; // 상대경로에서 절대경로로 바꿈
import digital1 from "../images/digital2.jpg"

function Digital_Career() {
    return (
        <div className="digital_Major_career">
            <div>
                <div className="department_title"> <br /> <br />
                    <img src={buTitleImage} className="fr-fil fr-dii" />
                    <h3>졸업 후 진로</h3>
                </div>
                <div className="major_career">
                    <ul>
                        <li>콘텐츠제작자 / 편집 / 사운드믹싱 / VFX프로듀서 / 기획·홍보 및 광고기획 / 영상디자인</li><br /><br />
                        <div className="career_image">
                            <br />
                            <img src={digital1} style={imgStyle}></img>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

const imgStyle = {
    width: '800px',
}

export default Digital_Career;