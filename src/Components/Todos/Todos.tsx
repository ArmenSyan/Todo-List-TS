import { DataType } from "../../Context"
import { useFilter } from "../../CustomHook"
import { LuTrash2 } from "react-icons/lu";
import CheckedBtn from "../Buttons/CheckedBtn";
import RenameBtn from "../Buttons/RenameBtn";
function Todos() {
  const { data, setData } = useFilter()
  return (
    <div className="w-[520px]">

      {data.map((el: DataType, i: number) => (
        <div
          style={{ borderTop: i != 0 ? `1px solid #6C63FF` : `none` }}
          key={i}
          className="w-full py-[17px] flex justify-between items-center">
          <div className="flex justify-evenly items-center gap-[17px]">
            <CheckedBtn />
            <p className="font-medium text-[20px] text-black"> {el.name} </p>
          </div>
          <div className="flex justify-evenly items-center gap-[10px]">
            <RenameBtn />

          </div>
         
        
        </div>
      ))}
    </div>
  )
}

export default Todos