import React from "react";
import { Link } from "react-router-dom";
import '../css/Header.css';
import OriLogo from '../images/ori-logo-univname.png';
import LoginKakao from "../login/LoginKakao";

function Header() {
    return (
        <>
            <div className="header">
                <header>
                    <div id="menuBar">
                        <div id="logo" className="logo-container">
                            <Link to="/">
                                <img src={OriLogo} alt="logo" />
                            </Link>
                        </div>
                        <ul id="topMenu">
                            <li><a href="#">학교소개</a>
                                <ul>
                                    <li><Link to="/location">학교 위치</Link></li>
                                    <li><Link to="/orgChart">기구체계도</Link></li>
                                </ul>
                            </li>
                            <li><a href="#">학부전공</a>
                                <ul>
                                    <li><a href="/ba">미술예술학부</a></li>
                                    <li><a href="/cia">융합예술학부</a></li>
                                    <li><a href="/dpca">디저트조리학부</a></li>
                                    <li><a href="/cla">교양</a></li>
                                </ul>
                            </li>
                            <li><a href="#">학사정보</a>
                                <ul>
                                    <li><a href="/academic_Calendar">학사 일정</a></li>
                                    {/* <li><a href="#">서식 자료실</a></li> */}
                                </ul>
                            </li>
                            <li><a href="#">수업 • 성적</a>
                                <ul>
                                    <li><a href="/class">수업 관련</a></li>
                                    <li><a href="/grade">성적 관련</a></li>
                                </ul>
                            </li>

                            <li><a href="#">대학생활</a>
                                <ul>
                                    <li><a href="/post">게시판</a></li>
                                    {/* <li><a href="#">학점계산기</a></li> */}
                                </ul>
                            </li>
                            <li><a href="#">수강신청</a>
                                <ul>
                                    <li><a href="/enolment">장바구니</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div id="kakaoLoginButton">
                            <LoginKakao />
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Header;