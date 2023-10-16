import React from "react";
import '../css/QuickUnderGraduate.css';
import { Link } from "react-router-dom";

function QuickUnderGraduate() {
    return (
        <div id="links">
            <ul>
                <li>
                    <a href="/ba">
                        <span className="quick-icon" id="quick-icon1"></span>
                        <Link to="/ba">
                        <p>미용예술학부</p>
                        </Link>
                    </a>
                </li>
                <li>
                    <a href="/cia">
                        <span className="quick-icon" id="quick-icon2"></span>
                        <Link to="/cia">
                        <p>융합예술학부</p>
                        </Link>
                    </a>
                </li>
                <li>
                    <a href="/dpca">
                        <span className="quick-icon" id="quick-icon3"></span>
                        <Link to="/dpca">
                        <p>디저트조리학부</p>
                        </Link>
                    </a>
                </li>
                <li>
                    <a href="/cla">
                        <span className="quick-icon" id="quick-icon4"></span>
                        <Link to="/cla">
                        <p>교양</p>
                        </Link>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default QuickUnderGraduate;