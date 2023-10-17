import React from "react";
import '../css/Location.css';
import SideMenubar from "../layouts/SideMenubar";
import MakeupMajor from "./MakeupMajor";
import MakeupEdGoals from "./MakeupEdGoals";
import MakeupCareer from "./MakeupCareer";

const textStyles = {
    color: 'darkslategray',
};

function MakeupMain() {
    return (
        <div className="cosmetology_department">
            <SideMenubar
                title="미용예술학부"
                subtitle="학부소개"
                link1="/ba"
                subtitle2="미용학과"
                link2="/cosmetology_department"
                link3="/makeup_artistry_department"
                subtitle3="메이크업전공"
                contentTitle="메이크업전공"
                content={<div><MakeupMajor /> <MakeupEdGoals /> <MakeupCareer /></div>}
            />
        </div>
    );
}

export default MakeupMain;
