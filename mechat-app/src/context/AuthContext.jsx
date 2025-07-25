// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-refresh/only-export-components */
// import { createContext, useState, useEffect, useContext } from "react";
// import toast from "react-hot-toast";

// export const AuthContext = createContext();

// export const useAuthContext = () => {
//   return useContext(AuthContext);
// };

// export const AuthContextProvider = ({ children }) => {
//   const [Loading, setLoading] = useState(false)
//   const [authUser, setAuthUser] = useState(null);
  
//   useEffect(() => {
//     const checkUserSession = async () => {
//       try {
//         setLoading(true)
//         const res = await fetch("https://a1d328b2-25e3-4ac3-bb52-fbd8bc1bd0d6-00-2xxsyfgxc6ftk.sisko.replit.devapi/auth/checkUser", { credentials: 'include' }); 
//         const data = await res.json();

//         if (res.ok) {
//           setAuthUser(data);
//         } else {
//           setAuthUser(null);
//         }
//       } catch (error) {
//         toast.error("Failed to authenticate");
//         console.error(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkUserSession();
//   }, []);


//   return (
//     <AuthContext.Provider value={{ authUser, setAuthUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };




/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [Loading, setLoading] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://a1d328b2-25e3-4ac3-bb52-fbd8bc1bd0d6-00-2xxsyfgxc6ftk.sisko.replit.dev/api/auth/checkUser", { credentials: 'include' });
        
        if (res.ok) {
          const data = await res.json();
          setAuthUser(data);  // Successfully authenticated user
        } else {
          setAuthUser(null);  // Authentication failed
          toast.error("Authentication failed. Please login again.");
        }
      } catch (error) {
        toast.error("Failed to authenticate");
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    checkUserSession();
  }, []);  

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
