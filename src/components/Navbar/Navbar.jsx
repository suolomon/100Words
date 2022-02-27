import "./Navbar.css"

const Navbar = () => {
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
                <li className="navListItem">HOME</li>
                <li className="navListItem">ABOUT</li>
                <li className="navListItem">CONTACT</li>
                <li className="navListItem">WRITE</li>
                <li className="navListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="navRight">
           <img className="navImg" src="https://images.pexels.com/photos/6930504/pexels-photo-6930504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile" />
            <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Navbar