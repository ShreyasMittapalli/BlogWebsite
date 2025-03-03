import './Login.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [creds, setCreds] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("username");
        if (storedUser) {
            navigate('/home');
        }
    }, [navigate]);

    const checkcreds = () => {
        if (username === "shreyas" && password === "shreyas") {
            localStorage.setItem("username", username); 
            localStorage.setItem("loggedIn", true); 
            setCreds(true);
            navigate('/home');
        } else {
            setCreds(false);
        }
    };

    return (
        <div className='outer-container'>
            <div className='login-container'>
                <h1>Login</h1>
                <label>UserName: 
                    <input 
                        type="text" 
                        name="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </label>
                <label>Password: 
                    <input 
                        type="password" 
                        name='password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </label>
                <div className='container'>
                    <button className='login' onClick={checkcreds}>Login</button>
                </div>
                {creds === false && <p className='error-creds'>Invalid Credentials</p>}
            </div>
        </div>
    );
};

export default Login;
