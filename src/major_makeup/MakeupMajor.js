import React from "react";
import '../css/Location.css';
import '../css/Cosmetology.css';

const textStyles = {
    color: 'darkslategray',
};

function MakeupMajor() {
  return (
    <div className="cosmetology_major" style={textStyles}>
      <div className="major_wrapper">
        <div className="major_top_content">
          <br />
        </div>
        <div className="major_ment">
          <div className="major_name">
            <p className="major_name_e">Beauty Makeup & Special Effects Makeup</p>
            <p className="major_name_k">메이크업전공</p>
          </div>
          <div className="major_explanation">
            <h2>“행복한 삶을 실천하는 최우수 미용인재 양성”</h2>
            <br />
            <p>
              메이크업전공은 현장에서 필요로 하는 체계적인 이론과 실기교육의 접목을 통하여 미래사회가 요구하는 21C형 뷰티 메이크업, 아트 메이크업, 특수분장 전문 인력을 양성하는데 주력하고 있습니다.<br /><br />
              메이크업전공은<br /><br />
              • 실기능력 차이를 고려한 레벨학습<br />
              • 산업현장의 맞춤형 인재양성을 위한 인증제 프로그램<br />
              • 취업 분야별 교육 프로그램에 따른 분장 및 뷰티 트랙제도<br />
              • 미래형 아티스트의 지표가 될 수 있는 디지털뷰티디자인, 뷰티크리에이터, 3D 프린트를 이용한 교육과정 등 차별화된 메이크업 전문가 양성과 더불어 직무능력 강화 교육을 통한 실무 능력의 증강과 참된 교육의 요람을 실현하기 위하여 꾸준히 노력하며 성장하고 있습니다.<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeupMajor;
