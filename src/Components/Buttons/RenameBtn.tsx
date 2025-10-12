import { PiPencilSimple } from "react-icons/pi";
import { useFilter } from "../../CustomHook";
import { FiCheck } from "react-icons/fi";
import { DataType } from "../../Context";

function RenameBtn({ id, name }: { id: number | null, name: string }) {
  const {
    data,
    setData,
    setChangeableNoteId,
    changeableNoteId,
    setNewNotesInputValue,
    newNotesInputValue } = useFilter()


  function setRename() {
    if (id != changeableNoteId) {
      setChangeableNoteId(id)
      setNewNotesInputValue(name)
      console.log(id, changeableNoteId);
    } else {
      setChangeableNoteId(null)
      setData(
        data.map((note: DataType) =>
          note.id === id ? { ...note, name: newNotesInputValue } : note
        )
      ); setNewNotesInputValue('')
    }

  }
  return (
    <button
      onClick={() => setRename()}

      className="hover:text-gray-600 duration-200 text-[20px] hover:cursor-pointer">{id == changeableNoteId
        ? (<FiCheck />)
        : (<PiPencilSimple />)
      }
    </button>
  )
}

export default RenameBtn