import {FiEdit2} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'
import {AiOutlineCheck} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'

const Todo = () => {
    return ( 
        <div className=" flex w-[50%] flex-row border-[0.15em] rounded-lg border-slate-300  my-2 h-[9vh]" >
                        {/* the Status of the todo  */}
            <div className='flex justify-center items-center w-[10%]    '>
                {/* This is a round div to add the status of the todo  */}
                <div className='flex justify-center items-center border-[0.15em] h-[55%] w-[55%] p-1  border-slate-300 rounded-[50%]'>
                {/* <AiOutlineCheck className='text-green-400 text-xl cursor-pointer' /> */}
                {/* <AiOutlineDelete className='text-red-400 text-xl cursor-pointer' /> */}
                <BsThreeDots className='text-blue-400 text-xl cursor-pointer' />
                    {/* the status of the todo */}
                </div>
            </div>
            {/* Description of the Todo */}
            <div className="flex justify-center items-start flex-col w-[70%] py-2">
                {/* The title of the todo  */}
                <div>
                    Finish the Assignment
                </div>
            </div>
            {/* Actions on the Todo  */}
            <div className="flex justify-center items-center space-x-3 flex-row w-[20%]">
                {/* the complete action  */}
                <div> 
                   <AiOutlineCheck className='text-green-400 text-xl cursor-pointer' />
                </div>

                {/* the deleted action  */}
                <div>
                    <AiOutlineDelete className='text-red-400 text-xl cursor-pointer' />
                </div>

                {/* the edit action */}
                <div>
                    <FiEdit2 className='text-blue-400 text-xl cursor-pointer' />
                </div>
            </div>
        </div>
     );
}
 
export default Todo;