import React, { useContext } from 'react'
import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import API_URL from './API';

const RetrieveContext = createContext()

export default RetrieveContext

export const RetrieveProvider = ({children}) => {

    // let API_URL = "https://web-production-0dc8.up.railway.app/"


    let [success, SetSuccess] = useState(null)
    let [error, setError] = useState(null)
    
    let [retrievedData, setRetrievedData] = useState(null)
    let [retrievedTrainerData, setRetrievedTrainerData] = useState(null)
    let [retrievedInternData, setRetrievedInternData] = useState(null)
    let [retrievedAlumniData, setRetrievedAlumniData] = useState(null)
    let [retrievedNYSCData, setRetrievedNYSCData] = useState(null)
    let [retrievedRolesData, setRetrievedRolesData] = useState(null)
    let navigate = useNavigate()

   

    async function retrievedTrainee(id){
        let response = await fetch(`${API_URL}trainees/get_trainee/${id}/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In") 
                setRetrievedData(data) 
                localStorage.removeItem("trainee")
                if (!localStorage.getItem("trainee")){
                    localStorage.setItem("trainee", JSON.stringify({}))
                }
                let trainee = JSON.parse(localStorage.getItem("trainee"))
                trainee = data
                localStorage.setItem("trainee", JSON.stringify(trainee))   
                navigate("/trainee")
            }

        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    async function retrievedEditTrainee(id){
        let response = await fetch(`${API_URL}trainees/get_trainee/${id}/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In") 
                setRetrievedData(data) 
                localStorage.removeItem("trainee")
                if (!localStorage.getItem("trainee")){
                    localStorage.setItem("trainee", JSON.stringify({}))
                }
                let trainee = JSON.parse(localStorage.getItem("trainee"))
                trainee = data
                localStorage.setItem("trainee", JSON.stringify(trainee))   
                navigate("/editTrainee")
            }

        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    async function retrievedTrainer(id){
        let response = await fetch(`${API_URL}trainers/get_trainer/${id}/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In") 
                setRetrievedTrainerData(data) 
                localStorage.removeItem("trainer")
                if (!localStorage.getItem("trainer")){
                    localStorage.setItem("trainer", JSON.stringify({}))
                }
                let trainee = JSON.parse(localStorage.getItem("trainer"))
                trainee = data
                localStorage.setItem("trainer", JSON.stringify(trainee))   
                navigate("/trainer")
            }

        }
        else{
            console.log("error")
    
        }
    }

    async function retrievedEditTrainer(id){
        let response = await fetch(`${API_URL}trainers/get_trainer/${id}/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In") 
                setRetrievedTrainerData(data) 
                localStorage.removeItem("trainer")
                if (!localStorage.getItem("trainer")){
                    localStorage.setItem("trainer", JSON.stringify({}))
                }
                let trainee = JSON.parse(localStorage.getItem("trainer"))
                trainee = data
                localStorage.setItem("trainer", JSON.stringify(trainee))   
                navigate("/editTrainer")

            }
        }
        else{
            console.log("error")
    
        }
    }

    async function retrievedIntern(id){
        let response = await fetch(`${API_URL}interns/get_intern/${id}/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In") 
                setRetrievedInternData(data) 
                localStorage.removeItem("intern")
                if (!localStorage.getItem("intern")){
                    localStorage.setItem("intern", JSON.stringify({}))
                }
                let trainee = JSON.parse(localStorage.getItem("intern"))
                trainee = data
                localStorage.setItem("intern", JSON.stringify(trainee))  
                navigate("/intern")
            }
            setRetrievedData(retrievedData)
        }
        else{
            console.log("error")
    
        }
    }

    async function retrievedEditIntern(id){
        let response = await fetch(`${API_URL}interns/get_intern/${id}/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In") 
                setRetrievedInternData(data) 
                localStorage.removeItem("intern")
                if (!localStorage.getItem("intern")){
                    localStorage.setItem("intern", JSON.stringify({}))
                }
                let trainee = JSON.parse(localStorage.getItem("intern"))
                trainee = data
                localStorage.setItem("intern", JSON.stringify(trainee))   
                navigate("/editIntern")
            }
            setRetrievedData(retrievedData)
        }
        else{
            console.log("error")
    
        }
    }

    async function retrievedAlumni(id){
        let response = await fetch(`${API_URL}alumni/get_alumni/${id}/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In") 
                setRetrievedAlumniData(data) 
                localStorage.removeItem("alumni")
                if (!localStorage.getItem("alumni")){
                    localStorage.setItem("alumni", JSON.stringify({}))
                }
                let trainee = JSON.parse(localStorage.getItem("alumni"))
                trainee = data
                localStorage.setItem("alumni", JSON.stringify(trainee))   
            }
            console.log(data)
            // setRetrievedData(retrievedData)
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    async function retrievedEditAlumni(id){
        let response = await fetch(`${API_URL}alumni/get_alumni/${id}/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In") 
                setRetrievedAlumniData(data) 
                localStorage.removeItem("alumni")
                if (!localStorage.getItem("alumni")){
                    localStorage.setItem("alumni", JSON.stringify({}))
                }
                let trainee = JSON.parse(localStorage.getItem("alumni"))
                trainee = data
                localStorage.setItem("alumni", JSON.stringify(trainee))   
                navigate("/editAlumni")
            }
            console.log(data)
            // setRetrievedData(retrievedData)
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    async function retrievedNYSC(id){
        let response = await fetch(`${API_URL}NYSC/get_NYSC/${id}/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In") 
                setRetrievedNYSCData(data) 
                localStorage.removeItem("NYSC")
                if (!localStorage.getItem("NYSC")){
                    localStorage.setItem("NYSC", JSON.stringify({}))
                }
                let trainee = JSON.parse(localStorage.getItem("NYSC"))
                trainee = data
                localStorage.setItem("NYSC", JSON.stringify(trainee))   
                navigate("/NYSC")
            }

        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    async function retrievedEditNYSC(id){
        let response = await fetch(`${API_URL}NYSC/get_NYSC/${id}/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In") 
                setRetrievedNYSCData(data) 
                localStorage.removeItem("NYSC")
                if (!localStorage.getItem("NYSC")){
                    localStorage.setItem("NYSC", JSON.stringify({}))
                }
                let trainee = JSON.parse(localStorage.getItem("NYSC"))
                trainee = data
                localStorage.setItem("NYSC", JSON.stringify(trainee))   
                navigate("/editingNYSC")
            }
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    async function retrievedRoles(id){
        let response = await fetch(`${API_URL}other_roles/get_other_roles/${id}/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In") 
                setRetrievedRolesData(data) 
                localStorage.removeItem("roles")
                if (!localStorage.getItem("roles")){
                    localStorage.setItem("roles", JSON.stringify({}))
                }
                let trainee = JSON.parse(localStorage.getItem("roles"))
                trainee = data
                localStorage.setItem("roles", JSON.stringify(trainee))   
            }
            console.log(data)
            // setRetrievedData(retrievedData)
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    async function retrievedEditRoles(id){
        let response = await fetch(`${API_URL}other_roles/get_other_roles/${id}/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In") 
                setRetrievedRolesData(data) 
                localStorage.removeItem("roles")
                if (!localStorage.getItem("roles")){
                    localStorage.setItem("roles", JSON.stringify({}))
                }
                let trainee = JSON.parse(localStorage.getItem("roles"))
                trainee = data
                localStorage.setItem("roles", JSON.stringify(trainee))   
            }
            console.log(data)
            // setRetrievedData(retrievedData)
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    let contextData = {
        retrievedData : retrievedData,
        retrievedTrainee : retrievedTrainee,
        retrievedTrainerData : retrievedTrainerData,
        retrievedTrainer : retrievedTrainer,
        retrievedInternData : retrievedInternData,
        retrievedIntern : retrievedIntern,
        retrievedAlumniData : retrievedAlumniData,
        retrievedAlumni : retrievedAlumni,
        retrievedNYSCData : retrievedNYSCData,
        retrievedNYSC : retrievedNYSC,
        retrievedRolesData : retrievedRolesData,
        retrievedRoles : retrievedRoles,
        retrievedEditTrainee : retrievedEditTrainee,
        retrievedEditAlumni : retrievedEditAlumni,
        retrievedEditIntern : retrievedEditIntern,
        retrievedEditRoles : retrievedEditRoles,
        retrievedEditTrainer : retrievedEditTrainer,
        retrievedEditNYSC : retrievedEditNYSC
    }

    return (
        <RetrieveContext.Provider value = {contextData}>
            {children}
        </RetrieveContext.Provider>
    )
}