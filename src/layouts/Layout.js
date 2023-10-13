import React from 'react';
import Header from './Header';
import Footer from './Footer';
import QuickUnderGraduate from '../main/QuickUnderGraduate';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <QuickUnderGraduate />
            <Footer />
        </>
    );
}

export default Layout;