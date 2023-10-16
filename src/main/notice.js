import React, { useState } from "react";
import "../css/Notice.css";
import { Link } from "react-router-dom";

function Notice() {
  const [viewMode, setViewMode] = useState('all');
  const [announcements, setAnnouncements] = useState([
    { category: 'general', content: '[일반] 2023-2학기 졸업앨범 촬영 안내', date: '2023.08.28' },
    { category: 'general', content: '[일반] 2023-2학기 학생증 발급 신청 안내', date: '2023.08.29' },
    { category: 'general', content: '[일반] 한글날 휴무 안내', date: '2023.10.06' },
    { category: 'general', content: '[일반] 2024학년도 정화예술대학교 교수 초빙', date: '2023.08.29' },
    { category: 'general', content: '[일반] 공휴일 휴무 안내', date: '2023.09.26' },
    { category: 'general', content: '[일반] 2023학년도 2학기 재학생 등록금 추가 납부 안내', date: '2023.08.23' },
    { category: 'general', content: '[일반] 2023-2학기 학생증 발급 신청 안내', date: '2023.08.29' },
    { category: 'general', content: '[일반] 2023학년도 2학기 미용예술학부 실험실습재료 구매(긴급) 입찰공고', date: '2023.07.21' },
    { category: 'general', content: '[일반] 대학로캠퍼스 조립컴퓨터 구매 설치(긴급)', date: '2023.07.06' },
    { category: 'scholarship', content: '[장학·대출] 2023-2학기 국가근로장학생 선발결과 안내(1차 선발)', date: '2023.07.06' },
    { category: 'scholarship', content: '[장학·대출] (기관용)2023-2학기 국가근로장학기관 업무매뉴얼(1차)', date: '2023.08.21' },
    { category: 'scholarship', content: '[장학·대출] 한국장학재단 2023년 특별상환 유예대출 신청 안내', date: '2023.10.12' },
    { category: 'scholarship', content: '[장학·대출] 2023년 하반기 울산연구원 장학생 선발 공고', date: '2023.10.10' },
    { category: 'scholarship', content: '[장학·대출] 2023년 「하나장학생」 선발 요강', date: '2023.09.25' },
    { category: 'scholarship', content: '[장학·대출] 2023년 2학기 고졸 후학습자 장학금 신청 안내', date: '2023.09.22' },
    { category: 'scholarship', content: '[장학·대출] 2023년 2학기 고양시 대학생 본인부담 등록금 지원 안내', date: '2023.09.21' },
    { category: 'academic', content: '[학사] 2023학년도 2학기 중간고사 시행 안내', date: '2023.09.27' },
    { category: 'academic', content: '[학사] 2023학년도 학사일정 변경 및 보강일 안내', date: '2023.09.04' },
    { category: 'academic', content: '[학사] 2023학년도 2학기 수업운영 안내문', date: '2023.08.21' },
    { category: 'academic', content: '[학사] 2023학년도 2학기 수업연한경과자(졸업유보자) 등록금 납부 안내', date: '2023.08.10' },
    { category: 'academic', content: '[학사] 2023학년도 2학기 추가 휴학 및 복학 신청 안내', date: '2023.06.29' },
    { category: 'academic', content: '[학사] 2023학년도 2학기 재입학 시행 안내', date: '2023.07.24' },
    { category: 'academic', content: '[학사] 2023학년도 하계계절학기 수업료 추가 납부 기간 안내', date: '2023.07.04' },
    { category: 'event', content: '[행사] 중구자원봉사센터 자원봉사자 모집', date: '2023.08.03' },
    { category: 'event', content: '[행사] [전공체험] 중,고교생 대상 미용예술학부 전공체험 프로그램 안내', date: '2023.07.06' },
    { category: 'event', content: '[행사] [공모전] 2023 정화뷰티 온라인 공모전', date: '2023.06.29' },
    { category: 'event', content: '[행사] [공모전] 2023 제2회 백암온라인 실용음악콩쿨', date: '2023.06.29' },
    { category: 'event', content: '[행사] [공모전] 2023 정화예술대학교 온라인 연기뮤지컬 콘테스트', date: '2023.05.18' },
    { category: 'event', content: '[행사] 서울특별시 중구FM서포터즈 모집', date: '2023.09.20' },
    { category: 'event', content: '[행사] 2023 제1회 백암 온라인 실용음악 콩쿨', date: '2023.08.23' },
  ]);

  const [showAllAnnouncements, setShowAllAnnouncements] = useState(false);
  const [displayedAnnouncementCount, setDisplayedAnnouncementCount] = useState(6);

  const handleCategoryClick = (category) => {
    setViewMode(category);
    setDisplayedAnnouncementCount(6);
    setShowAllAnnouncements(false);
  };

  const toggleShowAllAnnouncements = () => {
    if (showAllAnnouncements) {
      setDisplayedAnnouncementCount(6);
    } else {
      setDisplayedAnnouncementCount(announcements.filter((item) => item.category === viewMode).length);
    }
    setShowAllAnnouncements(!showAllAnnouncements);
  };

  const selectRandomAnnouncements = (announcements, count) => {
    const shuffledAnnouncements = announcements.sort(() => 0.5 - Math.random());
    return shuffledAnnouncements.slice(0, count);
  };

  const displayedAnnouncements = showAllAnnouncements
    ? announcements.filter((item) => item.category === viewMode)
    // ? announcements   // 이 주석을 해제하면 전체보기를 눌렀을 때 모든 카테고리의 모든 공지사항이 보임
    : viewMode === 'all'
    ? selectRandomAnnouncements(announcements, displayedAnnouncementCount)
    : announcements.filter((item) => item.category === viewMode).slice(0, displayedAnnouncementCount);

  return (
    <article id="notice" className="notice_section">
      <div className="bg_svg" />
      <div className="container">
        <div className="nt_header">
          <div className="nt_header_top">
            <h2 className="nt_header_title">공지사항</h2>
            <div className="nt_header_more">
              <span onClick={toggleShowAllAnnouncements}>
                {showAllAnnouncements ? "간략히" : "전체보기"}
              </span>
            </div>
          </div>
          <div className="nt_header_bottom">
            <ul className="nt_header_category">
              {/* <li className={`nt_header_item ${viewMode === 'all' ? 'active' : ''}`} onClick={() => handleCategoryClick('all')}>
                전체
              </li> */}
              <li className={`nt_header_item ${viewMode === 'general' ? 'active' : ''}`} onClick={() => handleCategoryClick('general')}>
                일반
              </li>
              <li className={`nt_header_item ${viewMode === 'scholarship' ? 'active' : ''}`} onClick={() => handleCategoryClick('scholarship')}>
                장학·대출
              </li>
              <li className={`nt_header_item ${viewMode === 'academic' ? 'active' : ''}`} onClick={() => handleCategoryClick('academic')}>
                학사
              </li>
              <li className={`nt_header_item ${viewMode === 'event' ? 'active' : ''}`} onClick={() => handleCategoryClick('event')}>
                행사
              </li>
            </ul>
          </div>
        </div>
        <div className="nt_item_wrapper">
          <ul className="nt_list">
            {displayedAnnouncements.map((announcement, index) => (
              <li className="nt_item" key={index}>
                [{announcement.category}] {announcement.content} <span>{announcement.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Notice;