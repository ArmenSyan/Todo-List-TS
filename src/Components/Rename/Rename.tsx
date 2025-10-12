import { useFilter } from "../../CustomHook"

function Rename() {
    const {newNotesInputValue, setNewNotesInputValue} = useFilter()
    function setVal(e: React.ChangeEvent<HTMLInputElement>){
        setNewNotesInputValue(e.target.value)
        console.log(newNotesInputValue);
        
    }
  return (
    <>
        <input  
        type="text" 
        onChange={(e) => setVal(e)} 
        value={newNotesInputValue} 
        placeholder="Enter new name...." 
        className="w-[420px] text-[20px] focus:outline-0  border-purple"/> 
    </>
  )
}

export default Rename