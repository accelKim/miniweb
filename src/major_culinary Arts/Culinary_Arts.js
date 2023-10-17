import React from "react";
import '../css/Location.css';
import SideMenubar from "../layouts/SideMenubar";
import Culinary_ArtsMajor from "./Culinary_ArtsMajor";
import Culinary_ArtsEdGoals from "./Culinary_ArtsEdGoals";
import Culinary_ArtsCareer from "./Culinary_ArtsCareer";

const textStyles = {
    color: 'darkslategray',
};

function Culinary_Arts() {
    return (
        <div className="culinary_arts_title">
            <SideMenubar
                title="디저트조리학부"
                subtitle="학부소개"
                link1="/cla"
                subtitle2="디저트베이커리전공"
                link2="/dessert_and_baking"
                link3="/culinary_arts"
                subtitle3="조리전공"
                contentTitle="조리전공"
                content={<div><Culinary_ArtsMajor /> <Culinary_ArtsEdGoals /> <Culinary_ArtsCareer /></div>}
            />
        </div>
    );
}

export default Culinary_Arts;
