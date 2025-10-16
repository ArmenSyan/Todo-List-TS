import Dropdown from "./DropDown/Dropdown"
import Search from "./Search/Search"
import Shift from "./Shift/Shift"

function Header() {
  return (
    <div className="flex flex-col justify-center items-center md:mt-[45px] lg:mt-[60px]">
        <h1 className="font-medium md:text-[25px] lg:text-[26px] ">TODO LIST</h1>
        <div className="flex justify-evenly items-center gap-x-2 mt-[16px]">
            <Search />
            <Dropdown />
            <Shift />
        </div>
    </div>
  )
}

export default Header