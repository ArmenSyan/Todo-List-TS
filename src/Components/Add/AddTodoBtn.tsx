import { IoIosAdd } from "react-icons/io";
import { useFilter } from "../../CustomHook";
function AddTodoBtn() {
  const { activeModal, setActiveModal } = useFilter()
  function setActive():boolean | void {
    if (!activeModal) setActiveModal(true)
    else setActiveModal(false)
  
  }
  return (
    <button onClick={setActive} className="w-[40px] h-[40px] rounded-[20px] md:w-[50px] md:h-[50px] md:rounded-[50px] bg-purple hover:bg-ph text-[35px] md:text-[48px] shadow-lg shadow-purple/40 duration-200 right-[10vw] bottom-[5vh] md:right-[8px] md:bottom-[32px] hover:cursor-pointer text-white absolute flex justify-evenly items-center ">
      <IoIosAdd />
    </button>
  )
}

export default AddTodoBtn