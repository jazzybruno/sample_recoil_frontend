import {BiSolidDashboard} from 'react-icons/bi'
import {IoMdDoneAll} from 'react-icons/io'
import {FaTasks} from 'react-icons/fa'
import {AiOutlineDelete} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {IoLogOutOutline} from 'react-icons/io5'
import {BsThreeDots} from 'react-icons/bs'
import { useNavigate } from 'react-router'

const SideBar = () => {

    const navigate = useNavigate();
     const navigation= (num : number) : void =>{
        switch(num){
            case 1:
                navigate('/dashboard');
                break;
            case 2:
                navigate('/dashboard/tasks/completed');
                break;
            case 3:
                navigate('/dashboard/tasks/pending');
                break;
            case 4:
                navigate('/dashboard/tasks/deleted');
                break;
            case 5:
                navigate('/dashboard/profile');
                break;
            case 6:
                navigate('/dashboard/tasks/all');
                break;
            case 7:
                navigate('/');
                break;
        }
     }

    return ( 
     <div className="w-[100%] flex items-center flex-col mt-2 ">
         <h2 className="text-2xl h-[10%] text-[#1ec08a] font-poppins mt-3 text-center font-bold">Tasks Manager</h2>
         <div className="flex justify-center items-center flex-col w-[68%]">
            {/* All links to the pages of the app */}
            <div onClick={()=>{
                navigation(1)
            }}  className="flex w-[100%] text-md flex-row cursor-pointer justify-start items-center space-x-2 text-[1em] py-4 px-2 mt-5 text-black font-mooli hover:bg-green-300 hover:rounded-lg ">
                <p className='text-md'><BiSolidDashboard/></p> 
                <p className='text-black'>DashBoard</p>
                </div>

                <div onClick={()=>{
                navigation(2)
            }} className="flex w-[100%] text-md flex-row cursor-pointer justify-start items-center space-x-2 text-[1em] py-4 px-2 mt-5 text-black font-mooli hover:bg-green-300 hover:rounded-lg">
                <p className='text-md'><IoMdDoneAll /></p>
                <p className='text-black'>Completed</p>
                </div>

                <div onClick={()=>{
                navigation(3)
            }} className="flex w-[100%] text-md flex-row cursor-pointer justify-start items-center space-x-2 text-[1em] py-4 px-2 mt-5 text-black font-mooli hover:bg-green-300 hover:rounded-lg">
                <p className='text-md'><BsThreeDots /></p>
                <p className='text-black'>Pending</p>
                </div>

                <div onClick={()=>{
                navigation(4)
            }}  className="flex w-[100%] text-md flex-row cursor-pointer justify-start items-center space-x-2 text-[1em] py-4 px-2 mt-5 text-black font-mooli hover:bg-green-300 hover:rounded-lg">
                <p className='text-md'><AiOutlineDelete /></p>
                <p className='text-black'>Deleted</p>
                </div>

                <div onClick={()=>{
                navigation(5)
            }} className="flex w-[100%] text-md flex-row cursor-pointer justify-start items-center space-x-2 text-[1em] py-4 px-2 mt-5 text-black font-mooli hover:bg-green-300 hover:rounded-lg">
               <p className='text-md'><CgProfile /></p>
               <p className='text-black'>Profile</p>
                </div>

                 <div onClick={()=>{
                navigation(6)
            }} className="flex w-[100%] text-md flex-row cursor-pointer justify-start items-center space-x-2 text-[1em] py-4 px-2 mt-5 text-black font-mooli hover:bg-green-300 hover:rounded-lg">
                <p className='text-md'><FaTasks /></p>
                <p className='text-black'>Tasks</p>
                </div>


                <div className="flex w-[100%] text-md flex-row cursor-pointer justify-start items-center space-x-2 text-[1em] py-4 px-2 mt-5 text-black font-mooli hover:bg-green-300 hover:rounded-lg">
                <p className='text-md'><IoLogOutOutline /></p>
                <p className='text-black'>Logout</p>
                </div>
         </div>
     </div> 
     );
}
 
export default SideBar;