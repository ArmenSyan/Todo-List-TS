import { DataType } from "../../Context"
import { useFilter } from "../../CustomHook"

function Todos() {
  const { data, setData } = useFilter()
  return (
    <div>
      {data.map((el: DataType, i: number) => (
          <div 
          style={{borderTop : i != 0 ? `1px solid #6C63FF` : `none`}} 
          key={i} 
          className="w-[520px] py-[17px] font-medium text-[20px]"> {el.name} </div>
        ))}
    </div>
  )
}

export default Todos