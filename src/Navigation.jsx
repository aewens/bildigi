import React, { useState } from "react";
import Tab from "./Tab";
import { useStore } from "./store";

const Navigation = () => {
    const [store, dispatch] = useStore();

    const changePage = (name) => {
        dispatch({type: "PAGE_ACTIVE", payload: name});
    }

    return (
        <ul className="Navigation">
        {store.pages.map((page, index) => (
            <Tab
                key={index}
                index={index}
                onClick={e => changePage(page.name)}/>
        ))}
        </ul>
    );
}

export default Navigation;
