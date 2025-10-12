import { createContext, ReactNode, useState } from "react";

export interface DataType {
    id: number;
    name: string;
    checked: boolean;

}
interface ContextType {
    data: DataType[];
    setData: (value: DataType[]) => void;
    activeModal: boolean;
    setActiveModal: (value: boolean) => void;
    addInputValue: string;
    setAddInputValue: (value: string) => void;
    checkedNotes: number[];
    setCheckedNotes: (value: number[]) => void;
    newNotesInputValue: string;
    setNewNotesInputValue: (value: string) => void;
    changeableNoteId: number | null;
     setChangeableNoteId: (value: number | null) => void;
}

export const FilterContext = createContext<ContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<DataType[]>([])

    const [addInputValue, setAddInputValue] = useState<string>('')
    const [activeModal, setActiveModal] = useState<boolean>(false);

    const [checkedNotes, setCheckedNotes] = useState<number[]>([])

    const [newNotesInputValue, setNewNotesInputValue] = useState<string>('')
    const [changeableNoteId, setChangeableNoteId] = useState<number | null>(null)
    return (
        <FilterContext.Provider value={{
            data, setData,

            addInputValue, setAddInputValue,
            activeModal, setActiveModal,

            checkedNotes, setCheckedNotes,

            newNotesInputValue, setNewNotesInputValue,
            changeableNoteId, setChangeableNoteId,
        }} >
            {children}
        </FilterContext.Provider>
    )
}