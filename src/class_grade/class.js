import React from "react";
import '../css/Class.css';

function Class (){
    return(
        <div className="text_subcontent">
  <article className="text_wrapper">
    <p className="header_title_2">교육과정 편성</p><br />
    <ul className="common_list">
      <li>· 교육과정은 교양교과와 전문교과로 구분한다.</li>
      <li>· 전공교과과정은 전공필수와 전공선택으로 구분한다.</li>
      <li>
      · 전공필수는 졸업을 위하여 반드시 이수해야 하는 교과목으로, 해당 교과목의
        학점을 취득하지 못하면 졸업이 불가하다.
      </li>
      <li>
      ·  교과이수 단위는 학점으로 하고, 1학기 15시간 이상의 강의를 1학점으로
        한다.
      </li>
      <li>· 졸업에 필요한 학점은 아래와 같다.</li>
    </ul>
    <table className="tableStyle" >
      <thead className="theadStyle">
        <tr>
          <th>구분</th>
          <th>졸업학점</th>
          <th>교양학점</th>
          <th>전공학점</th>
          <th>비고</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>~18학번</td>
          <td>80학점 이상</td>
          <td>8학점 이상</td>
          <td>60학점 이상(전공필수 포함)</td>
          <td>2009학번 교양필수 확인</td>
        </tr>
        <tr>
          <td>19학번~</td>
          <td>70학점 이상</td>
          <td>7학점 이상</td>
          <td>56학점 이상(전공필수 포함)</td>
          <td>
            <br />
          </td>
        </tr>
        <tr>
          <td>23학번~</td>
          <td>70학점 이상</td>
          <td>6학점 이상</td>
          <td>50학점 이상(전공필수 포함)</td>
          <td>
            <br />
          </td>
        </tr>
      </tbody>
    </table>
  </article>
  <article className="text_wrapper"><br /> <br /> <br /><br />
    (단, 18학번까지는 최소 80학점 이상으로, 전공과정 60학점, 교양과정 8학점을
    이수하여야 하나 휴복학에 따른 졸업사정 여부에 따라 달라질 수 있으므로 반드시
    지도교수님에게 문의한다).
  </article> <br /><br /><br />
  <article className="text_wrapper">
    <p className="header_title_2">수강신청</p><br />
    <ul className="common_list">
      <li>
      ·  학생은 매 학기 정해진 기간에 교육과정표, 강의시간표를 참고하여 지도교수
        또는 학과장 등의 수강지도를 받아 지정된 기일 안에 수강할 교과목을
        신청하여야 한다.
        <br />
        · 학기당 신청 학점 : 10학점 이상 20학점 이하(단, 80학점 졸업대상자는
        15학점 이상 24학점 이하)
      </li>
      <li>
      ·  졸업에 필요한 학점을 취득하였더라도 교양, 전공교과목 취득학점(전공필수
        포함)이 미달되면 졸업이 불가하므로 취득 학점을 확인하여 신청하여야 한다.
      </li>
      <li>
      · 매학기 17학점 미만 취득자는 장학금 지원 대상에서 제외된다(단,
        18학번까지는 매학기 20학점 미만 취득자).
      </li>
      <li>
      · 수강신청이 완료된 후 신청 교과목을 수강하지 아니할 경우 그 교과목의
        성적은 ‘F’가 된다.
      </li>
      <li>
        <span>유의사항</span>
        <ul className="common_sublist">
          <li>
          ·  동일교과목 중복이수, 전공필수 및 전공 교과목의 학점 미취득, 졸업학점
            미달 등으로 후기 졸업을 하는 일이 없도록 지도교수와 상의하여야 한다.
          </li>
          <li>
          ·  수강신청을 포함한 일체의 수업 관련 업무는 모두 전산처리되므로
            교과목의 교과번호, 분반번호 등을 정확히 확인하여야 한다.
          </li>
          <li>
          ·  동일 교시에 2개 교과목을 중복 신청하거나 학기당 이수학점 초과 또는
            미달 등의 경우가 없도록 주의한다.
          </li>
        </ul>
      </li>
    </ul>
  </article>
  <article className="text_wrapper"><br /><br /><br />
    <p className="header_title_2">재수강</p><br /><br />
    <ul className="common_list">
      <li>
      · 성적등급이 D+ 이하인 과목은 재수강할 수 있다. 성적은 기 취득한 성적과
        재수강하여 취득한 성적 중 우수한 성적을 인정하며, 재학기간 중 20학점
        범위 내에서 신청할 수 있다. 다만, 취득성적이 F인 교과목은 학기당 재수강
        신청학점 수 제한을 받지 아니한다.
      </li>
      <li>· 해당 학기에 맞추어 동일한 과목을 재수강하는 것을 원칙으로 한다.</li>
      <li>
      ·  교과과정 개편 등 재수강이 불가능한 교과목은 대체하여 수강하거나 대체과목
        지정이 불가능한 경우 그 성적을 포기할 수 있다.
      </li>
    </ul>
  </article>
  <article className="text_wrapper"><br /><br /><br />
    <p className="header_title_2">계절수업</p><br />
    <ul className="common_list">
      <li>
      ·  계절수업은 여름방학 중 시행하는 하계계절수업, 겨울방학 중 시행하는
        동계계절수업으로 나뉜다.
      </li>
      <li>· 계절수업의 학점취득은 6학점 이내로 한다.</li>
    </ul>
  </article>
  <article className="text_wrapper"><br /><br /><br />
    <p className="header_title_2">출석</p><br />
    <ul className="common_list">
      <li>· 출석의무 : 학생은 수강 신청한 전교과목의 강의에 출석하여야 한다.</li>
      <li>· 출석률이 미달되면 해당 교과목의 학점을 취득할 수 없다.</li>
      <li>
      · 학생의 징병검사•예비군교육•상고 및 기타 사정으로 출석하지 못한 경우
        증빙서류를 확인하여 출석으로 인정받을 수 있다.
      </li>
    </ul>
  </article>
</div>

    );
}


export default Class
