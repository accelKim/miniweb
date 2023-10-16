import React from "react";
import SideMenubar from "../layouts/SideMenubar";
import Enollment from "./enrolment";


function Enolment_Index() {
    return (
        <div className="Enolment">
            <SideMenubar
                title="수강신청"
                subtitle="수강신청"
                link2="/enolment"
                contentTitle="수강신청"
                content={<div><Enollment /></div>}
                
            />
        </div>
    );
}

export default Enolment_Index;
