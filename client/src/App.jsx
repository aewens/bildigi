import React, { useState, useContext, useReducer } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import MainPanel from "./MainPanel";
import { StoreProvider } from "./store";

import "./App.scss";

const App = () => {
    //const [pages, setPages] = useState([
    //    { "name": "Dashboard", "active": false },
    //    { "name": "Search", "active": true },
    //    { "name": "Todo", "active": false },
    //    { "name": "Feeds", "active": false },
    //]);

    //const selectActive = index => {
    //    const newPages = [...pages];
    //    newPages.map(tab => {
    //        tab.active = false;
    //        return tab;
    //    });
    //    newPages[index].active = true;
    //    setPages(newPages);
    //};

    return (
        <StoreProvider>
            <div className="App">
                <Header />
                <Navigation />
                <Sidebar />
                <MainPanel />
            </div>
        </StoreProvider>
    );
}

export default App;
