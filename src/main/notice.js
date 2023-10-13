import React from "react";
import "../css/Notice.css";

function Notice() {
  return (
    
    <article id="notice" className="notice_section">
    <div className="bg_svg" />
    <div className="container">
      <div className="nt_header">
        <div className="nt_header_top">
          <h2 className="nt_header_title">공지사항</h2>
          <div className="nt_header_more">
            <span>더보기</span>
          </div>
        </div>
        <div className="nt_header_bottom">
          <ul className="nt_header_category">
            <li className="nt_header_item active">전체</li>
            <li className="nt_header_item" category-id={131}>
              일반
            </li>
            <li className="nt_header_item" category-id={130}>
              장학·대출
            </li>
            <li className="nt_header_item" category-id={129}>
              학사
            </li>
            <li className="nt_header_item" category-id={186}>
              행사
            </li>
          </ul>
        </div>
      </div>
      <div className="nt_item_wrapper">
        <ul className="nt_list">
          <li className="nt_item">
            공지사항 예시 입니다.<span>2023.08.03</span>
          </li>
          <li className="nt_item">
            공지사항 예시 입니다.<span>2023.07.06</span>
          </li>
          <li className="nt_item">
            공지사항 예시 입니다.<span>2023.06.29</span>
          </li>
          <li className="nt_item">
            공지사항 예시 입니다.<span>2023.05.18</span>
          </li>
          <li className="nt_item">
            공지사항 예시 입니다.<span>2023.06.29</span>
          </li>
          <li className="nt_item">
            공지사항 예시 입니다.<span>2023.05.18</span>
          </li>
        </ul>
      </div>
    </div>
  </article>
  
  );
}

export default Notice;