import './Settings.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const Settings = () => {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">
                    Update Account
                </span>
                <span className="settingsDeleteTitle">
                    Delete Account
                </span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://images.pexels.com/photos/6930504/pexels-photo-6930504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-picture" />
                    <label htmlFor="fileInput">
                        <i class=" settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:'none'}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Solomon" />
                <label>Email</label>
                <input type="email" placeholder="solomon@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings