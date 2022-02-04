import React, { createContext, useContext, useState, useEffect } from 'react';
import {auth} from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const AuthContext = createContext({
    currentUser: null,
    register: () => Promise,
    login: () => Promise,
    logout: () => Promise,
    signInWithGoogle: () => Promise,
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children}){
    const [curretnUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })
        return () =>{
            unsubscribe()
        }
    }, [])

    function register(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signInWithGoogle(){
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        return signOut(auth)
    }

    const value = {
        curretnUser,
        register,
        login,
        logout,
        signInWithGoogle
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}