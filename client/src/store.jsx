import React, { createContext, useContext, useReducer } from "react";
import Dashboard from "./Dashboard";
import Demo from "./Demo";
//import rootReducer from "./reducers";

const initialState = {
    "pages": [
        { "name": "Dashboard", "active": true, "page": Dashboard },
        { "name": "Demo", "active": false, "page": Demo },
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
    case "PAGE_ACTIVE":
        const newPages = [...state.pages];
        const index = action.payload;
        newPages.map(tab => {
            tab.active = false;
            return tab;
        });
        newPages[index].active = true;
        return {...state, pages: newPages};
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
