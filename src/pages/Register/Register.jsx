import './register.css'

const register = () => {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label >Username</label>
            <input type="text" placeholder="Enter Username" className="registerInput" />
            <label >Email</label>
            <input type="email" placeholder="Enter Email" className="registerInput" />
            <label >Password</label>
            <input type="password" placeholder="Enter Password" className="registerInput"/>
            <button className="registerButton">Register</button>
            <button className="registerLoginButton">Login</button>
        </form>
    </div>
  )
}

export default register