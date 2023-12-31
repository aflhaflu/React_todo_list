import { useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
function Inputs({ taskAdd }) {
  const [getTsk, setTsk] = useState("");

  const seTnewTask = (e) => {
    setTsk(e.target.value);
  };
  const addTsk = () => {
    if(getTsk.trim()==""){
      errorRef.current.classList.remove("hidden")
      setTimeout(()=>{
        errorRef.current.classList.add("hidden")
      },2000)
      return
    }
    taskAdd(getTsk);
    setTsk("");
  };
  const errorRef=useRef()
  return (
    <div className="w-[100%] h-24  flex md:flex-row items-center gap-x--1 justify-center pt-3 flex-wrap">
      <input
        type="text"
        name=""
        id=""
        className="py-2 px-4 rounded-sm text-sm w-[60%] shadow-[inset_-12px_-8px_40px_#46464620]"
        placeholder="Task"
        value={getTsk}
        onChange={seTnewTask}
      />
      <button
        className="mx-2 w-[13%] h-10 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-sm text-sm px-5  flex items-center justify-center "
        onClick={addTsk}
      >
        Add
      </button>
      <div className="w-[70%] ">
        <p className="hidden text-sm text-red-400" ref={errorRef}>Please Add Task!!!</p>
      </div>
    </div>
  );
}
export default Inputs;
