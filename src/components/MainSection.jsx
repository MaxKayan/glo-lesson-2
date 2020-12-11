import React from "react";

export default function MainSection() {
    return (
        <main>
            <div className="wrapper">
                <div className="main">
                    <h1 className="main-head">
                        Заголовок c уникальным торговым предложением по системе
                        4U
                    </h1>
                    <div className="main-small">
                        Описания предлжения компании. Сайт рыбатекст поможет
                        дизайнеру, верстальщику, вебмастеру сгенерировать
                        несколько абзацев более.
                    </div>
                    <button className="btn main-btn">
                        <span>Подробнее</span>
                    </button>
                </div>
            </div>
        </main>
    );
}
