import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { SiBloglovin } from "react-icons/si";
import './Header.css'

const Header = () => {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("username"); 
        localStorage.removeItem("loggedIn"); 
        navigate('/'); 
    };

    return (
        <div className='header'>
            <div className='logo'>
                <button onClick={() => navigate('/home')} className='logo-button'>
                    <SiBloglovin className='logo-icon' />
                </button>
            </div>
            <div className='user-menu'>
                <VscAccount className='user-icon' onClick={() => setDropdownOpen(!dropdownOpen)} />
                {dropdownOpen && (
                    <div className='dropdown-menu'>
                        <button className="dropdown-menu-button" onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
