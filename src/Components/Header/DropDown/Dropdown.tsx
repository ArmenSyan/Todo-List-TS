import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useFilter } from "../../../CustomHook";

interface dropDownElemsType {
    name: string;
    type: boolean | null
}[]
const dropDownElems: dropDownElemsType[] = [
    { name: 'All', type: null },
    { name: 'Complate', type: true },
    { name: 'Incomplate', type: false },

]


function Dropdown() {
    const { setNotesType } = useFilter()
    const [open, setOpen] = useState<boolean>(false)
    const [index, setIndex] = useState<number>(0)

    function button() {
        if (open) setOpen(false)
        else setOpen(true)
    }
    function setType(type: boolean | null, i: number) {
        setNotesType(type)
        setOpen(false)
        setIndex(i)
    }
    return (
        <div className="relative w-[140px] ">
            <button onClick={button}
                className="w-full h-[38px] rounded-[5px] flex justify-between items-center cursor-pointer text-[18px] px-[10px] text-white bg-purple font-medium duration-300 transition-all">{dropDownElems[index].name}  {!open ? <IoIosArrowDown /> : <IoIosArrowUp />}</button>

            {open && (
                <div className="absolute  mt-2 w-full bg-[white] text-purple border rounded-[5px] py-[5px] duration-300">
                    <ul className="flex flex-col text-center font-medium">
                        {dropDownElems.map((el, i) => (
                            <li key={i} onClick={() => setType(el.type, i)} className="w-[full] cursor-pointer h-[38px] px-[10px]  flex justify-between items-center hover:bg-hover duration-300 transition-all">{el.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Dropdown