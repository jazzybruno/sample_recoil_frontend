/*eslint_disable*/
import UserLogin from "./pages/UserLogin";
import CreateUser from "./pages/CreateUser";
import { Route , Routes , BrowserRouter } from "react-router-dom";
import DashBoard from "./pages/DashBaord";
import Completed from "./pages/Completed";
import Deleted from "./pages/Deleted";
import AllTasks from "./pages/AllTasks";
import Pending from "./components/Pending";
import Profile from "./pages/Profile";


export default function App() {
  return (
    <div className="bg-white flex justify-center items-center w-[100%]">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboard/tasks/completed" element={<Completed />} />
        <Route path="/dashboard/tasks/deleted" element={<Deleted />} />
        <Route path="/dashboard/tasks/all" element={<AllTasks />} />
        <Route path="/dashboard/tasks/pending" element={<Pending />} />
        <Route path="/dashboard/profile" element={<Profile />} />
      </Routes>
   </BrowserRouter>
    </div>
  )
}