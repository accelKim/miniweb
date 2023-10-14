import React from "react";
import { Link } from "react-router-dom";
import '../css/Location.css';
import Kakaomap from "./Kakaomap";

function Location() {
    return (
        <div className="location">
            <div className="container">
                <div className="sub_section">
                    <nav className="sub_menu">
                        <h1 className="depth1_title header_title_etc">학교 소개</h1>
                        <ul className="depth2_list">
                            <li className="depth2_item" menu-id="590">
                                <div className="depth2_wrapper">
                                    <div className="depth2_wrapper_bg"></div>
                                    <Link to="/location">
                                        <span>학교 위치</span>
                                    </Link>
                                </div>
                            </li>
                            <li className="depth2_item" menu-id="593">
                                <div className="depth2_wrapper">
                                    <div className="depth2_wrapper_bg"></div>
                                    <Link to="/orgChart">
                                        <span>기구체계도</span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="sub_content">
                        <div className="sub_content_header">
                            <h2 className="sub_content_title header_title_1">학교 위치</h2><br />
                        </div>
                        <hr />
                        <div className="content_wrapper" style={{ display: 'block' }}>
                            <div>
                                <div className="a7_wrapper">
                                    <div className="law_content">
                                        <div className="law_content_box">
                                            <br />
                                            <br />
                                            <Kakaomap />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Location;