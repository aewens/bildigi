import React, { useState } from "react";
import Tab from "./Tab";
import { useStore } from "./store";

const Navigation = () => {
    const [store, dispatch] = useStore();

    return (
        <ul className="Navigation">
        {store.pages.map((page, index) => (
            <Tab key={index} index={index} />
        ))}
        </ul>
    );
}

export default Navigation;
