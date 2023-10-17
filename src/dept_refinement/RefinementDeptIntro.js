import React from 'react';
import '../css/DeptIntro.css';
import SideMenubar from '../layouts/SideMenubar';
import RefinementDeptIntroDetail from './RefinementDeptIntroDetail';
import RefinementEduObj from './RefinementEduObj'

const textStyles = {
    color: 'darkslategray',
};

const RefinementDeptIntro = () => {
    return (
        <div className="refinement">
            <SideMenubar
                title="교양"
                subtitle="학부소개"
                link1="/cla"
                contentTitle="교양"
                content={<div><RefinementDeptIntroDetail /> <RefinementEduObj /></div>}
            />
        </div>
    );
}

export default RefinementDeptIntro;
