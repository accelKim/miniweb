import React from "react";
import { Link } from "react-router-dom";

function SideMenubar(props) {
  const textStyles = {
    color: 'darkslategray',
  };

  return (
    <div>
      <div className="major">
        <div className="container">
          <div className="sub_section">
            <nav className="sub_menu">
              <h1 className="depth1_title header_title_etc" style={textStyles}>
                {props.title}
              </h1>
              <ul className="depth2_list">
                <li className="depth2_item" menu-id="590">
                  <div className="depth2_wrapper">
                    <div className="depth2_wrapper_bg"></div>
                    <Link to={props.link1} style={textStyles}>
                      <span>{props.subtitle}</span>
                    </Link>
                  </div>
                </li>
                <li className="depth2_item" menu-id="593">
                  <div className="depth2_wrapper">
                    <div className="depth2_wrapper_bg"></div>
                    <Link to={props.link2} style={textStyles}>
                      <span>{props.subtitle2}</span>
                    </Link>
                  </div>
                </li>
                <li className="depth2_item" menu-id="593">
                  <div className="depth2_wrapper">
                    <div className="depth2_wrapper_bg"></div>
                    <Link to={props.link3} style={textStyles}>
                      <span>{props.subtitle3}</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>
            <div className="sub_content">
              <div className="sub_content_header">
                <h2 className="sub_content_title header_title_1" style={textStyles}>
                  {props.contentTitle}
                </h2><br />
              </div>
              <hr />
              <div className="content_wrapper" style={{ display: "block" }}>
                <div>
                  <div className="a7_wrapper">
                    <div className="law_content">
                      <div className="law_content_box">
                        <br />
                        <br />
                        <p style={textStyles}>{props.content}</p>
                      </div>
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

export default SideMenubar;
