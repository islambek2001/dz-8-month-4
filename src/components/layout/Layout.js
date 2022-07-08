import React from 'react';
    import Header from "../header/Header";
    import {Outlet} from "react-router-dom";

function Layout() {
    console.log('outlet', Outlet)
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}

export default Layout;