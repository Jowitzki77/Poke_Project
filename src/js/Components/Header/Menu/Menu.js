import React, { useState, useEffect } from "react";
import "./_menu.scss";
import menuIcon from "../../../../assets/pngegg.png";

const Menu = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const items = [
        { title: "Turnir", url: "/turnir" },
        { title: "Dogodki", url: "/dogodki" },
        { title: "Domov", url: "/" },
    ];

    return (
        <nav className="menu">
            {isMobile && (
                <img
                    onClick={() => setIsOpen(!isOpen)}
                    src={menuIcon}
                    className="menu__toggle--icon"
                    alt="mobile toggle"/>
            )}

            <ul className={`menu__list ${isMobile && isOpen ? "open" : ""} ${isMobile && !isOpen ? "closed" : ""}`}>
                {items.map((item, i) => (
                    <li key={i}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;

