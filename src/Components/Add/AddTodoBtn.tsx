import { IoIosAdd } from "react-icons/io";
import { useFilter } from "../../CustomHook";
function AddTodoBtn() {
  const { activeModal, setActiveModal } = useFilter()
  function setActive():boolean | void {
    if (!activeModal) setActiveModal(true)
    else setActiveModal(false)
  
  }
  return (
    <button onClick={setActive} className="w-[50px] h-[50px] hover:w-[55px] hover:h-[55px] rounded-[50px] bg-purple text-[36px] hover:text-[41px] shadow-lg shadow-purple/40 duration-200 right-[8px] hover:right-[6px] bottom-[32px] hover:bottom-[30px] hover:cursor-pointer text-white absolute flex justify-evenly items-center ">
      <IoIosAdd />
    </button>
  )
}

export default AddTodoBtn