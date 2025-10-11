
function NoteModal() {
    return (
        <div className="fixed w-[100vw] h-[100vh] pt-[124px] flex justify-evenly  bg-black/60">

            <div className=" w-[500px] h-[289px] bg-white rounded-[15px] flex flex-col justify-between items-center">
                <div className="flex flex-col justify-evenly items-center mt-[18px] gap-y-6">
                    <h1 className="text-[24px] font-medium">
                        NEW NOTE
                    </h1>
                    <input type="text" placeholder="Input your note..."  className="w-[440px] text-gray-500 h-[38px] border-[2px] px-[16px] rounded-[5px]  border-purple  py-[4px] text-[16px] focus:outline-0"/>
                </div>
                <div className="flex justify-between items-center w-full px-[30px] mb-[18px]">
                    <button className="w-[110px] h-[38px] border-[3px] border-purple rounded-[5px] text-purple font-medium text-[18px]">CANCEL</button>
                    <button className="w-[110px] h-[38px] border-[3px] border-purple rounded-[5px] text-white bg-purple font-medium text-[18px]">APPLY</button>
                </div>
            </div>

        </div>
    )
}

export default NoteModal