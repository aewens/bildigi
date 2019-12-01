import React, { useState } from "react";
import Tab from "./Tab";
import { useStore } from "./store";

const Navigation = () => {
    const [store, dispatch] = useStore();

    const changePage = (index) => {
        dispatch({type: "PAGE_ACTIVE", payload: index});
    }

    return (
        <ul className="Navigation">
        {store.pages.map((page, index) => (
            <Tab
                key={index}
                index={index}
                onClick={e => changePage(index)}/>
        ))}
        </ul>
    );
}

export default Navigation;
