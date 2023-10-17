import React from "react";
import SideMenubar from "../layouts/SideMenubar";
import Class from "./class";


function Class_Grade() {
    return(
        <div className="class">
            <SideMenubar 
                    title="수업 • 성적"
                    subtitle="수업관련"
                    link1="/class"
                    subtitle2="성적관련"
                    link2="/grade"
                    contentTitle="수업관련"
                    content={<div><Class /></div>}     
            />
        </div>
    );
}   

export default Class_Grade;