import CreateUserForm from "../components/CreateUserForm";
import LoginImage from "../images/login.png"

const CreateUser = () => {
    return (
      <div className="flex flex-col w-[100%] h-[100vh] ">
      <h2 className="text-2xl h-[10%] text-[#1ec08a] font-poppins mt-3 text-center font-bold">Tasks Manager</h2>
        <div className="flex w-[100%] h-[90%] justify-center items-center">
         <div className="flex w-[60%] justify-center items-center">
            <CreateUserForm />
         </div>
         <div className="flex flex-col w-[40%] justify-center items-center">
         <h2 className="text-2xl text-[#1ec08a] font-poppins text-center font-bold">Signup at Tasks Manager</h2>
          <img src={LoginImage} alt="Login" className="fill-current"/>
         </div>
        </div>
        </div>
      );   
}
 
export default CreateUser;