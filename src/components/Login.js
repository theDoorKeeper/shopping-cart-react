import React from 'react'
import { Link, useHistory, useRef, useState  } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setloading] = useState(false);
    const history = useHistory();

    const  handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            setError('')
            setloading(true);
             await login(emailRef.current.value,passwordRef.current.value);
             history.push("/shop")
             
        } catch(error){
            setError(error.message)
        }
        setloading(false)
    }
    
    return (
        
        <div className="signUp-Wrapper">
             {currentUser && history.push('./shop') }
        <h2>Log in</h2>
        {error && <h1 style={{color:"red"}}>{error}</h1> }
        <form onSubmit={(e)=>{handleSubmit(e)}}> 

        <label htmlFor="email" >E-mail: </label>
        <input name="email" type="text" required ref={emailRef}/>

        <label htmlFor="password" >Password: </label>
        <input name="password" type="text" required ref={passwordRef}/>

        <button className="signBtn" type="submit" disabled={loading}> Log in </button>

        </form>
            <h6>Need an account ? <Link to="/signUp">Sing Up</Link></h6>
        </div>
    )
}

export default Login
