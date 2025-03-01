import './Home.css'
import { VscAccount } from "react-icons/vsc";
import { SiBloglovin } from "react-icons/si";
import { IoMdAddCircleOutline } from "react-icons/io";

const Home = () => {
    return(
        <div className="home-container">
            <div className='header'>
                <div className='logo'>
                    <SiBloglovin className='logo-icon'/>
                </div>
                <div>
                    <VscAccount className='user-icon'/>
                </div>
            </div>
            <div className='content'>
                <div className='btn-div'><button className='create-new'><IoMdAddCircleOutline /></button></div>
                <div className='blog-cards'>

                </div>
            </div>
            <div className='footer'>
                <p>All rights reserved Copyright act @ 2055 </p>
            </div>
        </div>
    )
}

export default Home;