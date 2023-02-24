import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";

export const AuthContext=createContext();

export default function AuthContextProvider({children}){
    const [isAuth,setisAuth]=useState(false)
    const [token, settoken]=useState('')

    const login=(value)=>{
        setisAuth(true)
        settoken(value)
        
    }
    const logout=()=>{
        setisAuth(false)
        settoken('')
    }
    return(
        <AuthContext.Provider value={{isAuth,settoken,login,logout}}>{children}</AuthContext.Provider>
    )
}