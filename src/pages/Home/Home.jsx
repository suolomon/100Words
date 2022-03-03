import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import "./Home.css"

const Home = () => {
  return (
    <>
        <Header/>
    <div className="home">
      <Sidebar/>
    </div>
    </>
  )
}

export default Home