import React from "react";
import '../css/Location.css';
import SideMenubar from "../layouts/SideMenubar";

function Cosmetology() {
    return(
        <div className="cosmetology_department">
            <SideMenubar 
                title="미용예술학부"
                subtitle="학부소개"
                link1="/dept_intro"
                subtitle2="미용학과"y
                link2="/cosmetology_department"
                link3="/makeup_artistry_department"
                subtitle3="메이크업학과"
                contentTitle="미용전공"
                content="여기는 내용을 입력해주세요"
            />
        </div>
    );
}

export default Cosmetology;