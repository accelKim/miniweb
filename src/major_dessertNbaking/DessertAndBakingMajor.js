import React from "react";
import '../css/Location.css';
import '../css/Cosmetology.css';

function DessertAndBakingMajor() {
  const textStyles = {
    color: 'darkslategray'
  };

  return (
    <div className="dessert_and_baking">
      <div className="major_wrapper">
        <div className="major_top_content">
          <br />
        </div>
        <div className="major_ment">
          <div className="major_name">
            <p className="major_name_e" style={textStyles}>
              Dessert & Baking</p>
            <p className="major_name_k" style={textStyles}>디저트베이커리전공</p>
          </div>
          <div className="major_explanation">
            <p style={textStyles}>
              트렌디한 현장 중심의 실무 교육과 국내 & 해외 디저트베이커리 산업에서 개인 역량을 강화하고 
              선도적 역할을 담당할 수 있는 유능한 글로컬(Glocal) 아티장(Artisan)을 양성한다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DessertAndBakingMajor;
