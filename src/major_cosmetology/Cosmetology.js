import React from "react";
import '../css/Location.css';
import SideMenubar from "../layouts/SideMenubar";
import CosmetologyMajor from "./CosmetologyMajor";
import CosmetologyEdGoals from "./CosmetologyEdGoals";
import CosmetologyCareer from "./CosmetologyCareer";

const textStyles = {
    color: 'darkslategray',
};

function Cosmetology() {
    return (
        <div className="cosmetology_department">
            <SideMenubar
                title="미용예술학부"
                subtitle="학부소개"
                link1="/ba"
                subtitle2="미용학과"
                link2="/cosmetology_department"
                link3="/makeup_artistry_department"
                subtitle3="메이크업학과"
                contentTitle="미용전공"
                content={
                    <div>
                        <CosmetologyMajor style={textStyles} />
                        <CosmetologyEdGoals style={textStyles} />
                        <CosmetologyCareer style={textStyles} />
                    </div>
                }
            />
        </div>
    );
}

export default Cosmetology;
