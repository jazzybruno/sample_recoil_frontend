const CreateUserForm = () => {
    return (
      <div className="w-[100%] flex justify-center items-center flex-col">
        <div className="w-[80%]">
          {/* Title */}
  
          <form className="flex flex-col space-y-2">
            {/* Name Input */}
            <div className="flex flex-col w-[100%] space-y-2">
              <label htmlFor="Name" className="text-black text-lg font-mooli">Name</label>
              <input
                type="text"
                autoComplete="off"
                className="bg-white text-black border-[0.125em] rounded-md border-[#1ec08a] py-3 px-2 text-md w-[80%]"
                placeholder="Enter your name"
              /> 
            </div> 
  
            {/* Email Input */}
            <div className="flex flex-col w-[100%] space-y-2">
              <label htmlFor="Name" className="text-black text-lg font-mooli">Email</label>
              <input
                type="email"
                autoComplete="username"
                className="bg-white text-black border-[0.125em] rounded-md border-[#1ec08a] py-3 px-2 text-md w-[80%]"
                placeholder="Enter your email"
              />
            </div>
  
            {/* Phone Number Input */}
            <div className="flex flex-col w-[100%] space-y-2">
              <label htmlFor="Name" className="text-black text-lg font-mooli">Phonenumber</label>
              <input
                type="text"
                autoComplete="off"
                className="bg-white text-black border-[0.125em] rounded-md border-[#1ec08a] py-3 px-2 text-md w-[80%]"
                placeholder="Enter your phone number"
              />
            </div>
  
            {/* Gender Selection */}
            <div className="flex flex-col w-[100%] space-y-2">
              <label htmlFor="Name" className="text-black text-lg font-mooli">Gender</label>
              <select
                className="bg-white text-black border-[0.125em] rounded-md border-[#1ec08a] py-3 px-2 text-md w-[80%]"
              >
                <option className="text-gray-500" value="">Select your Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
  
            {/* Password Input */}
            <div className="flex flex-col w-[100%] space-y-2">
              <label htmlFor="Name" className="text-black text-lg font-mooli">Password</label>
              <input
                type="password"
                autoComplete="new-password"
                className="bg-white text-black border-[0.125em] rounded-md border-[#1ec08a] py-3 px-2 text-md w-[80%]"
                placeholder="Enter your password"
              />
            </div>
  
            {/* Register Button */}
            <button className="bg-[#1ec08a] w-[80%] py-3 mt-5">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default CreateUserForm;
  