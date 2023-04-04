import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
    return(
        <>
            <p>Yo</p>
            <Outlet />
        </>
        
    )
}

export default Layout