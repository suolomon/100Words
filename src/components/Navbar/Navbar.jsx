import "./Navbar.css"
import {Link} from 'react-router-dom'

const Navbar = () => {
    const user = false;
  return (
    <div className="nav">
        <div className="navLeft">
            <i className="navIcon fa-brands fa-facebook-square"></i>
            <i className="navIcon fa-brands fa-twitter-square"></i>
            <i className="navIcon fa-brands fa-pinterest-square"></i>
            <i className="navIcon fa-brands fa-instagram-square"></i>
        </div>
        <div className="navCenter">
            <ul className="navList">
                <li className="navListItem"><Link className="link" to="/">HOME</Link></li>
                <li className="navListItem"><Link className="link" to="/">ABOUT</Link></li>
                <li className="navListItem"><Link to="/" className="link" >CONTACT</Link></li>
                <li className="navListItem"><Link className="link" to="/write">WRITE</Link></li>
                <li className="navListItem">{user && 'LOGOUT'}</li>
            </ul>
        </div>
        <div className="navRight">
            {user ? (

                <img className="navImg" src="https://images.pexels.com/photos/6930504/pexels-photo-6930504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile" />
            ): (
                 <ul className="navList">
                <li className="navListItem"><Link className="link" to="/login">LOGIN</Link></li>
                <li className="navListItem"><Link className="link" to="/register">REGISTER</Link></li>
            </ul>
            )
            
        }
            <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Navbar