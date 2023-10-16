import React from "react";
import SideMenubar from "../../layouts/SideMenubar";
import PostList from './PostList';


function Forum() {
    return(
        <div className="forum">
            <SideMenubar 
                    title="대학생활"
                    subtitle="게시판"
                    link1="/post"
                    contentTitle="QnA"
                    content={<div><PostList /></div>}
                   
                    
            />
        </div>
    );
}   

export default Forum;