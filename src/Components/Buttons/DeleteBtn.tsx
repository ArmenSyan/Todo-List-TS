import { LuTrash2 } from "react-icons/lu"
import { useFilter } from "../../CustomHook"
import { DataType } from "../../Context"

function DeleteBtn({id} : {id : number}) {
  const {data, setData} = useFilter()

  function deleteNote(index : number){
    setData(data.filter((el: DataType) => {
     return  el.id != index 
    }))
    
  }
  return (
    <button 
    onClick={() => deleteNote(id)}
    className="text-gray-500 text-[18px] hover:cursor-pointer"
    ><LuTrash2 /> </button>
  )
}

export default DeleteBtn