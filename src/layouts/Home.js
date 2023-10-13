import React from 'react';
import Slide from '../main/Slide';
import Notice from "../main/Notice";
import Schedule from '../main/Schedule';
import QuickUnderGraduate from '../main/QuickUnderGraduate';

const Home = () => {
    return (
        <div className='home'>
            <Slide />
            <Notice />
            <Schedule />
            <QuickUnderGraduate />
        </div>
    )
}

export default Home;