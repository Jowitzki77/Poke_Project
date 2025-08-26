import React from "react"
import "./_footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__contact">
                <p className="footer__info__header">KONTAKTIRAJTE NAS:</p>
                <p className="footer__info">
                    <a className="footer__text" href="tel:+38651369988">+386 51 369 988</a>
                </p>
                <p className="footer__info">
                    <a className="footer__text" href="mailto:example@email.com">example@email.com</a>
                </p>
            </div>
            <div className="footer__rights">
                <p className="footer__rights__text">© {new Date().getFullYear()} Poke Party Cele, All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;