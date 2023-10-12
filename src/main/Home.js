import React, { useState } from "react";
import Header from '../layouts/Header'
import ImgSlideShow from "./ImgSlideShow";
import QuickUnderGraduate from "./QuickUnderGraduate";

function Home() {
    return (
        <div id="container">
            <Header />
            <ImgSlideShow />
            <QuickUnderGraduate />
            <QuickUnderGraduate />
            <QuickUnderGraduate />
            <QuickUnderGraduate />

        </div>
    );
};

export default Home;