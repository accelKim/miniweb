import React, { useState } from 'react';
import '../css/DeptIntro.css';

function Calendar() {
  const [viewMode, setViewMode] = useState('monthly'); // 초기 모드는 '월간'

  const handleMonthlyClick = () => {
    setViewMode('monthly');
  };

  const handleAnnualClick = () => {
    setViewMode('annual');
  };

  const textStyles = {
    color: 'darkslategray',
  };

  return (
    <div className="CT">
      <div className="calendar_button_section">
        <button
          className={`type_button monthly ${viewMode === 'monthly' ? 'active' : ''}`}
          title="월간"
          onClick={handleMonthlyClick}
        >
          <span style={textStyles}>월간</span>
        </button>
        <button
          className={`type_button annualy ${viewMode === 'annual' ? 'active' : ''}`}
          title="연간"
          onClick={handleAnnualClick}
        >
          <span style={textStyles}>연간</span>
        </button>
      </div>
      <div className="calendar_tab month_tab">
        {/* 일정 상단 */}
        <div className="calendar_top">
          <div className="calendar_controller prev_year">
            <span className="prev_year_text" style={textStyles}>2022</span>년
          </div>
          <div className="calendar_header">
            <h3>
              <span className="year" style={textStyles}>2023</span>년 학사일정
            </h3>
          </div>
          <div className="calendar_controller next_year">
            <span className="next_year_text" style={textStyles}>2024</span>년
          </div>
        </div>
        <div className="calendar_main" style={{ display: 'flex' }}>
          {/* 캘린더 본체 */}
          <div className="calendar_body" style={{ display: viewMode === 'monthly' ? 'block' : 'none' }}>
            <div className="calendar_body_header">
              <span className="year_month">
                <span className="year" style={textStyles}>2023</span>.<span className="month" style={textStyles}>01</span>
              </span>
              <button className="set_today" style={textStyles}>TODAY</button>
              <div className="calendar_month_controll">
                <div className="month_btn month_prev" style={textStyles}></div>
                <div className="month_btn month_next" style={textStyles}></div>
              </div>
            </div>
            <div className="calendar_table">
              <ul className="calendar_weekday">
                <li className="sunday" style={textStyles}>SUN</li>
                <li style={textStyles}>MON</li>
                <li style={textStyles}>TUE</li>
                <li style={textStyles}>WED</li>
                <li style={textStyles}>THU</li>
                <li style={textStyles}>FRI</li>
                <li className="saturday" style={textStyles}>SAT</li>
              </ul>
              <ul className="calendar_days">
                <li className="daybox day0" data-day={1} style={textStyles}>
                  1
                </li>
                <li className="daybox day1 fill" data-day={2} style={textStyles}>
                  2
                </li>
                <li className="daybox day2" data-day={3} style={textStyles}>
                  3
                </li>
                <li className="daybox day3" data-day={4} style={textStyles}>
                  4
                </li>
                <li className="daybox day4" data-day={5} style={textStyles}>
                  5
                </li>
                <li className="daybox day5" data-day={6} style={textStyles}>
                  6
                </li>
                <li className="daybox day6" data-day={7} style={textStyles}>
                  7
                </li>
                <li className="daybox day7" data-day={8} style={textStyles}>
                  8
                </li>
                <li className="daybox day8" data-day={9} style={textStyles}>
                  9
                </li>
                <li className="daybox day9" data-day={10} style={textStyles}>
                  10
                </li>
                <li className="daybox day10" data-day={11} style={textStyles}>
                  11
                </li>
                <li className="daybox day11" data-day={12} style={textStyles}>
                  12
                </li>
                <li className="daybox day12" data-day={13} style={textStyles}>
                  13
                </li>
                <li className="daybox day13" data-day={14} style={textStyles}>
                  14
                </li>
                <li className="daybox day14" data-day={15} style={textStyles}>
                  15
                </li>
                <li className="daybox day15" data-day={16} style={textStyles}>
                  16
                </li>
                <li className="daybox day16" data-day={17} style={textStyles}>
                  17
                </li>
                <li className="daybox day17" data-day={18} style={textStyles}>
                  18
                </li>
                <li className="daybox day18" data-day={19} style={textStyles}>
                  19
                </li>
                <li className="daybox day19" data-day={20} style={textStyles}>
                  20
                </li>
                <li className="daybox day20" data-day={21} style={textStyles}>
                  21
                </li>
                <li className="daybox day21" data-day={22} style={textStyles}>
                  22
                </li>
                <li className="daybox day22" data-day={23} style={textStyles}>
                  23
                </li>
                <li className="daybox day23" data-day={24} style={textStyles}>
                  24
                </li>
                <li className="daybox day24 fill" data-day={25} style={textStyles}>
                  25
                </li>
                <li className="daybox day25 fill" data-day={26} style={textStyles}>
                  26
                </li>
                <li className="daybox day26" data-day={27} style={textStyles}>
                  27
                </li>
                <li className="daybox day27" data-day={28} style={textStyles}>
                  28
                </li>
                <li className="daybox day28 fill" data-day={29} style={textStyles}>
                  29
                </li>
                <li className="daybox day29" data-day={30} style={textStyles}>
                  30
                </li>
                <li className="daybox day30" data-day={31} style={textStyles}>
                  31
                </li>
                <li className="daybox day31" data-day={0}  style={textStyles}/>
                <li className="daybox day32" data-day={0}  style={textStyles}/>
                <li className="daybox day33" data-day={0}  style={textStyles}/>
                <li className="daybox day34" data-day={0}  style={textStyles}/>
              </ul>
            </div>
          </div>
    {/* 캘린더 상세 일정 */}
          <div className="schedule_detail" style={{ display: viewMode === 'monthly' ? 'block' : 'none' }}>
            <h4 className="schedule_detail_header" style={textStyles}>
              <span className="month" style={textStyles}>1</span>월 상세일정
            </h4>
            <ul className="schedule_detail_list">
              <li data-day={29} style={{ display: "block" }}>
                <p className="date">2022.12.29 ~ 2023.01.12</p>
                <p className="date_title">2023학년도 정시1차 모집</p>
              </li><br />
              <li data-day={2} style={{ display: "block" }}>
                <p className="date">2023.01.02 ~ 2023.01.20</p>
                <p className="date_title">동계계절수업</p>
              </li><br />
              <li data-day={25} style={{ display: "block" }}>
                <p className="date">2023.01.25 ~ 2023.01.27</p>
                <p className="date_title">
                  복학원(휴학생) 및 휴학원(재학생·휴학생) 접수
                </p><br />
              </li>
              <li data-day={26} style={{ display: "block" }}>
                <p className="date">2023.01.26 ~ 2023.01.27</p>
                <p className="date_title">동계계절수업 성적열람 및 이의신청</p>
              </li><br />
            </ul>
          </div>
        </div>
        {/* 연간 학사일정 */}
        <div className="annual_page table_panel" style={{ display: viewMode === 'annual' ? 'block' : 'none'}}>
          <table className="info_table">
            <tbody>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.03.02 ~ 2023.03.08</th>
                <td>1학기 수강신청 변경기간</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.03.02</th>
                <td>1학기 학기개시일</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.03.31</th>
                <td>학기개시 30일</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.04.20 ~ 2023.04.26</th>
                <td>중간고사</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.04.30</th>
                <td>학기개시 60일</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.05.01</th>
                <td>근로자의날 (휴강)</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.05.05</th>
                <td>어린이날 (휴강)</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.05.29</th>
                <td>부처님오신날 (휴강)</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.05.30</th>
                <td>학기개시 90일</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.06.06</th>
                <td>현충일 (휴강)</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.06.08 ~ 2023.06.14</th>
                <td>보강 주</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.06.15 ~ 2023.06.21</th>
                <td>기말고사</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.06.27 ~ 2023.06.28</th>
                <td>강의평가</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.06.27 ~ 2023.06.28</th>
                <td>성적열람 및 이의신청</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.06.28 ~ 2023.06.29</th>
                <td>하계계절수업 수강신청</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.07.03 ~ 2023.07.07</th>
                <td>전과원서 접수</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.07.03 ~ 2023.07.21</th>
                <td>하계계절수업 (3주)</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.07.19 ~ 2023.07.21</th>
                <td>복학생(휴학생) 및 휴학원(재학생·휴학생) 접수</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.07.24 ~ 2023.07.26</th>
                <td>2023학년도 1학년 2학기 편입학모집 (예정)</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.07.26 ~ 2023.07.27</th>
                <td>하계계절수업 성적열람 및 이의신청</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.08.14 ~ 2023.08.16</th>
                <td>2학년 수강신청</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.08.17 ~ 2023.08.18</th>
                <td>1학년 수강신청</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.08.21 ~ 2023.08.23</th>
                <td>재학생 등록금 납부 (예정)</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.08.28 ~ 2023.09.01</th>
                <td>2학기 수강신청 변경기간</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.08.28</th>
                <td>2학기 학기개시일</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.09.11 ~ 2023.10.05</th>
                <td>2024학년도 수시1차 모집 (예정)</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.09.26</th>
                <td>학기개시 30일</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.09.28 ~ 2023.09.30</th>
                <td>추석연휴 (휴강)</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.09.30</th>
                <td>개교기념일 (창학 72주년)</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.10.02</th>
                <td>임시공휴일 (휴강)</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.10.03</th>
                <td>개천절 (휴강)</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.10.09</th>
                <td>한글날 (휴강)</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.10.16 ~ 2023.10.20</th>
                <td>중간고사</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.10.26</th>
                <td>학기개시 60일</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.11.10 ~ 2023.11.24</th>
                <td>2024학년도 수시2차 모집 (예정)</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.11.25</th>
                <td>학기개시 90일</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.12.04 ~ 2023.12.08</th>
                <td>보강주, 강의평가 및 2023 대학교육만족도 조사</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.12.11 ~ 2023.12.15</th>
                <td>기말고사</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.12.21 ~ 2023.12.22</th>
                <td>성적열람 및 이의신청</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2023.12.26 ~ 2023.12.27</th>
                <td>동계계절수업 수강신청</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2024.01.02 ~ 2024.01.22</th>
                <td>동계계절수업 (3주)</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2024.01.03 ~ 2024.01.15</th>
                <td>2024학년도 정시1차 모집</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2024.01.24 ~ 2024.01.25</th>
                <td>동계계절수업 성적열람 및 이의신청</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2024.01.24 ~ 2024.01.26</th>
                <td>복학원(휴학생) 및 휴학원(재학생·휴학생) 접수</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2024.01.29 ~ 2024.01.31</th>
                <td>2023학년도 2학년 1학기 편입학모집 (예정)</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2024.02.07</th>
                <td>전기 학위수여식 (예정)</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2024.02.15 ~ 2024.02.16</th>
                <td>2학년 수강신청 (예정)</td>
              </tr>
              <tr>
                <th style={{ color: 'darkslategray' }}>2024.02.20</th>
                <td>2024학년도 신입생 입학식·오리엔테이션 (예정)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Calendar;