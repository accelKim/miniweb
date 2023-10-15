import React from "react";
import SideMenubar from "../../layouts/SideMenubar";
import PostEdit from "./PostEdit";

function ForumEdit() {
    return(
        <div className="forumEdit">
            <SideMenubar 
                    title="대학생활"
                    subtitle="게시판"
                    link1="/post"
                    contentTitle="QnA수정"
                    content={<div><PostEdit /></div>}
                    
            />
        </div>
    );
}   

export default ForumEdit;