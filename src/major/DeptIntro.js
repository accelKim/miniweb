import React from "react";
import '../css/Location.css';
import '../css/DeptIntro.css';
import SideMenubar from "../layouts/SideMenubar";
import DeptIntroDetail from "./DeptIntroDetail";
import DeptEduObj from "./DeptEduObj";

function DeptIntro() {
    return (
        <div className="department_introduce">
            <SideMenubar
                title="조직도"
                subtitle="학부소개"
                link1="/dept_intro"
                subtitle2="미용학과"
                link2="/cosmetology_department"
                link3="/makeup_artistry_department"
                subtitle3="메이크업학과"
                contentTitle="학부소개"
                content={<div><DeptIntroDetail /> <DeptEduObj /></div>}
            />
        </div>
    );
}

export default DeptIntro;
