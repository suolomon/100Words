import "./Header.css"

const Header = () => {
  return (
    <div className="header">
        <div className="header-title">
            <span className="header-sm">100 Words</span>
            <span className="header-lg">Blog</span>
        </div>
       <img src="https://images.pexels.com/photos/3184450/pexels-photo-3184450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="header-img" className="header-img" />
    </div>
  )
}

export default Header