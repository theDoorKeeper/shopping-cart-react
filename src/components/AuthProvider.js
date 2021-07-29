import React, { useEffect } from 'react';
import { useContext, useState } from 'react/cjs/react.development';
import { auth } from "../firebase";
    const AuthContext = React.createContext();

    export const useAuth = ()=>{
        return useContext(AuthContext)
    }

export function AuthProvider({children}) {
    const [currentUser, setcurrentUser] = useState();
    const [loading, setloading] = useState(true);

    const signUp = (email, password )=>{
        return   auth.createUserWithEmailAndPassword(email, password)
      }


      
      useEffect(() => {
          
      const unsubScribe =  auth.onAuthStateChanged(user=>{
          setcurrentUser(user)
      });

      setloading(false);
          return () => unsubScribe
      }, [])
     
    const value = {
        currentUser,
        signUp
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


