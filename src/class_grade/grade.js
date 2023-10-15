import React from "react";
import '../css/Class.css';

function Grade (){
  return(
    <div className="text_subcontent">
  <article className="text_wrapper">
    <p className="header_title_2">시험</p><br />
    <ul className="common_list">
      <li>
      · 교과목별로 성적을 평가하기 위하여 학기말에 시험을 실시하며, 학기중
        중간시험을 행할 수 있다.
      </li>
      <li>
      ·  시험은 주·객관식 시험을 병행한 필답고사 및 교과목에 따라 실기, 실습,
        과제물 작성 등에 의하여 평가할 수 있다.
      </li>
      <li>
      ·  질병 등 기타 부득이한 사유로 시험에 참석하지 못할 경우 사전 허가 후
        추가시험을 부과하여 평가할 수 있다.
        <br />
        단, 추가시험 성적은 B+까지 인정할 수 있다.
      </li>
      <li>
      ·  각 교과목 총 수업주수에서 4주를 초과하여 결석한 자는 시험에 응시할 수
        없으며, 당해 교과목의 학점을 미취득으로 처리한다.
      </li>
    </ul>
  </article>
  <article className="text_wrapper"><br /><br /><br />
    <p className="header_title_2">성적평가</p><br />
    <ul className="common_list">
      <li>
      ·  학업성적은 각 교과목을 100점 만점으로 하고, 출석상황, 평소 수업태도,
        과제 및 시험성적 등을 종합하여 평가한다.
      </li>
      <li>
      ·  학업성적은 9단계로 구분하여 평가하며, D0 이상을 당해 교과목의 취득한
        것으로 인정한다.
      </li>
    </ul>
    <table>
      <colgroup>
        <col width="33.33%" />
        <col width="33.33%" />
        <col width="33.33%" />
      </colgroup>
      <thead>
        <tr>
          <th>등급</th>
          <th>성적</th>
          <th>평점</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>P</th>
          <th>&nbsp;</th>
          <th>불계</th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>A+</td>
          <td>100 ~ 95</td>
          <td>4.5</td>
        </tr>
        <tr>
          <td>A0</td>
          <td>94 ~ 90</td>
          <td>4.0</td>
        </tr>
        <tr>
          <td>B+</td>
          <td>89 ~ 85</td>
          <td>3.5</td>
        </tr>
        <tr>
          <td>B0</td>
          <td>84 ~ 80</td>
          <td>3.0</td>
        </tr>
        <tr>
          <td>C+</td>
          <td>79 ~ 75</td>
          <td>2.5</td>
        </tr>
        <tr>
          <td>C0</td>
          <td>74 ~ 70</td>
          <td>2.0</td>
        </tr>
        <tr>
          <td>D+</td>
          <td>69 ~ 65</td>
          <td>1.5</td>
        </tr>
        <tr>
          <td>D0</td>
          <td>64 ~ 60</td>
          <td>1.0</td>
        </tr>
        <tr>
          <td>F</td>
          <td>59점 이하</td>
          <td>미취득</td>
        </tr>
      </tbody>
    </table>
    <p>※ 예시</p>
    <table>
      <colgroup>
        <col width="24%" />
        <col width="12%" />
        <col width="12%" />
        <col width="12%" />
        <col width="20%" />
        <col width="20%" />
      </colgroup>
      <thead>
        <tr>
          <th>과목</th>
          <th>학점</th>
          <th>점수</th>
          <th>등급</th>
          <th>평점합</th>
          <th>총점</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>계</th>
          <th>22</th>
          <th>656</th>
          <th />
          <th>65.5</th>
          <th>1,762</th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>언어와 표현</td>
          <td>2</td>
          <td>90</td>
          <td>A0</td>
          <td>2X4.0 = 8.0</td>
          <td>2x90=180</td>
        </tr>
        <tr>
          <td>샴푸</td>
          <td>3</td>
          <td>94</td>
          <td>A0</td>
          <td>3X4.0 = 12.0</td>
          <td>3x94=282</td>
        </tr>
        <tr>
          <td>커트</td>
          <td>3</td>
          <td>99</td>
          <td>A+</td>
          <td>3x4.5=13.5</td>
          <td>3x99=297</td>
        </tr>
        <tr>
          <td>기초피부관리</td>
          <td>3</td>
          <td>97</td>
          <td>A+</td>
          <td>3X4.5 = 13.5</td>
          <td>3x97=291</td>
        </tr>
        <tr>
          <td>광고메이크업</td>
          <td>3</td>
          <td>88</td>
          <td>B+</td>
          <td>3x3.5=10.5</td>
          <td>3x88=264</td>
        </tr>
        <tr>
          <td>업스타일 1</td>
          <td>3</td>
          <td>72</td>
          <td>C0</td>
          <td>3x2.0=6.0</td>
          <td>3x72=216</td>
        </tr>
        <tr>
          <td>모발과학</td>
          <td>2</td>
          <td>62</td>
          <td>D0</td>
          <td>2x1.0=2.0</td>
          <td>2x62=124</td>
        </tr>
        <tr>
          <td>인체생리학</td>
          <td>2</td>
          <td>54</td>
          <td>F</td>
          <td>2x0=0</td>
          <td>2x54=108</td>
        </tr>
        <tr>
          <td>사회봉사</td>
          <td>1</td>
          <td>0</td>
          <td>P</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <ul className="common_list small">
      <li>· 평점평균 : 평점합 / 총 수강 신청학점 수</li>
      <li>· 평균배점 : 총점 / 총 수강 신청학점 수</li>
      <li>
      · P/NP 교과목의 취득학점은 평점평균·평균배점 산출에 포함하지 아니함.
      </li>
    </ul>
  </article>
  <article className="text_wrapper"><br /><br />
    <p className="header_title_2">성적열람 및 정정</p><br />
    <ul className="common_list">
      <li>
      ·  재학생은 기말고사 이후 정해진 기간 내 홈페이지를 통해 성적 열람을 할 수
        있다.
      </li>
      <li>
      ·  성적 열람 후 이상이 있을 경우 담당 교·강사에게 직접 성적이의를
        신청하여야 한다.
      </li>
    </ul>
  </article>
</div>

  );
}

export default Grade;