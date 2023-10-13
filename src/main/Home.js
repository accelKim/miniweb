import React, { useState } from "react";
import Header from '../layouts/Header'
import Footer from "../layouts/Footer";
import QuickUnderGraduate from "./QuickUnderGraduate";
import Notice from "./notice";
import Schedule from "./schedule";
import Slide from "./slide";

function Home() {
    return (
        <div id="container">
            <Header />
            <QuickUnderGraduate />
            <Slide />
            <Notice />
            <Schedule />
            <Footer />
        </div>
    );
};

export default Home;