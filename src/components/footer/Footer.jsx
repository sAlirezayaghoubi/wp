import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">SeyedAlireza</h1>
                    <ul className="footer__list">
                        <li>
                            <a href="#about" className="footer__link">About</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link">Projects</a>
                        </li>
                        <li>
                            <a href="#testimonials" className="footer__link">Testimonials</a>
                        </li>
                    </ul>
                <div className="footer__social">
                    <a href="https://instagram.com/armiinygh" className="footer__social-link" target="_blank">
                        <i className="uil-instagram"></i>
                    </a>
                    <a href="https://wa.me/+989120327514" className="footer__social-link" target="_blank">
                        <i className="uil-whatsapp"></i>
                    </a>
                    <a href="" className="footer__social-link" target="_blank">
                        <i className="uil-github-alt"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; SeyedalireYaghoubi. All rights reserved
                </span>
            </div>
        </footer>
    )
}
export default Footer