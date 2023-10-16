import React from "react";
import SideMenubar from "../../layouts/SideMenubar";
import PostDetail from "./PostDetail";

function ForumDetail() {
    return(
        <div className="forumDetail">
            <SideMenubar 
                    title="대학생활"
                    subtitle="게시판"
                    link1="/post"
                    contentTitle="QnA"
                    content={<div><PostDetail /></div>}
                   
                    
            />
        </div>
    );
}   

export default ForumDetail;