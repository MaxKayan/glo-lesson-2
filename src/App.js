// import React from 'react'
import "./App.css";

import { FeaturesSection, Header, MainSection } from "./components";

function App() {
    return (
        <div className="App">
            <Header phoneNum="+7(977)491-80-12" />
            <MainSection />
            <FeaturesSection />
        </div>
    );
}

export default App;
