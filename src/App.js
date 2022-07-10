import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css"
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/ProfilePage/Profile";

function App() {
  const user=useSelector((state)=>state.authReducer.authData)
  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right:'0'}}></div>
        <div className="blur" style={{top: '36%', left:'-8rem'}}></div>
        <Routes>
          <Route path='/' element={user? <Navigate to='home'/>: <Navigate to='auth'/>}/>
          <Route path='/home' element={user? <Home/>: <Navigate to='../auth'></Navigate>}/>
          <Route path='/auth' element={user? <Navigate to='/home'/>:<Auth/>}></Route>
          <Route path='/profile/:id' element={user? <Profile/>: <Navigate to='../auth'></Navigate>}></Route>
        </Routes>
    </div>
  );
}

export default App;
