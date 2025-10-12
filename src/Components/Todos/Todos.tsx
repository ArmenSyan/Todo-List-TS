import { DataType } from "../../Context"
import { useFilter } from "../../CustomHook"
import CheckedBtn from "../Buttons/CheckedBtn";
import DeleteBtn from "../Buttons/DeleteBtn";
import RenameBtn from "../Buttons/RenameBtn";
import Rename from "../Rename/Rename";
function Todos() {
  const { data, changeableNoteId, } = useFilter()
  return (
    <div className="w-[520px] text-black font-medium  ">

      {data.map((el: DataType, i: number) => (
        <div
          style={{ borderTop: i != 0 ? `1px solid #6C63FF` : `none` }}
          key={i}
          className="w-full py-[17px] flex justify-between items-center">
          <div className="flex justify-evenly items-center gap-[17px]  ">
            <CheckedBtn i={i} />
            {el.id != changeableNoteId || changeableNoteId == null ? (
              <p className="font-medium text-[20px] w-[420px] border-b-[2px] border-amber-50/0"> {el.name} </p>

            ) : (
              <Rename />
            )}
          </div>
          <div className="flex justify-evenly items-center gap-[10px]">
            <RenameBtn name={el.name} id={el.id}/>
            <DeleteBtn id={el.id} />
          </div>


        </div>
      ))}
    </div>
  )
}

export default Todos