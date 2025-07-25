import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/logo2.png";
import { useLogin } from "../../hooks/useLogin";
import { useState } from "react";


const Login = () => {
  const { loading, login } = useLogin()
   const [user, setUser] = useState({
    username:"",
    password:""
   })


  const handleSubmit = async(e) =>{
    e.preventDefault();
    await login(user)
  }
  return (
    <div className="bg-[#fcf5eb] min-h-screen flex flex-col">

      <nav className="flex items-center justify-between px-6 py-4 sm:px-10">
        <img rel="preload" src={logo} alt="Logo" className="h-20 sm:h-28" />
        <Link to="/signUp" className="btn btn-outline text-sm sm:text-base">
          Sign Up
        </Link>
      </nav>

 
      <div className="flex flex-grow justify-center items-center px-4 py-6 sm:py-12">
        <div className="bg-white w-full sm:w-4/6 lg:w-3/6 flex flex-col items-center border border-solid border-black rounded-3xl p-6 sm:p-10 shadow-lg">


          <div className="flex flex-col items-center text-center mb-6">
            <img src={logo2} className="h-16 sm:h-20 mb-2" alt="Secondary Logo" />
            <p className="text-gray-700 text-sm sm:text-base">Please enter your details to sign in.</p>
          </div>


          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
            <label className="form-control w-full max-w-xs mb-4">
              <span className="label-text text-black font-medium mb-1">Username</span>
              <input
                type="username"
                placeholder="Type your username"
                className="bg-transparent border border-black rounded-md p-2 w-full text-black"
                value={user.username}
                onChange={(e) => { setUser({ ...user, username : e.target.value }) }}
              />
            </label>

            <label className="form-control w-full max-w-xs mb-4">
              <span className="label-text text-black font-medium mb-1">Password</span>
              <input
                type="password"
                placeholder="Type your password"
                className="bg-transparent border border-black rounded-md p-2 w-full text-black"
                value={user.password}
                onChange={(e) => { setUser({ ...user, password : e.target.value }) }}
              />
            </label>


            <div className="w-full max-w-xs text-right text-sm underline mb-4">
              <Link to="/login">Forgot Password?</Link>
            </div>


            <button className="btn btn-sm w-full max-w-xs bg-black text-white mt-2 hover:bg-gray-800">
            { loading ? <span className="loading loading-spinner"></span>:"Sign In" }
            </button>

            {/* Sign Up Link */}
            <span className="text-sm mt-4 text-center">
              {`Don't`} have an account yet?{' '}
              <Link to="/signUp" className="text-black font-semibold underline">
                Sign Up
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
