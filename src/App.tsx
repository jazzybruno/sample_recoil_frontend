/*eslint_disable*/
import UserLogin from "./pages/UserLogin";
import CreateUser from "./pages/CreateUser";
import { Route , Routes , BrowserRouter } from "react-router-dom";
import DashBoard from "./pages/DashBaord";
import Completed from "./pages/Completed";


export default function App() {
  return (
    <div className="bg-white flex justify-center items-center w-[100%]">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboard/completed" element={<Completed />} />
        
      </Routes>
   </BrowserRouter>
    </div>
  )
}