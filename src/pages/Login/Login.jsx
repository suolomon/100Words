import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label >Email</label>
            <input type="email" placeholder="Enter Email" className="loginInput" />
            <label >Password</label>
            <input type="password" placeholder="Enter Password" className="loginInput"/>
            <button className="loginButton"><Link to="/login" className="link">Login</Link></button>
            <button className="loginRegisterButton"><Link to="/register" className="link">Register</Link></button>
        </form>
    </div>
  )
}

export default Login