import React from "react"
import "./_footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__contact">
                <p className="footer__info">
                    📞 <a href="tel:+38651369988">+386 51 369 988</a>
                </p>
                <p className="footer__info">
                    ✉️ <a href="mailto:example@email.com">example@email.com</a>
                </p>
            </div>
            <div className="footer__rights">
                <p>© {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;