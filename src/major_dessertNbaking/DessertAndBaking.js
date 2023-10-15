import React from "react";
import '../css/Location.css';
import SideMenubar from "../layouts/SideMenubar";
import DessertAndBakingMajor from "./DessertAndBakingMajor"
import DessertAndBakingEdGoals from "./DessertAndBakingEdGoals";
import DesertAndBakingCareer from "./DesertAndBakingCareer";

function DessertAndBaking() {
    return (
        <div className="dessert_and_baking">
            <SideMenubar
                title="디저트조리학부"
                subtitle="학부소개"
                link1="/cla"
                subtitle2="디저트베이커리전공"
                link2="/dessert_and_baking"
                link3="/culinary_arts"
                subtitle3="조리전공"
                contentTitle="디저트베이커리전공"
                content={<div><DessertAndBakingMajor /> <DessertAndBakingEdGoals /> <DesertAndBakingCareer /></div>}
            />
        </div>
    );
}

export default DessertAndBaking;