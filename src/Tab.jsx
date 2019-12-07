import React, { useState } from "react";
import { useStore } from "./store";

const Tab = ({ index }) => {
    const [state, dispatch] = useStore();
    const name = state.pages[index].name
    const active = name == state.active_page;

    return (
        <li className={"Tab " + (active ? "active" : "" ) }
            onClick={() => dispatch({ type: "PAGE_ACTIVE", payload: name })}>
            {name}
        </li>
    );
};

export default Tab;
