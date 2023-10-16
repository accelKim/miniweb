import React from "react";
import "../css/Schedule.css";
import { Link } from "react-router-dom";

function Schedule() {
  return (
    <article id="schedule">
      <div className="container">
        <div className="scd_header">
          <h2 className="scd_header_title">학사일정</h2>
          <p className="scd_header_ment">오리대학교 학사일정을 알려드려요.</p>
          <div className="scd_header_more">
            <Link to="/academic_Calendar">
              <span>더보기</span>
            </Link>
          </div>
        </div>
        <div className="scd_content">
          <div className="scd_mcontent mobile_show">
            <ul className="scd_mcontent_box_wrapper">
              <li className="scd_mcontent_box" date-str="2023-00-09 12:00:00">
                <div className="scd_content_item_bg" />
                <p className="scd_mcontent_week">MON</p>
                <p className="scd_mcontent_day">09</p>
              </li>
              <li className="scd_mcontent_box" date-str="2023-00-10 12:00:00">
                <div className="scd_content_item_bg" />
                <p className="scd_mcontent_week">TUE</p>
                <p className="scd_mcontent_day">10</p>
              </li>
              <li className="scd_mcontent_box today" date-str="2023-00-11 12:00:00">
                <div className="scd_content_item_bg" />
                <p className="scd_mcontent_week">WED</p>
                <p className="scd_mcontent_day">11</p>
              </li>
              <li className="scd_mcontent_box" date-str="2023-00-12 12:00:00">
                <div className="scd_content_item_bg" />
                <p className="scd_mcontent_week">THU</p>
                <p className="scd_mcontent_day">12</p>
              </li>
              <li className="scd_mcontent_box" date-str="2023-00-13 12:00:00">
                <div className="scd_content_item_bg" />
                <p className="scd_mcontent_week">FRI</p>
                <p className="scd_mcontent_day">13</p>
              </li>
            </ul>
          </div>
          <ul className="scd_content_list">
            <li className="scd_content_item" date-str="2023-00-09 12:00:00">
              <div className="scd_content_item_bg" />
              <div className="scd_content_top">
                <p className="scd_cotent_day">
                  10.09<span className="scd_content_week">MON</span>
                </p>
              </div>
              <ul className="scd_content_bottom">
                <li className="scd_content_title">한글날 (휴강)</li>
              </ul>
            </li>
            <li className="scd_content_item" date-str="2023-00-10 12:00:00">
              <div className="scd_content_item_bg" />
              <div className="scd_content_top">
                <p className="scd_cotent_day">
                  10.10<span className="scd_content_week">TUE</span>
                </p>
              </div>
              <ul className="scd_content_bottom">
                <li className="scd_content_title no_schedule">
                  등록된 일정이 없습니다.
                </li>
              </ul>
            </li>
            <li className="scd_content_item today" date-str="2023-00-11 12:00:00">
              <div className="scd_content_item_bg" />
              <div className="scd_content_top">
                <p className="scd_cotent_day">
                  10.11<span className="scd_content_week">WED</span>
                </p>
              </div>
              <ul className="scd_content_bottom">
                <li className="scd_content_title no_schedule">
                  등록된 일정이 없습니다.
                </li>
              </ul>
            </li>
            <li className="scd_content_item" date-str="2023-00-12 12:00:00">
              <div className="scd_content_item_bg" />
              <div className="scd_content_top">
                <p className="scd_cotent_day">
                  10.12<span className="scd_content_week">THU</span>
                </p>
              </div>
              <ul className="scd_content_bottom">
                <li className="scd_content_title no_schedule">
                  등록된 일정이 없습니다.
                </li>
              </ul>
            </li>
            <li className="scd_content_item" date-str="2023-00-13 12:00:00">
              <div className="scd_content_item_bg" />
              <div className="scd_content_top">
                <p className="scd_cotent_day">
                  10.13<span className="scd_content_week">FRI</span>
                </p>
              </div>
              <ul className="scd_content_bottom">
                <li className="scd_content_title no_schedule">
                  등록된 일정이 없습니다.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div />
      </div>
    </article>

  );
}

export default Schedule;