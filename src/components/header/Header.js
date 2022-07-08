import React from 'react';
import classes from "./hedaer.module.css";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={classes.wrapper}>
            <ul className={classes.menu}>
                <li>
                    <NavLink to="/" className={classes.link}>main page</NavLink>
                </li>
                <li>
                    <NavLink to="/blogs" className={classes.link}>blogs page</NavLink>
                </li>
            </ul>
        </div>
    );
}
export default Header;