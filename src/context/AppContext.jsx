import { createContext, useState, ReactNode } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isHover, setIsHover] = useState(false);
    const [loadFirstPage, setLoadFirstPage] = useState(false)

    const contextData = {
        isHover, setIsHover,
        loadFirstPage,setLoadFirstPage,
    };

    return (
        <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
    );
};
export default AppContext;