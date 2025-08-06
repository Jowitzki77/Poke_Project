import React from "react";

import "./_header.scss";

const Header = (props) => {
    return (
        <div className={props.type}>
            {props.children}
        </div>
    )
}
export default Header;