import { IoSearchOutline } from "react-icons/io5";
function Search() {
  return (
    <div className="flex justify-items-center">
        <input 
        type="text" 
        placeholder="Search note..." 
        className="w-[522px] h-[38px] border-[2px] px-[16px] rounded-[5px] rounded-r-[0px] border-r-0 border-purple  py-[4px] text-[16px] focus:outline-0"/>
        <button className="w-[40px] h-[38px] py-[4px] text-[22px] hover:cursor-pointer border-[2px] border-l-0 border-purple rounded-[5px] rounded-l-[0px] text-purple">
        <IoSearchOutline />
        </button>
    </div>
  )
}

export default Search