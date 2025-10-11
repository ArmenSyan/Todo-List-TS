import { createContext, ReactNode, useState } from "react";

export interface DataType {
    name: string;
    checked: boolean;

}
interface ContextType {
    data: DataType[];
    setData: (value: DataType[]) => void;
    activeModal: boolean;
    setActiveModal: (value: boolean) => void
    addInputValue : string;
    setAddInputValue : (value : string) => void
}

export const FilterContext = createContext<ContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<DataType[]>([])

    const [addInputValue, setAddInputValue] = useState<string>('')
    const [activeModal, setActiveModal] = useState<boolean>(false);
    return (
        <FilterContext.Provider value={{
            data, setData,

            addInputValue, setAddInputValue,
            activeModal, setActiveModal,

        }} >
            {children}
        </FilterContext.Provider>
    )
}