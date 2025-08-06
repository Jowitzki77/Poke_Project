import React from "react";

import logo from "../../../../assets/pngegg.png";
const Logo = (props) => {
    return (
        <div className={props.type}>
            <img className="header__logo" src={logo} alt="Logo" />
        </div>
    )
}

export default Logo;