   /*eslint_disable*/

import SideBar from "../components/SideBar";
import TodoList from "../components/TodoList";


const Pending = () => {
    return ( 
        <div className="bg-white flex flex-row h-[100%] w-[100%]">
            <div className="flex justify-center items-start w-[18%] bg-slate-100 h-[100vh] ">
                {/* Side Bar Links /\ */}
                <SideBar />
            </div>
            <div className="flex flex-col justify-center items-start mx-6 w-[82%] ">
                {/* Content of the Dashboard / */}
                {/* <DashBoardComponent /> */}
                <h1 className="text-2xl font-mooli font-bold text-slate-900">Pending Tasks</h1>
                <TodoList />
            </div>
        </div>
     );
}
 
export default Pending;