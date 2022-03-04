import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Settings from "./pages/Settings/Settings"
import SinglePost from "./pages/SinglePostPage/SinglePostPage"
import Write from "./pages/Write/Write"
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'


function App() {
  const user = false;

  return (
    <Router>
     <Navbar />
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/post/:postId" element={user ? <Home/>: <SinglePost/>}/>
       <Route path="/write" element={user ? <Write/>:<Home/>}/>
       <Route path="/settings" element={user ? <Settings/>: <Register/>}/>
       <Route path="/login" element={user? <Home/> : <Login/>}/>
       <Route path="/register" element={user ? <Home/>: <Register/>}/>
     </Routes>
    </Router>
  )
}

export default App
