// import React from 'react'
import { useState } from "react";
import "./App.css";

import {
    ContactSection,
    FeaturesSection,
    FooterSection,
    Header,
    MainSection,
} from "./components";

function App() {
    const [state, setState] = useState({
        name: "Каяндер Максим",
        phone: "+7(977)491-80-12",
    });

    return (
        <div className="App">
            <Header phoneNum={state.phone} />
            <MainSection />
            <FeaturesSection />
            <ContactSection />
            <FooterSection name={state.name} phoneNum={state.phone} />
        </div>
    );
}

export default App;
