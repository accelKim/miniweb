import React, { useState } from "react";
import Header from '../layouts/Header'
import Slide from "./slide";
import Notice from "./notice";
import Schedule from "./schedule";
import QuickUnderGraduate from "./QuickUnderGraduate";
import Footer from "../layouts/Footer";

function Home() {
    return (
        <div id="container">
            <Header />
            <Slide />
            <Notice />
            <Schedule />
            <QuickUnderGraduate />
            <Footer />
        </div>
    );
};

export default Home;