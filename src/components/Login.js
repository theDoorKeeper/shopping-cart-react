import React from 'react'
import { useRef, useState } from 'react/cjs/react.development'
import { useAuth } from './AuthProvider';

export function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setloading] = useState(false);

    const  handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            setError('')
            setloading(true);
             await login(emailRef.current.value,passwordRef.current.value);
        } catch(error){
            setError(error.message)
        }
        setloading(false)
    }

    return (
        <div className="signUp-Wrapper">
        <h2>Log in</h2>
        {error && <h1 style={{color:"red"}}>{error}</h1> }
        <form onSubmit={(e)=>{handleSubmit(e)}}> 

        <label htmlFor="email" >E-mail: </label>
        <input name="email" type="text" required ref={emailRef}/>

        <label htmlFor="password" >Password: </label>
        <input name="password" type="text" required ref={passwordRef}/>

        <button className="signBtn" type="submit" disabled={loading}> Log in </button>

        </form>
            
        </div>
    )
}

export default SignUp
