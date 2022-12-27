import React, { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";


const AuthContext = createContext()

export default AuthContext


export const AuthProvider = ({children}) => {

    let [authToken, setAuthToken] = useState(() => localStorage.getItem("authTokens")? JSON.parse(localStorage.getItem("authTokens")): null)
    let [user, setUser] = useState(() => localStorage.getItem("authTokens")? jwt_decode(localStorage.getItem("authTokens")): null)
    let [loading, setLoading] = useState(true)
    let [success, SetSuccess] = useState(null)
    let [error, setError] = useState(null)

    let navigate = useNavigate()

    
    async function loginUser(use, pass){
        console.log("form submitted")
        console.log(use,pass)
        let response = await fetch ("http://127.0.0.1:8000/auth/token/", {  
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': use, 'password': pass})
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                setAuthToken(data)
                console.log(data)
                setUser(jwt_decode(data.access))
                // console.log(user.username)
                console.log(jwt_decode(data.access))
                localStorage.setItem("authTokens", JSON.stringify(data))
                SetSuccess("Successfully Logged In")
                // localStorage.setItem("user", JSON.stringify(jwt_decode(data.access)))
                navigate("/")
                
            }
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")

        }
    }


    let logoutUser = () => {
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem("authTokens")

    }


    // uPdate the token every 5mins sending the refresh token to the backend
    let updateToken = async () =>{
        console.log("update called")
        let response = await fetch ("http://127.0.0.1:8000/auth/token/refresh/", {  
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"refresh":authToken.refresh})
        
        })
        if (response.ok){
            let data = await response.json()
            if (response.status === 200){
                setAuthToken(data)
                setUser(jwt_decode(data.access))
                localStorage.setItem("authTokens", JSON.stringify(data))
                

            }else{
                logoutUser()
            }

        }
    }

    //  used to call the update token every 2 seconds
    useEffect(() => {
        let fourMinutes = 1000 * 60 * 4
        let interval = setInterval(()=>{
            if(authToken){
                updateToken()
            }
        }, fourMinutes)
        return () => clearInterval(interval)
       
    }, [authToken, loading])
    
    let contextData = {
        user : user? user.username:" ",
        loginUser: loginUser,
        logoutUser : logoutUser,
        error : error  
      }

  return (

    <AuthContext.Provider value={contextData}>
        {children}
    </AuthContext.Provider>

  )

}

