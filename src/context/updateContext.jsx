import React, { useContext } from 'react'
import { createContext, useState, useEffect } from "react";

const UpdateContext = createContext()

export default UpdateContext

export const UpdateProvider = ({children}) => {

    let [success, SetSuccess] = useState(null)
    let [error, setError] = useState(null)

    async function updateTrainee(formData, userId){
        // console.log(firstName, lastName, otherName, Email, phoneNumber, amountPaid, Balance, Duration, Location, Course)
        let response = await fetch(`http://127.0.0.1:8000/trainees/update_trainee/${userId}/`, {
            method: "PUT",
            body: formData
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In")  
            }
            console.log(data)
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    let contextData = {
        updateTrainee : updateTrainee
    }

    return (
        <UpdateContext.Provider value = {contextData}>
            {children}
        </UpdateContext.Provider>
    )
}