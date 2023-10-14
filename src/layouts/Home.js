import React from 'react';
import Slide from '../main/slide';
import Notice from '../main/notice';
import Schedule from '../main/schedule';
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