import React from "react";
import digital1 from "../images/digital2.jpg"



function Digital_Major() {
 return(
<div>
            <div style={boxStyle}>
                <p>Digital Media Design</p>
                <div className="top_box_title" style={titleStyle}>디지털미디어디자인전공</div>
                <div className="top_box_text">
                    <h2 style={h2Style}>"인간존중의 가치를 실천하는 참된 직업교육의 요람"</h2>
                    <p>디지털미디어디자인전공은 디지털 환경 변화에 대응할 수 있는 디지털네이티브를 위한 디
                        자인학과입니다. 디지털드로잉, 편집디자인, 모션그래픽, 광고•브랜드디자인 등 시각 및 영
                        상 디자인을 바탕으로 한 첨단 디지털 디자인 기법의 습득에서부터 새로운 디지털미디어
                        를 위한 디자인까지, 인간 중심 디자인 실현을 목적으로 기획력과 실행력을 겸비한 전문 디
                        자이너를 양성합니다.</p>
                     <li style={liStyle}>콘텐츠를 공유하며 느끼는 예술적 재미와 가치 실현</li>
                     <li style={liStyle}>디지털영상 콘텐츠 분야를 리드할 전문가 양성</li>
                     <li style={liStyle}>융합적 사고를 통해 인간 고유성과 잠재력을 효과적으로 개발할 수 있는 창의성 가치 강화</li>    
                </div>
            </div><br /><br /><br />
            <div>
                <div className="top_box_title">졸업 후 진로</div><br /><br /><br />
                <div>
                콘텐츠제작자 / 편집 / 사운드믹싱 / VFX프로듀서 / 기획·홍보 및 광고기획 / 영상디자인
                </div>
            </div><br /><br /><br /><br /><br /><br />
            <div>
            <div className="top_box_title">갤러리</div><br /><br /><br />
            <img src={digital1} style={imgStyle}></img>
            </div>
            
        </div>
        
    );
}
const titleStyle = {
    fontSize : "25px",
    fontWeight : "bold",
}
const boxStyle = {
    height : '350px',
    backgroundColor : '#f8f8f8',
}
const h2Style = {
    color :'black',
}
const liStyle ={
    color : 'black',
}
const imgStyle = {
    width :'800px',
}

export default Digital_Major;