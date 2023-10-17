import React from "react";
import '../css/Location.css';
import '../css/DeptIntro.css';
import SideMenubar from "../layouts/SideMenubar";
import DeptIntroDetail from "./DeptIntroDetail_fusionArt";
import DeptEduObj from "./DeptEduObj_fusionArt";

const textStyles = {
    color: 'darkslategray',
};

function DeptIntro_FusionArt() {
    return (
        <div className="department_introduce" style={textStyles}>
            <SideMenubar
                title="융합예술학부"
                subtitle="학부소개"
                link1="/cia"
                subtitle2="영상제작학과"
                link2="/video_product_department"
                link3="/digital_media_design_department"
                subtitle3="디지털미디어디자인학과"
                contentTitle="학부소개"
                content={<div><DeptIntroDetail /> <DeptEduObj /></div>}
            />
        </div>
    );
}

export default DeptIntro_FusionArt;
