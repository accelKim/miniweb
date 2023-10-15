import React from "react";
import SideMenubar from "../../layouts/SideMenubar";
import PostCreate from "./PostCreate";

function ForumCreate() {
    return(
        <div className="forumCreate">
            <SideMenubar 
                    title="대학생활"
                    subtitle="게시판"
                    link1="/post"
                    contentTitle="QnA작성"
                    content={<div><PostCreate /></div>}
                   
                    
            />
        </div>
    );
}   

export default ForumCreate;