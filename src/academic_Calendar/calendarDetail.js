import React from "react";
import SideMenubar from "../layouts/SideMenubar";
import '../css/Calendar.css'
import Calender from './calendar';

function CalendarDetail() {
    return (
        <div className="Academic_Calendar">
            <SideMenubar
                title="학사정보"
                subtitle="학사일정"
                link1="/academic_Calendar"
                contentTitle="학사일정"
                content={<div><Calender/></div>}
            />
        </div>
    );
}


export default CalendarDetail;