import { useEffect } from "react"
import AddTodoBtn from "./Components/Add/AddTodoBtn"
import Header from "./Components/Header/Header"
import NoteModal from "./Components/Modals/NoteModal"
import NotFound from "./Components/NotFound/NotFound"
import Todos from "./Components/Todos/Todos"
import { useFilter } from "./CustomHook"
import { DataType } from "./Context"

function App() {
  const { activeModal, data, searchInputValue, filteredData, setFilteredData } = useFilter()
  useEffect(() => {
    const filtered: DataType[] = data.filter((note: DataType) => {
      const text = note.name.toLowerCase()
      if (searchInputValue.length > 0 && !text.includes(searchInputValue)) return false

      return true
    })

    setFilteredData(filtered)
  }, [data, searchInputValue])

  return (
    <div className="flex flex-col justify-start  items-center w-[750px] h-[100vh]  relative text-black">
      <Header />
      <AddTodoBtn />
      {filteredData.length > 0 ? <Todos /> : <NotFound />}
      {activeModal && <NoteModal />}
    </div>
  )
}

export default App
