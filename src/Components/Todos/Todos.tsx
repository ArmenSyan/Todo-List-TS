import { DataType } from "../../Context"
import { useFilter } from "../../CustomHook"
import CheckedBtn from "../Buttons/CheckedBtn";
import DeleteBtn from "../Buttons/DeleteBtn";
import RenameBtn from "../Buttons/RenameBtn";
function Todos() {
  const { data } = useFilter()
  return (
    <div className="w-[520px]">

      {data.map((el: DataType, i: number) => (
        <div
          style={{ borderTop: i != 0 ? `1px solid #6C63FF` : `none` }}
          key={i}
          className="w-full py-[17px] flex justify-between items-center">
          <div className="flex justify-evenly items-center gap-[17px]">
            <CheckedBtn i={i}/>
            <p className="font-medium text-[20px] text-black"> {el.name} </p>
          </div>
          <div className="flex justify-evenly items-center gap-[10px]">
            <RenameBtn />
            <DeleteBtn id={el.id}/>
          </div>
         
        
        </div>
      ))}
    </div>
  )
}

export default Todos