import { Link } from "react-router-dom";
import './Starter.css'

const Starter = () => {
    return(
        <>
            <div className="starter-wrapper">
                <Link to="/login"><button className="login-button">Login</button></Link>
            </div>
        </>
    )
}

export default Starter;
