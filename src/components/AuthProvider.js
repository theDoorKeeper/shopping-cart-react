import React, { useEffect, useContext, useState } from 'react';
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

      const login = (email, password )=>{
        return   auth.signInWithEmailAndPassword(email, password)
      }

      const logout = ()=>{
          return auth.signOut();
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
        signUp,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


