import Chart from "./Chart";
import StatsComponent from "./StatsComponent";

type dataType = {
    title : string,
    value : number,
    percentage : string,
    icon : string,
    color : string
    
}
const DashBoardComponent = () => {
    
    const dataComp : dataType[] = [
        { "title" : "All Tasks" , "value" : 12 , "percentage" : "+12.5%" , "icon" : "AiOutlineArrowUp" , "color" : "#009289" },
        { "title" : "Deleted Tasks" , "value" : 20 , "percentage" : "+12.5%" , "icon" : "AiOutlineArrowDown" , "color" : "#E29578" },
        { "title" : "Finished Tasks" , "value" : 1 , "percentage" : "+12.5%" , "icon" : "AiOutlineArrowDown" , "color" : "#E29578" },
        { "title" : "Pending Tasks" , "value" : 20 , "percentage" : "+12.5%" , "icon" : "AiOutlineArrowUp" , "color" : "#009289" },
      ]

    return ( 
        <div className="flex  w-[100%] h-[100%] justify-center items-center flex-col ">
            {/* statistics in divs  */}
            <h2 className="text-left w-[92%] text-xl font-quicksand font-bold my-2">Statistics</h2>
            <div className="w-[100%] space-x-5 flex  justify-center items-center">
               {
                dataComp.map((data , index) => {
                    return <StatsComponent key={index} title={data.title} value={data.value} percentage={data.percentage} icon={data.icon} color={data.color} />
                })
               }
               </div>

               <h2 className="text-left w-[92%] text-xl font-quicksand font-bold mt-5">Tasks Implementations</h2>
       {/* Graph to show them in a graph  */}
            <div className="flex w-[92%] flex-row">
            <div className="w-[50%] mt-2 bg-slate-100  flex justify-center items-center">
                 <Chart />
            </div>

            <div className="text-xl text-black">
                <h2>Tasks Notificatoins and Updates</h2>
            </div>
            </div>
        </div> 
     );
}
 
export default DashBoardComponent;