import React from 'react'
import { useRef } from 'react/cjs/react.development'
import { useAuth } from './AuthProvider';

export function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { signUp } = useAuth();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            return alert("password dont match ")
        }
        signUp(emailRef.current.value,passwordRef.current.value);
    }

    return (
        <div className="signUp-Wrapper">
        <h2>Sing Up</h2>
        <form onSubmit={(e)=>{handleSubmit(e)}}> 

        <label htmlFor="email" >E-mail: </label>
        <input name="email" type="text" required ref={emailRef}/>

        <label htmlFor="password" >Password: </label>
        <input name="password" type="text" required ref={passwordRef}/>

        <label htmlFor="confirm-password" >Confirm Password: </label>
        <input name="confirmPassword" type="text" required ref={confirmPasswordRef}/>

        <button className="signBtn" type="submit"> Sign UP</button>

        </form>
            
        </div>
    )
}

export default SignUp
