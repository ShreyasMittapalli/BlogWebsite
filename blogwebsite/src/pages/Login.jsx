import './Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [creds,setCreds] = useState(null);
    const navigate = useNavigate();

    const checkcreds = () => {
        if(username === "shreyas" && password === "shreyas"){
            return setCreds(true);
        }
        else{
            return setCreds(false);
        }
    }

    return(
        <>
            <div className='outer-container'>
                <div className='login-container'>
                    <h1>Login</h1>
                    <label>UserName : <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}/></label>
                    <label>Password : <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} /></label>
                    <div className='container'><button className='login' onClick={checkcreds}>Login</button></div>
                    {
                        creds === false && <p className='error-creds'>Invalid Credentials</p> 
                    }
                    {
                        creds === true && navigate('/home')
                    }
                </div>
            </div>
        </>
    )
}

export default Login;