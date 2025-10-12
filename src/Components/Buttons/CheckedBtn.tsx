import { IoMdCheckmark } from "react-icons/io"
import { useFilter } from "../../CustomHook"

function CheckedBtn({ i }: { i: number }) {
    const { checkedNotes, setCheckedNotes } = useFilter()
    function setBtns(index: number) {
        if (!checkedNotes.includes(index)) setCheckedNotes([...checkedNotes, i])
        else setCheckedNotes(checkedNotes.filter((el: number) => el !== index))
        console.log('checked notes', checkedNotes);


    }
    return (
        <button
            onClick={() => setBtns(i)}
            className={`w-[26px] h-[26px] rounded-[2px] border-purple border-[1px] flex justify-evenly items-center text-[20px] text-white duration-200 ${checkedNotes.includes(i) ? 'bg-purple' : 'bg-white'}`}>
            <IoMdCheckmark />
        </button>
    )
}

export default CheckedBtn