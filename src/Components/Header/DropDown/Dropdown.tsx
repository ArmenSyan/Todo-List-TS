import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useFilter } from "../../../CustomHook";
import { DataType } from "../../../Context";

const dropDownElems = [
  { name: "All", type: null },
  { name: "Complate", type: true },
  { name: "Incomplate", type: false },
];

function Dropdown() {
  const { setNotesType, setFilteredData, data, checkedNotes, searchInputValue } = useFilter();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  function button() {
    setOpen((prev) => !prev);
  }

  function setType(type: boolean | null, i: number) {
    setIndex(i);
    setOpen(false);
    setNotesType(type);

    // 🔥 фильтрация сразу при выборе
    const filtered: DataType[] = data.filter((note: DataType) => {
      const text = note.name.toLowerCase();
      if (searchInputValue.length > 0 && !text.includes(searchInputValue))
        return false;

      if (type === false && checkedNotes.includes(note.id)) return false;
      if (type === true && !checkedNotes.includes(note.id)) return false;

      return true;
    });

    setFilteredData([...filtered]);
  }

  return (
    <div className="relative w-[90px] md:w-[130px] lg:w-[140px]">
      <button
        onClick={button}
        className="w-full h-[38px] rounded-[5px] flex justify-between items-center cursor-pointer text-[13px] md:text-[17px] lg:text-[18px] px-[10px] text-white bg-purple hover:bg-ph font-medium duration-300 transition-all"
      >
        {dropDownElems[index].name} {!open ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>

      {open && (
        <div className="absolute mt-2 w-full bg-white text-purple border rounded-[5px] py-[5px] duration-300">
          <ul className="flex flex-col text-center font-medium text-[12px] md:text-[14px] lg:text-[16px]">
            {dropDownElems.map((el, i) => (
              <li
                key={i}
                onClick={() => setType(el.type, i)}
                className="w-full cursor-pointer h-[30px] px-[10px] flex justify-between items-center hover:bg-hover duration-300 transition-all"
              >
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
