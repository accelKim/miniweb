import React from "react";
import SideMenubar from "../layouts/SideMenubar";
import Grade from "./grade";


function GradeNotice() {
    return(
        <div className="grade">
            <SideMenubar 
                    title="수업 • 성적"
                    subtitle="수업관련"
                    link1="/class"
                    subtitle2="성적관련"
                    link2="/grade"
                    contentTitle="성적관련"
                    content={<div><Grade /></div>}     
            />
        </div>
    );
}   

export default GradeNotice;