import { FiMoon } from "react-icons/fi";
import { useFilter } from "../../../CustomHook";
import { HiOutlineSun } from "react-icons/hi";

function Shift() {
  const { darkMode, setDarkMode } = useFilter()

  function setShift() {
    if (darkMode) setDarkMode(false)
    else setDarkMode(true)
  }
  return (
    <div onClick={setShift} className="w-[38px] h-[38px] bg-purple rounded-[5px] flex justify-evenly items-center text-white md:text-[22px] lg:text-[24px] hover:cursor-pointer hover:bg-ph">
      {darkMode ?
      (<HiOutlineSun />) :
      (<FiMoon />)
      }
      
    </div>
  )
}

export default Shift