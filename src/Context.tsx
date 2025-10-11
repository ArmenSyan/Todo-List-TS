import { createContext, ReactNode, useState } from "react";

interface DataType {
    name : string;
    checked : boolean ; 
}
interface ContextType {
    Data : DataType[];
    setData : (value :DataType[]) => void;
}

export const FilterContext = createContext<ContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }>  = ({ children }) => {
    const [Data, setData] = useState<DataType[]>([])
    return (
        <FilterContext.Provider value={{
            Data, setData
        }} >
            {children}
        </FilterContext.Provider>
    )
}