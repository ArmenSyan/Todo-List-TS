import { createContext, ReactNode, useState } from "react";

interface ContextType {

}

export const FilterContext = createContext<ContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }>  = ({ children }) => {

    return (
        <FilterContext.Provider value={{
        }} >
            {children}
        </FilterContext.Provider>
    )
}