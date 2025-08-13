import React, { useState, useEffect } from "react";
import "./_menu.scss";
import menu from "../../../../assets/pngegg.png";

const Menu = () => {
    const [mobile, setMobile] = useState(true);

    // Static menu items
    const items = [
        { title: "Turnir", url: "/turnir" },
        { title: "Dogodki", url: "/dogodki" },
        { title: "Domov", url: "/" }
    ];

    useEffect(() => {
        if (window.innerWidth < 900) {
            setMobile(false);
        }
    }, []);

    const toggleMobile = () => {
        setMobile(!mobile);
    };

    return (
        <nav className="menu">

            <ul style={{ visibility: mobile ? "visible" : "hidden" }}>
                {items.map((item, i) => (
                    <li key={i}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
            <img
                onClick={toggleMobile}
                src={menu}
                className="menu__toggle--icon"
                alt="mobile toggle"
            />
        </nav>
    );
};
export default Menu;

