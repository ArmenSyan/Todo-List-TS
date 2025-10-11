import AddTodoBtn from "./Components/Add/AddTodoBtn"
import Header from "./Components/Header/Header"

function App() {

  return (
    <div className="flex flex-col justify-start pt-[60px] items-center w-[750px] h-[100vh]  relative">
        <Header />

        <AddTodoBtn />
    </div>
  )
}

export default App
