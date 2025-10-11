import AddTodoBtn from "./Components/Add/AddTodoBtn"
import Header from "./Components/Header/Header"
import NoteModal from "./Components/Modals/NoteModal"
import NotFound from "./Components/NotFound/NotFound"
import Todos from "./Components/Todos/Todos"
import { useFilter } from "./CustomHook"

function App() {
const {activeModal, data} = useFilter()
  return (
    <div className="flex flex-col justify-start  items-center w-[750px] h-[100vh]  relative ">
        <Header />
        <AddTodoBtn />
        {data.length > 0 ? <Todos /> : <NotFound /> }
      {activeModal && <NoteModal />}
    </div>
  )
}

export default App
