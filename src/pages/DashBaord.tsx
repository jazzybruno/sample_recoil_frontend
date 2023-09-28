import SideBar from "../components/SideBar";

const DashBoard = () => {
    return ( 
        <div className="bg-white grid h-[100%] w-[100%]">
            <div className="flex justify-center items-start w-[18%] bg-gray-100 h-[100vh] ">
                {/* Side Bar Links /\ */}
                <SideBar />
            </div>
            <div className="flex justify-center items-start w-[82%]">
                {/* Content of the Dashboard / */}
            </div>
        </div>
     );
}
 
export default DashBoard;