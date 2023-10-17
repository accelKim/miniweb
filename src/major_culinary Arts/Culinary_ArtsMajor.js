import React from "react";
import '../css/Location.css';
import '../css/Cosmetology.css';

const textStyles = {
    color: 'darkslategray',
};

function Culinary_ArtsMajor() {
  return (
    <div className="culinary_arts">
      <div className="major_wrapper">
        <div className="major_top_content">
        </div>
        <div className="major_ment">
          <div className="major_name">
            <p className="major_name_e" style={textStyles}>
              Culinary Arts
            </p>
            <p className="major_name_k" style={textStyles}>
              조리전공
            </p>
          </div>
          <div className="major_explanation" style={textStyles}>
            <p>
              21세기 미래형 선도 산업으로 주도적 역할을 담당하고 있는 외식산업이라는 새로운 분야로 진출할 수 있는 경쟁력 있는 프로그램을 제공하고 있다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Culinary_ArtsMajor;
