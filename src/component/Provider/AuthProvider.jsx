import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import app from '../../../firebase.config';
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [photo,setPhoto]=useState('')
    const [loader,setLoader]=useState(true)
const auth=getAuth(app)

 const createUser=(email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }
 const loginUser=(email,password)=>{
     setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
 }
 const logoutUser=()=>{
    setLoader(true)
    return signOut(auth)
 }
 const loginWithGoogle=(provider)=>{
    return signInWithPopup(auth,provider)
 }
 const loginWithGithub=(provider)=>{
    return signInWithPopup(auth,provider)
 }
 useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser)
        setUser(currentUser)
        setLoader(false)
    })
    return ()=>{
        return unsubscribe()
    }
 },[])

    const authInfo={
        user,
        loader,
        createUser,
        loginUser,
        logoutUser,
        loginWithGoogle,
        photo,setPhoto

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;