import React from "react";
import '../css/Location.css';
import '../css/Cosmetology.css';

function Video_Major() {
    const liStyle = {
        color: 'darkslategray',
    };

    return (
        <div className="video_product_department">
            <div className="major_wrapper">
                <div className="major_top_content">
                    <br />
                    <div className="major_ment">
                        <div className="major_name">
                            <p className="major_name_e">
                                Video production
                            </p>
                            <p className="major_name_k">영상제작전공</p>
                        </div>
                        <div className="major_explanation">
                            <p>"인간존중의 가치를 실천하는 참된 직업교육의 요람"</p><br /><br />
                            <p>영상제작전공은 방송, 영화, 광고, M/V, 뉴미디어 플랫폼 기반 영상 콘텐츠 등 다양한 미디어 환경과 급변하는 제작 시스템에 유연하게 적응할 수 있는 영상 제작 분야 현장 전문가를 양성합니다. 예술적 감성의 창의력을 바탕으로 기획, 연출, 촬영 및 편집, 사운드 믹싱, VFX를 포함한 후반작업 등의 제작 과정을 집중적으로 학습할 수 있도록 예술과 기술이 결합된 창의 융합형 교육과정을 운영합니다.</p>
                            <br />
                            <li style={liStyle}>올바른 시선으로 사회를 바라보는 참된 인성과 소통력을 갖춘 인재 양성</li>
                            <li style={liStyle}>영상산업 분야를 리드할 Creative & Technology 전문가 양성</li>
                            <li style={liStyle}>행복한 삶의 주체자로서 미디어 시대를 선도할 영상 전문가 양성</li>
                        </div>
                    </div>
                    <br /><br /><br />
                </div>
            </div>
        </div>
    );
}

export default Video_Major;
