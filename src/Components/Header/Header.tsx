import Dropdown from "./DropDown/Dropdown"
import Search from "./Search/Search"
import Shift from "./Shift/Shift"

function Header() {
  return (
    <div className="flex flex-col justify-center items-center ">
        <h1 className="font-medium text-[26px] ">TODO LIST</h1>
        <div className="flex justify-evenly items-center gap-x-2 mt-[16px]">
            <Search />
            <Dropdown />
            <Shift />
        </div>
    </div>
  )
}

export default Header