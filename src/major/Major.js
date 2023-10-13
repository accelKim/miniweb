import React from "react";
import { Link } from "react-router-dom";
import '../univ_intro/location.css';

function Major() {
    return (
        <div className="major">
            <nav className="sub_menu">
                <h1 className="depth1_title header_title_etc">학부·전공</h1>
                <ul className="depth2_list">
                    <li className="depth2_item current" menu-id="503">
                        <div className="depth2_wrapper">
                            <div className="depth2_wrapper_bg"></div>
                            <Link to="/major"><span>미용예술학부</span></Link>
                            <img className="submenu_arrow_down" src="../images/arr_menu_down.png" alt="아래 화살표" />
                            <img className="submenu_arrow_up" src="../images/arr_menu_up.png" alt="위로 화살표" />
                        </div>
                        <div className="depth3_wrapper">
                            <ul className="depth3_list">
                                <li className="depth3_item current" menu-id="504">학부소개</li>
                                <li className="depth3_item" menu-id="517">미용전공</li>
                                <li className="depth3_item" menu-id="523">메이크업전공</li>
                            </ul>
                        </div>
                    </li>
                    <li className="depth2_item" menu-id="731">
                        <div className="depth2_wrapper">
                            <div className="depth2_wrapper_bg"></div>
                            <span>융합예술학부</span>
                            <img className="submenu_arrow_down" src="../images/arr_menu_down.png" alt="아래 화살표" />
                            <img className="submenu_arrow_up" src="../images/arr_menu_up.png" alt="위로 화살표" />
                        </div>
                        <div className="depth3_wrapper">
                            <ul className="depth3_list">
                                <li className="depth3_item" menu-id="733">영상제작전공</li>
                                <li className="depth3_item" menu-id="734">디지털미디어디자인전공</li>
                            </ul>
                        </div>
                    </li>
                    <li className="depth2_item" menu-id="771">
                        <div className="depth2_wrapper">
                            <div className="depth2_wrapper_bg"></div>
                            <span>디저트·조리학부</span>
                            <img className="submenu_arrow_down" src="../images/arr_menu_down.png" alt="아래 화살표" />
                            <img className="submenu_arrow_up" src="../images/arr_menu_up.png" alt="위로 화살표" />
                        </div>
                        <div className="depth3_wrapper">
                            <ul className="depth3_list">
                                <li className="depth3_item" menu-id="785">디저트베이커리전공</li>
                                <li className="depth3_item" menu-id="786">조리전공</li>
                            </ul>
                        </div>
                    </li>
                    <li className="depth2_item">
                        <div className="depth2_wrapper">
                            <div className="depth2_wrapper_bg"></div>
                            <span>교양</span>
                            <img className="submenu_arrow_down" src="../images/arr_menu_down.png" alt="아래 화살표" />
                            <img className="submenu_arrow_up" src="../images/arr_menu_up.png" alt="위로 화살표" />
                        </div>
                        <div className="depth3_wrapper">
                            <ul className="depth3_list">
                                <li className="depth3_item" menu-id="785">디저트베이커리전공</li>
                                <li className="depth3_item" menu-id="786">조리전공</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Major;