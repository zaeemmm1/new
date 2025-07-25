import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/logo2.png";
import GenderCheckBox from './genderCheckBox.jsx';
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";



const SignUp = () => {
  const [inputs, setInput] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""

  })
  const handleCheckBoxChange = (gender) => {
    setInput({ ...inputs, gender })
  }

  const {loading, signup } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  }



  return (
    <div className="bg-[#fcf5eb] min-h-screen flex flex-col  ">


      <nav className="flex items-center justify-between px-6 py-4 sm:px-10">
        <img src={logo} alt="Logo" className="h-20 sm:h-28" />
        <Link to="/login" className="btn btn-outline text-sm sm:text-base">
          Sign In
        </Link>
      </nav>

      <div className="flex flex-grow justify-center items-center px-4 py-6 sm:py-12">
        <div className="bg-white w-full sm:w-4/6 lg:w-3/6 flex flex-col items-center border border-solid border-black rounded-3xl p-6 sm:p-10 shadow-lg">

          <div className="flex flex-col items-center text-center mb-6">
            <img src={logo2} className="h-16 sm:h-20 mb-2" alt="Secondary Logo" />
            <p className="text-gray-700 text-sm sm:text-base">Please enter your details to sign up.</p>
          </div>


          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">

            <label className="form-control w-full max-w-xs mb-4">
              <span className="label-text text-black font-medium mb-1">Full Name</span>
              <input
                type="text"
                placeholder="Enter your full name"
                className="bg-transparent border border-black rounded-md p-2 w-full text-black"
                required={true}
                value={inputs.fullName}
                onChange={(e) => { setInput({ ...inputs, fullName: e.target.value }) }}

              />
            </label>


            <label className="form-control w-full max-w-xs mb-4">
              <span className="label-text text-black font-medium mb-1">Username</span>
              <input
                type="text"
                placeholder="Enter your username"
                className="bg-transparent border border-black rounded-md p-2 w-full text-black"
                required={true}
                value={inputs.username}
                onChange={(e) => { setInput({ ...inputs, username: e.target.value }) }}
              />
            </label>


            <label className="form-control w-full max-w-xs mb-4">
              <span className="label-text text-black font-medium mb-1">Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-transparent border border-black rounded-md p-2 w-full text-black"
                required={true}
                value={inputs.password}
                onChange={(e) => { setInput({ ...inputs, password: e.target.value }) }}

              />
            </label>

            {/* Confirm Password Input */}
            <label className="form-control w-full max-w-xs mb-4">
              <span className="label-text text-black font-medium mb-1">Confirm Password</span>
              <input
                type="password"
                placeholder="Confirm your password"
                className="bg-transparent border border-black rounded-md p-2 w-full text-black"
                required={true}
                value={inputs.confirmPassword}
                onChange={(e) => { setInput({ ...inputs, confirmPassword: e.target.value }) }}
              />
            </label>

            <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} genderSelect={inputs.gender} />

            <button className="btn btn-sm w-full max-w-xs bg-black text-white mt-4 hover:bg-gray-800" disabled={loading}>
              { loading ? <span className="loading loading-spinner"></span>:"Sign Up" }
            </button>

            <span className="text-sm mt-4 text-center">
              Already have an account?{' '}
              <Link to="/login" className="text-black font-semibold underline">
                Sign In
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
