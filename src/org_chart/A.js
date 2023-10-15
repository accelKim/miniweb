import React from "react";
import '../css/Location.css';
import '../css/tree.css';
import SideMenubar from "../layouts/SideMenubar";
import A8 from "./a8";


function Org() {
    return (
        <div className="org_chart">
            <SideMenubar
                title="학교 소개"
                subtitle="학교 위치"
                link1="/location"
                subtitle2="기구체계도"
                link2="/orgChart"
                contentTitle="기구체계도"
                content={<div><A8 /></div>}
            />
        </div>
    );
}

export default Org;
