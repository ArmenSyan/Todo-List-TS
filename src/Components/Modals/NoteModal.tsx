import { useFilter } from "../../CustomHook"

function NoteModal() {
    const { data, setData, addInputValue, setActiveModal, setAddInputValue } = useFilter()

    function setActive(): void { setActiveModal(false) }
    
    function inputValue(e: React.ChangeEvent<HTMLInputElement>) { setAddInputValue(e.target.value) }

    function addNote() {
        setActiveModal(false)
        
        setData([...data,
            {
                id : Date.now(),
                name: addInputValue,
                checked: false
            }
        ])
        console.log(data);
    }
    return (
        <div className="fixed w-[100vw] h-[100vh] pt-[124px] flex justify-evenly  bg-black/60 -z-50-">
            <div className=" w-[500px] h-[289px] bg-white rounded-[15px] flex flex-col justify-between items-center z-50">
                <div className="flex flex-col justify-evenly items-center mt-[18px] gap-y-6">
                    <h1 className="text-[24px] font-medium">
                        NEW NOTE
                    </h1>
                    <input 
                    type="text" 
                    onChange={(e) => inputValue(e)} 
                    placeholder="Input your note..." 
                    className="w-[440px] h-[38px] border-[2px] px-[16px] rounded-[5px]  border-purple  py-[4px] text-[16px]  font-medium focus:outline-0" />
                </div>
                <div className="flex justify-between items-center w-full px-[30px] mb-[18px]">
                    <button onClick={setActive} className="w-[110px] h-[38px] border-[3px] border-purple rounded-[5px] text-purple font-medium text-[18px] hover:cursor-pointer hover:shadow-lg hover:shadow-purple/40 duration-200">CANCEL</button>
                    <button onClick={addNote} className="w-[110px] h-[38px] border-[3px] border-purple rounded-[5px] text-white bg-purple font-medium text-[18px]">APPLY</button>
                </div>
            </div>

        </div>
    )
}

export default NoteModal