import Search from "./Search/Search"

function Header() {
  return (
    <div className="flex flex-col justify-evenly items-center ">
        <h1 className="font-medium text-[26px] ">TODO LIST</h1>
        <div className="flex justify-evenly items-center gap-x-2 mt-[16px]">
            <Search />
        </div>
    </div>
  )
}

export default Header