import React, { createContext, useContext, useReducer } from "react";
import Dashboard from "./Dashboard";
import Canvas from "./Canvas";
import Derivide from "./Derivide";
import Bots from "./Bots";
//import rootReducer from "./reducers";

const initialState = {
    active_page: "Bots",
    pages: [
        { name: "Dashboard", page: Dashboard },
        { name: "Canvas", page: Canvas },
        { name: "Derivide", page: Derivide },
        { name: "Bots", page: Bots },
    ],
    sidebars: [
        { name: "Graphs", active: true, page: "Dashboard" },
        { name: "Babili", active: true, page: "Bots" },
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
    case "PAGE_ACTIVE":
        return {...state, active_page: action.payload};
    default:
        return state;
    }
};

const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = [state, dispatch];

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
   );
};

export const useStore = () => useContext(StoreContext);
