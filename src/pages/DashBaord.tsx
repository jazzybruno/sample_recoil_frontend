import DashBoardComponent from "../components/DashBoardComponent";
import SideBar from "../components/SideBar";

const DashBoard = () => {
    return ( 
        <div className="bg-white flex flex-row h-[100%] w-[100%]">
            <div className="flex justify-center items-start w-[18%] bg-slate-100 h-[100vh] ">
                {/* Side Bar Links /\ */}
                <SideBar />
            </div>
            <div className="flex justify-center items-center w-[82%] ">
                {/* Content of the Dashboard / */}
                <DashBoardComponent />
            </div>
        </div>
     );
}
 
export default DashBoard;