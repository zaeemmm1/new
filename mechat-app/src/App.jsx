import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from 'react-hot-toast';
import Home from "./screens/home/home"
import SignUp from "./screens/signUp/signUp"
import LogIn from "./screens/logIn/logIn.jsx"
import LoginPage from "./screens/logIn/LoginPage.jsx"
import Profile from "./screens/profile/ProfilePage"


const App = () => {
  const { authUser } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={authUser ? <Home /> : <Navigate to="/login" />} />
          <Route path='/signUp' element={authUser ? <Navigate to="/login" /> : <SignUp />} />
          <Route path='/login' element={authUser ? <Navigate to="/home" /> : <LogIn />} />
          <Route path='/loginPage' element={<LoginPage />} />
          <Route path='/profile' element={authUser ? <Profile /> : <Navigate to="/login" />} />
          <Route path='*' element={authUser ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        </Routes>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </BrowserRouter>
    </>
  )
}

export default App