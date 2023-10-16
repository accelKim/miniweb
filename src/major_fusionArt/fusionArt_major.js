import React from "react";
import picture1 from '../images/videoclass.png';

function Video_Major() {
    return (
        <div>
            <div style={boxStyle}>
                <p>Video prodution</p>
                <div className="top_box_title">영상제작전공</div>
                <div className="top_box_text">
                    <h2 style={h2Style}>"인간존중의 가치를 실천하는 참된 직업교육의 요람"</h2>
                    <p>영상제작전공은 방송, 영화, 광고, M/V, 뉴미디어 플랫폼 기반 영상 콘텐츠 등 다양한 미디
                        어 환경과 급변하는 제작시스템에 유연하게 적응할 수 있는 영상제작 분야 현장 전문가를
                        양성합니다. 예술적 감성의 창의력을 바탕으로 기획, 연출, 촬영 및 편집, 사운드믹싱, VFX
                        를 포함한 후반작업 등의 제작과정을 집중적으로 학습할 수 있도록 예술과 기술이 결합된
                        창의 융합형 교육과정을 운영합니다. </p>
                    <li style={liStyle}>올바른 시선으로 사회를 바라보는 참된 인성과 소통력을 갖춘 인재 양성</li>
                    <li style={liStyle}>영상산업 분야를 리드할 Creative & Technology 전문가 양성</li>
                    <li style={liStyle}>행복한 삶의 주체자로서 미디어 시대를 선도할 영상전문가 양성</li>
                </div>
            </div><br /><br /><br />
            <div>
                <div className="top_box_title">졸업 후 진로</div><br /><br /><br />
                <div>
                    방송, 영화, 광고, 크리에이티브 콘텐츠 디렉터(PD, 감독), 촬영감독(드론촬영), 영상기술감독, VFX감독, 조명감독, 사운드디자이너
                </div>
            </div><br /><br /><br /><br /><br /><br />
            <img src={picture1}></img>
        </div>

    );
}

const boxStyle = {
    height: '350px',
    backgroundColor: '#f8f8f8',
}
const h2Style = {
    color: 'black',
}
const liStyle = {
    color: 'black',
}

export default Video_Major;