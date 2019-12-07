import React, { useState } from "react";
import { useStore } from "./store";

const Sidebar = () => {
    const [state, dispatch] = useStore();

    return (
        <aside className="Sidebar">
        {state.sidebars.map((entry, index) => {
            if (entry.page == state.active_page) {
                return (
                    <div className="Entry"
                        key={index}
                        index={index}>
                        {entry.name}
                    </div>
                );
            }
        })}
        </aside>
    );
}

export default Sidebar;
