import React, { useState } from "react";
import Header from '../layouts/Header'
import Footer from "../layouts/Footer";
import QuickUnderGraduate from "./QuickUnderGraduate";

function Home() {
    return (
        <div id="container">
            <Header />
            <QuickUnderGraduate />
            <Footer />
        </div>
    );
};

export default Home;