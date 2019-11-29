import React, { useState } from "react";
//import Posts from "./Posts";
import { useStore } from "./store";

const MainPanel = () => {
    const [store, dispatch] = useStore();

    return (
        <main className="MainPanel">
        {store.pages.map((page, index) => {
            if (page.active) {
                const Page = page.page;
                return (
                    <Page key={index} />
                );
            }
        })}
        </main>
    );
}

export default MainPanel;
