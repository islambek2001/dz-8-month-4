import React from 'react';
import {useLocation} from "react-router-dom";


function MainPage(props) {
    const location = useLocation();
    console.log(location);

    return (
        <div className="container">
            <h1>Main page</h1>
        </div>
    );
}

export default MainPage;