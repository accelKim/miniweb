import React from "react";

function CosmetologyMajor() {
  return (
    <div className="cosmetology_major">
      <div className="major_wrapper">
        <div className="major_top_content">
          <div className="major_img"
            style={{
              backgroundImage:
                "url('http://ipsi.jb.ac.kr/api/file/get?path=board/202011//51fc785b-7006-47a8-b042-638ddfaad8df.png')",
            }}
          >
            <br />
          </div>
          <div className="major_ment">
            <div className="major_name">
              <p className="major_name_e">Cosmetology</p>
              <p className="major_name_k">미용전공</p>
            </div>
            <div className="major_explanation">
              <p>“행복한 삶을 실천하는 최우수 미용인재 양성”</p>
              <p>
                미용전공은 본교의 교육목표를 실현하고자 "행복한 삶을 실천하는 최우수 미용인재 양성"을 전공 비전으로 삼고 있다. 트렌드를 반영한 다양한 전공 교과를 편성하였고,
                교육과정을 통해 학생 스스로 진로와 취업을 결정할 수 있도록 함으로써 자신의 목표를 즐겁게 실현할 수 있도록 하였다. 고객서비스 마인드와 교양 교육 강화를 통해 바른 인성을
                함양하고, 체계적인 학문적 이론과 산업체 요구를 반영한 현장 실기 위주 교과 편성, 과목별 레벨 선택제, 정화인증제, 실습학기제 등으로 현장 중심의 실무 역량을 강화하며, 전공
                관련한 다양한 체험과 나눔을 실천하여 행복한 삶의 성장을 추구한다.
              </p>
            </div>
          </div>
        </div>

        <div className="major_bottom_content">
          <div className="department_title">
            <img
              src="/res/service/img/department10/common/bu_title.png"
              className="fr-fil fr-dii"
            />
            <p>교육목표</p>
          </div>
          <div className="major_career">
            <ul>
              <li>행복한 인생설계를 할 수 있는 자존감 있는 인재를 양성합니다.</li>
              <li>다변하는 뷰티산업 환경을 이해하고 비즈니스 모델을 분석하여 뷰티전문가로 성장합니다.</li>
              <li>헤어디자인에 있어 중요한 항목인 디자인 능력을 함양하고, 숙련된 기술로 디자인 역량을 펼칠 수 있도록 교육합니다.</li>
              <li>트렌드를 분석하여 인간의 심미적 욕구를 파악하고 창의적 조형 디자인을 할 수 있는 헤어디자이너를 양성합니다.</li>
              <li>소통과 공감능력, 서비스 매너를 갖추어 상황에 맞게 자신을 드러낼 수 있는 전문 뷰티 커뮤니케이터를 양성합니다.</li>
            </ul>
            <p><br /></p>
            <div className="major_career_img">
              <img
                src="/api/file/get?path=board/202103//bbfed3d1-c7d3-4cf7-bf91-785d69ae3971.png"
                className="fr-fic fr-dii"
              />
              &nbsp;
              <img
                className="img_expand mobile_show fr-fic fr-dii"
                src="/res/service/img/department10/sub_d/mobile/ico_expand.png"
              />
            </div>
          </div>
        </div>
        <div className="img_popup" style={{ display: "none" }}>
          <div className="img_wrapper">
            <img
              src="../images/cosmetology_career.png"
              className="fr-fic fr-dii"
            />
          </div>
          <div className="img_close">
            <img
              src="/res/service/img/department10/common/btn_close_white.png"
              className="fr-fic fr-dii"
            />
          </div>
        </div>
        <div className="major_bottom_content">
          <div className="department_title">
            <img
              src="../images/bu_title.png"
              className="fr-fil fr-dii"
            />
            <p>졸업 후 진로</p>
          </div>
          <div className="major_career">
            <ul>
              <li>헤어디자인분야 : 헤어드레서, 바버(맨즈헤어드레서)</li>
              <li>교육분야 : 교사(고교 실기교사, 미용학원 강사, 중고교 방과후교사, 미용직업전문학교 교사, 살롱 교육강사, 헤어제품브랜드회사 기술강사)</li>
              <li>두피관리분야 : 두피·모발관리사(트리콜로지스트)</li>
              <li>특수헤어분야 : 가모코디네이터, 특수머리전문디자이너, 웨딩헤어코디네이터</li>
              <li>방송&amp;매체관련분야 : 무대·방송 헤어코디네이터, 뷰티크리에이터</li>
              <li>헤어브랜드 및 살롱경영관련 분야 : 헤어브랜드회사 사원, 뷰티매니져, 미용경영인</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CosmetologyMajor;
