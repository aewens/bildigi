import React, { useState } from "react";
import { useStore } from "./store";

const Tab = ({ index }) => {
    const [state, dispatch] = useStore();

    return (
        <li className={"Tab " + (state.pages[index].active ? "active" : "" ) }
            onClick={() => dispatch({ type: "PAGE_ACTIVE", payload: index })}>
            {state.pages[index].name}
        </li>
    );
};

export default Tab;
