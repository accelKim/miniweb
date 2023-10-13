import React from 'react';
import Header from './Header';
import Footer from './Footer';
import QuickUnderGraduate from '../main/QuickUnderGraduate';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <QuickUnderGraduate />
            {children}
            <Footer />
        </>
    );
}

export default Layout;