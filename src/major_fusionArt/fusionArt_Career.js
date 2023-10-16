import React from "react";
import '../css/Location.css';
import buTitleImage from '../images/bu_title.png'; // 상대경로에서 절대경로로 바꿈
import picture1 from '../images/videoclass.png';

function FusionArt_Career() {
    return (
        <div className="fusionArt_career">
            <div>
                <div className="department_title"> <br /> <br />
                    <img src={buTitleImage} className="fr-fil fr-dii" />
                    <h3>졸업 후 진로</h3>
                </div>
                <div className="major_career">
                    <ul>
                        <li>방송, 영화, 광고, 크리에이티브 콘텐츠 디렉터(PD, 감독), 촬영감독(드론 촬영), 영상기술감독, VFX 감독, 조명감독, 사운드 디자이너</li><br /><br />
                        <div className="career_image">
                            <br />
                            <img src={picture1} alt="Video Production" />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FusionArt_Career;
