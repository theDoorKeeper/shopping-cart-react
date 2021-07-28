import React from 'react';
import { useContext, useState } from 'react/cjs/react.development';
import { auth } from "../../firebase";
    const AuthContext = React.createContext();

    export const useAuth = ()=>{
        return useContext(AuthContext)
    }

function AuthProvider(children) {
    const [currentUser, setcurrentUser] = useState();

    const value = {
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
