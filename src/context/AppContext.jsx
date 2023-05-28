import { createContext, useState, ReactNode } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isHover, setIsHover] = useState(false);

    const contextData = {
        isHover, setIsHover
    };

    return (
        <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
    );
};
export default AppContext;