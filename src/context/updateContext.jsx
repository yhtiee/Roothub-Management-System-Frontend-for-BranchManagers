import React, { useContext } from 'react'
import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import API_URL from './API';


const UpdateContext = createContext()

export default UpdateContext

export const UpdateProvider = ({children}) => {

    // let API_URL = "https://web-production-0dc8.up.railway.app/"

    let navigate = useNavigate()
    let [success, SetSuccess] = useState(null)
    let [error, setError] = useState(null)

    async function updateTrainee(formData, userId){
        let response = await fetch(`${API_URL}trainees/update_trainee/${userId}/`, {
            method: "PUT",
            body: formData
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In")  
                navigate("/trainees")
            }
            console.log(data)
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    async function updateTrainer(formData, userId){
        let response = await fetch(`${API_URL}trainers/update_trainer/${userId}/`, {
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

    async function updateIntern(formData, userId){
        let response = await fetch(`${API_URL}interns/update_intern/${userId}/`, {
            method: "PUT",
            body: formData
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In")  
                navigate("/ListInterns")
            }
            console.log(data)
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    async function updateNYSC(formData, userId){
        let response = await fetch(`${API_URL}NYSC/update_NYSC/${userId}/`, {
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

    async function updateAlumni(formData, userId){
        let response = await fetch(`${API_URL}alumni/update_alumni/${userId}/`, {
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

    async function updateOtherRoles(formData, userId){
        let response = await fetch(`${API_URL}other_roles/update_other_roles/${userId}/`, {
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
        updateTrainee : updateTrainee,
        updateTrainer : updateTrainer,
        updateIntern : updateIntern,
        updateNYSC : updateNYSC,
        updateAlumni : updateAlumni,
        updateOtherRoles : updateOtherRoles
    }

    return (
        <UpdateContext.Provider value = {contextData}>
            {children}
        </UpdateContext.Provider>
    )
}