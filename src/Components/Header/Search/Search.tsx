import { IoSearchOutline } from "react-icons/io5";
import { useFilter } from "../../../CustomHook";
function Search() {
  const { setSearchInputValue, darkMode } = useFilter()

  function setVal(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value;
    setSearchInputValue(v.toLowerCase());
  }

  return (
    <div className="flex justify-items-center">
      <input
        type="text"
        placeholder="Search note..."
        className={`w-[522px] h-[38px] border-[2px] px-[16px] rounded-[5px] rounded-r-[0px] border-r-0 ${darkMode ? 'border-white' : 'border-purple'} py-[4px] text-[16px] focus:outline-0`}
        onChange={(e) => setVal(e)}
      />
      <button className={`w-[40px] h-[38px] py-[4px] text-[22px] hover:cursor-pointer border-[2px] border-l-0 ${darkMode ? 'border-white text-white' : "border-purple text-purple"} rounded-[5px] rounded-l-[0px] `}>
        <IoSearchOutline />
      </button>
    </div>
  )
}

export default Search