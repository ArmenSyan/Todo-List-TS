import AddTodoBtn from "./Components/Add/AddTodoBtn"
import Header from "./Components/Header/Header"
import NoteModal from "./Components/Modals/NoteModal"

function App() {

  return (
    <div className="flex flex-col justify-start  items-center w-[750px] h-[100vh]  relative ">
        <Header />
        <AddTodoBtn />
        
        <NoteModal />
    </div>
  )
}

export default App
