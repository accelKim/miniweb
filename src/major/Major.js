import React from "react";
import '../css/Location.css';
import SideMenubar from "../layouts/SideMenubar";

function Major() {
    return (
        <SideMenubar
            title="미용예술학부"
            subtitle="학부소개"
            link1="/dept_intro"
            subtitle2="미용학과"
            link2="/cosmetology_department"
            link3="/makeup_artistry_department"
            contentTitle="학부소개"
            content="영역확인용"
        />
    );
}

export default Major;