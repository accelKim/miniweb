import React from "react";
import '../css/Location.css';
import '../css/Cosmetology.css';

const textStyles = {
    color: 'darkslategray',
};

function CosmetologyMajor() {
  return (
    <div className="cosmetology_major">
      <div className="major_wrapper">
        <div className="major_top_content">
            <br />
          </div>
          <div className="major_ment">
            <div className="major_name">
              <p className="major_name_e" style={textStyles}>Cosmetology</p>
              <p className="major_name_k" style={textStyles}>미용전공</p>
            </div>
            <div className="major_explanation" style={textStyles}>
              <h2>“행복한 삶을 실천하는 최우수 미용인재 양성”</h2><br /><br />
              <p>
                미용전공은 본교의 교육목표를 실현하고자 "행복한 삶을 실천하는 최우수 미용인재 양성"을 전공 비전으로 삼고 있다.<br /><br />
                트렌드를 반영한 다양한 전공 교과를 편성하였고, 교육과정을 통해 학생 스스로 진로와 취업을 결정할 수 있도록 함으로써 자신의 목표를 즐겁게 실현할 수 있도록 하였다.<br /><br />
                고객서비스 마인드와 교양 교육 강화를 통해 바른 인성을 함양하고, 체계적인 학문적 이론과 산업체 요구를 반영한 현장 실기 위주 교과 편성, 과목별 레벨 선택제, 정화인증제, 실습학기제 등으로 현장 중심의 실무 역량을 강화하며, 전공
                관련한 다양한 체험과 나눔을 실천하여 행복한 삶의 성장을 추구한다.<br />
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CosmetologyMajor;
