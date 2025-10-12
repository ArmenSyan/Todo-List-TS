import { useEffect } from "react"
import AddTodoBtn from "./Components/Add/AddTodoBtn"
import Header from "./Components/Header/Header"
import NoteModal from "./Components/Modals/NoteModal"
import NotFound from "./Components/NotFound/NotFound"
import Todos from "./Components/Todos/Todos"
import { useFilter } from "./CustomHook"
import { DataType } from "./Context"

function App() {
  const { activeModal, data, searchInputValue, filteredData, setFilteredData, darkMode } = useFilter()
  useEffect(() => {
    const filtered: DataType[] = data.filter((note: DataType) => {
      const text = note.name.toLowerCase()
      if (searchInputValue.length > 0 && !text.includes(searchInputValue)) return false

      return true
    })

    setFilteredData(filtered)
  }, [data, searchInputValue])

  return (
    <div className={`w-[100vw] h-[100vh] flex flex-col justify-start   items-center ${darkMode ? 'text-white bg-black' : 'text-black bg-white'} duration-300`}>

      <div className="flex flex-col justify-start   items-center w-[750px] h-[100vh]  relative  ">
        <Header />
        <AddTodoBtn />
        {filteredData.length > 0 ? <Todos /> : <NotFound />}
        {activeModal && <NoteModal />}
      </div>

    </div>
  )
}

export default App
