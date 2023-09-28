import {BiSolidDashboard} from 'react-icons/bi'

const SideBar = () => {
    return ( 
     <div className="w-[100%] flex items-center flex-col">
         <h2 className="text-2xl h-[10%] text-[#1ec08a] font-poppins mt-3 text-center font-bold">Tasks Manager</h2>
         <div className="flex justify-center items-center flex-col w-[68%]">
            {/* All links to the pages of the app */}
            <div className="flex w-[100%] text-md flex-row justify-start items-center space-x-2 text-[1em] mt-10 text-black font-mooli">
                <p><BiSolidDashboard/></p> 
                <p className='text-black'>DashBoard</p>
                </div>

                <div className="flex w-[100%] text-md flex-col justify-start items-start mt-10 text-black font-mooli">
                All Tasks
                </div>

                <div className="flex w-[100%] text-md flex-col justify-start items-start mt-10 text-black font-mooli">
                Completed
                </div>

                <div className="flex w-[100%] text-md flex-col justify-start items-start mt-10 text-black font-mooli">
                Deleted
                </div>

                <div className="flex w-[100%] text-md flex-col justify-start items-start mt-10 text-black font-mooli">
                Profile
                </div>
         </div>
     </div> 
     );
}
 
export default SideBar;