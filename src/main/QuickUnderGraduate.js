import React from "react";
import '../css/QuickUnderGraduate.css';

function QuickUnderGraduate() {
    return (
        <div id="links">
            <ul>
                <li>
                    <a href="#ba">
                        <span className="quick-icon" id="quick-icon1"></span>
                        <p>미용예술학부</p>
                    </a>
                </li>
                <li>
                    <a href="#cia">
                        <span className="quick-icon" id="quick-icon2"></span>
                        <p>융합예술학부</p>
                    </a>
                </li>
                <li>
                    <a href="#dpca">
                        <span className="quick-icon" id="quick-icon3"></span>
                        <p>디저트조리학부</p>
                    </a>
                </li>
                <li>
                    <a href="#cla">
                        <span className="quick-icon" id="quick-icon4"></span>
                        <p>교양</p>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default QuickUnderGraduate;