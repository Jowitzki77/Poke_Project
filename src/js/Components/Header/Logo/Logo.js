import React from "react";
import "./_logo.scss"

import logo from "../../../../assets/PokePartyCele.png";
const Logo = (props) => {
    return (
        <div className={props.type}>
            <img className="header__logo" src={logo} alt="Logo" />
        </div>
    )
}

export default Logo;