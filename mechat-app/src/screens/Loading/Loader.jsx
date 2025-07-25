import { useEffect } from "react";
import { CiLock } from "react-icons/ci";
import { useGetConversations } from "../../hooks/useGetConversations.js";
import logo2 from "../../assets/images/logo2.png";


const Loader = () => {

  const { progress, setProgress } = useGetConversations();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100; 
        }
        return prev + 1; 
      });
    }, 100); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="h-[100svh] flex flex-col justify-center items-center bg-[#0a1014]">
      <img src={logo2} className="h-16 sm:h-20 mb-2" alt="Secondary Logo" />
      <div className="w-1/3 md:w-1/4 h-[4px] bg-gray-200 rounded-md relative overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-200 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-white mt-4 text-lg font-semibold">meChat</p>
      <div className="flex justify-center items-center">
        <CiLock className="mt-[18px] mr-1"/>
        <p className="text-white mt-4">end to end encrypted</p>
      </div>
    </div>
  );
};

export default Loader;
