import React, { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { useRef } from "react";
import API_URL from "./API";


const ListContext = createContext()

export default ListContext

export const ListProvider = ({children}) => {

    // let API_URL = "https://web-production-0dc8.up.railway.app/"

    const [dataFetched, setDataFetched] = useState(false)
    let [traineesList, setTraineesList] = useState([])
    let [trainersList, setTrainersList] = useState([])
    let [internsList, setInternsList] = useState([])
    let [alumniList, setAlumniList] = useState([])
    let [NYSCList, setNYSCList] = useState([])
    let [rolesList, setRolesList] = useState([])

    let [success, SetSuccess] = useState(null)
    let [error, setError] = useState(null)
    let authToken = JSON.parse(localStorage.getItem("authTokens"))
    let token = authToken? authToken.access: " "
    // console.log(token)

    async function getTraineesList(user){
        let response = await fetch(`${API_URL}trainees/all_trainee_location/`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({'username': user})
        })
        // console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In")
                setTraineesList(data)   
                setDataFetched(true)
                // console.log(dataFetched)
            }
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }
    
    async function getTrainersList(user){
        let response = await fetch(`${API_URL}trainers/all_trainer_location/`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({'username': user})
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In")
                setTrainersList(data)   
                setDataFetched(true)
            }
 
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    async function getInternsList(user){
        let response = await fetch(`${API_URL}interns/all_intern_location/`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({'username': user})
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In")
                setInternsList(data)   
                setDataFetched(true)
            }
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    async function getAlumniList(user){
        let response = await fetch(`${API_URL}alumni/all_alumni_location/`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({'username': user})
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In")
                setAlumniList(data)  
                setDataFetched(true) 
            }
       
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    async function getNYSCList(user){
        let response = await fetch(`${API_URL}NYSC/all_NYSC_location/`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({'username': user})
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In")
                setNYSCList(data)   
                setDataFetched(true)
            }
           
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    async function getRolesList(user){
        let response = await fetch(`${API_URL}other_roles/all_other_roles_location/`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({'username': user})
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In")
                setRolesList(data)  
                setDataFetched(true) 
            }
         
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }


    let contextData ={
        getTraineesList : getTraineesList,
        getTrainersList : getTrainersList,
        getAlumniList : getAlumniList,
        getInternsList : getInternsList,
        getNYSCList : getNYSCList,
        getRolesList : getRolesList,
        internsList : internsList,
        alumniList : alumniList,
        NYSCList : NYSCList,
        rolesList : rolesList,
        traineesList: traineesList,
        trainersList: trainersList,
        dataFetched : dataFetched
       }


    return (
        <ListContext.Provider value = {contextData}>
            {children}
        </ListContext.Provider>
    )
}