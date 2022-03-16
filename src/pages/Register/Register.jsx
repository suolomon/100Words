import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    setError(false)
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BLOG_URL}/auth/register`,
        {
          username,
          email,
          password,
        }
      );
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          className="registerInput"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          className="registerInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          className="registerInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton">
          <Link to="/register" className="link">
            Register
          </Link>
        </button>
        <button className="registerLoginButton" type="submit">
          <Link to="/login" className="link">
            Login
          </Link>
        </button>
      </form>
        {error && <span style={{color: 'red', marginTop:'10px'}}>Something went wrong</span>}
    </div>
  );
};

export default Register;
