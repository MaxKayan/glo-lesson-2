import React from "react";

export default function FooterSection({ name, phoneNum }) {
    return (
        <footer>
            <div className="footer">
                <div className="footer-logo"></div>
                <div className="footer-company">
                    <span>© 2020 XXXcompany. Все права защищены.</span>
                </div>
                <a href="tel:888" className="footer-phone"></a>
                <div className="footer-websurfer">
                    <span className="footer-websurfer_build">Сделано</span>
                    <a href="#">{name}</a>
                </div>
                <div className="footer-phonelink">
                    <a href="tel:888">{phoneNum}</a>
                </div>
            </div>
        </footer>
    );
}
