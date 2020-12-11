import React from "react";

export default function Header({ phoneNum = "+7(962)556-1234" }) {
    return (
        <header>
            <div className="wrapper">
                <div className="header">
                    <a href="#">
                        <div className="header-logo"></div>
                    </a>
                    <a href="tel:888" className="header-phone"></a>
                    <div className="header-phonelink">
                        <a href={`tel:${phoneNum}`}>{phoneNum}</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
