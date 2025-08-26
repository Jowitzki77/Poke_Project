import React from "react";
import container from "../../../scss/layout/_grid.scss"

import "./_header.scss";

const Header = (props) => {
    return (
        <div className="container">
            <div className={props.type}>
                {props.children}
            </div>
            <hr className="header__divider"/>
        </div>

    )
}
export default Header;