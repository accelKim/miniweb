import React from "react";
import '../css/Location.css';
import '../css/DeptIntro.css';
import SideMenubar from "../layouts/SideMenubar";
import DesertDeptIntroDetail from "./DesertDeptIntroDetail"
import DesertEduObj from "./DesertEduObj";

const textStyles = {
    color: 'darkslategray',
};

function DesertDeptIntro() {
    return (
        <div className="desert_department_introduce" style={textStyles}>
            <SideMenubar
                title="디저트·조리학부"
                subtitle="학부소개"
                link1="/dpca"
                subtitle2="디저트베이커리전공"
                link2="/dessert_and_baking"
                link3="/culinary_arts"
                subtitle3="조리전공"
                contentTitle="학부소개"
                content={<div><DesertDeptIntroDetail /> <DesertEduObj /></div>}
            />
        </div>
    );
}

export default DesertDeptIntro;
