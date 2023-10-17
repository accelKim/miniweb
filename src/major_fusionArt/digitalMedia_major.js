import React from "react";
import '../css/Location.css';
import '../css/Cosmetology.css';
import digitalMediaImg from '../images/digital media design.png';

function Digital_Major() {
    const textStyles = {
        color: 'darkslategray',
    };

    return (
        <div className="digital_media_design_department">
            <div className="major_wrapper">
                <div className="major_top_content">
                    <br />
                </div>
                <div className="major_ment">
                    <div className="major_name">
                        <p className="major_name_e" style={textStyles}>Digital Media Design</p>
                        <p className="major_name_k" style={textStyles}>디지털미디어디자인<br />전공</p>
                    </div>
                    <div className="major_explanation">
                        <img src={digitalMediaImg} alt="디지털미디어 이미지" style={{ width: "300px", height: "300px", borderRadius: "10px" }} />
                        <h3 style={textStyles}>"인간존중의 가치를 실천하는 참된 직업교육의 요람"</h3>
                        <br />
                        <p style={textStyles}>
                            디지털미디어디자인전공은 디지털 환경 변화에 대응할 수 있는 디지털네이티브를 위한 디
                            자인학과입니다. 디지털드로잉, 편집디자인, 모션그래픽, 광고•브랜드디자인 등 시각 및 영
                            상 디자인을 바탕으로 한 첨단 디지털 디자인 기법의 습득에서부터 새로운 디지털미디어
                            를 위한 디자인까지, 인간 중심 디자인 실현을 목적으로 기획력과 실행력을 겸비한 전문 디자이너를 양성합니다.
                        </p>
                        <br /><br />
                        <ul style={textStyles}>
                            <li> 콘텐츠를 공유하며 느끼는 예술적 재미와 가치 실현</li>
                            <li> 디지털영상 콘텐츠 분야를 리드할 전문가 양성</li>
                            <li> 융합적 사고를 통해 인간 고유성과 잠재력을 효과적으로 개발할 수 있는<br /> 창의성 가치 강화</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Digital_Major;
