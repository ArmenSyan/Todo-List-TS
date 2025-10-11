import { createContext, ReactNode, useState } from "react";

interface DataType {
    name: string;
    checked: boolean;

}
interface ContextType {
    // Data: DataType[];
    // setData: (value: DataType[]) => void;
    activeModal: boolean;
    setActiveModal: (value: boolean) => void
}

export const FilterContext = createContext<ContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // const [Data, setData] = useState<DataType[]>([])

    const [activeModal, setActiveModal] = useState<boolean>(false);
    return (
        <FilterContext.Provider value={{
            // Data, setData,

            activeModal, setActiveModal,

        }} >
            {children}
        </FilterContext.Provider>
    )
}