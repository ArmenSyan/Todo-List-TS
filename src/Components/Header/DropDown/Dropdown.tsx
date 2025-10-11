import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


function Dropdown() {
    const [open, setOpen]= useState<boolean>(false)

    function button() {
        if (open) setOpen(false)
        else setOpen(true)
    }
    return (
        <div className="relative w-[100px] ">
            <button onClick={button}
                className="w-full h-[38px] rounded-[5px] flex justify-between items-center cursor-pointer text-[18px] px-[10px] text-white bg-purple font-medium duration-300 transition-all">ALL  {!open ? <IoIosArrowDown /> : <IoIosArrowUp />}</button>

            {open && (
                <div className="absolute  mt-2 w-full bg-[white] text-purple border rounded-[5px] py-[5px] duration-300">
                    <ul className="flex flex-col text-center font-medium">
                        <li className="w-[full] cursor-pointer h-[38px] px-[10px]  flex justify-between items-center hover:bg-hover duration-300 transition-all">All</li>
                        <li className="w-[full] cursor-pointer h-[38px] px-[10px]  flex justify-between items-center hover:bg-hover duration-300 transition-all">Complate</li>
                        <li className="w-[full] cursor-pointer h-[38px] px-[10px]  flex justify-between items-center hover:bg-hover duration-300 transition-all">Incomplate</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Dropdown