import React, { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { useRef } from "react";


const ListContext = createContext()

export default ListContext

export const ListProvider = ({children}) => {

    let [traineesList, setTraineesList] = useState([])
    let [trainersList, setTrainersList] = useState([])
    let [success, SetSuccess] = useState(null)
    let [error, setError] = useState(null)
    let authToken = JSON.parse(localStorage.getItem("authTokens"))
    let token = authToken? authToken.access: " "
    console.log(token)

    async function getTraineesList(user){
        let response = await fetch("http://127.0.0.1:8000/trainees/all_trainee_location/", {
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
                setTraineesList(data)   
            }
            console.log(data)
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }
    
    async function getTrainersList(user){
        let response = await fetch("http://127.0.0.1:8000/trainers/all_trainer_location/", {
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
            }
            console.log(data)
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    let contextData ={
        getTraineesList : getTraineesList,
        getTrainersList : getTrainersList,
        traineesList: traineesList,
        trainersList: trainersList
       }


    return (
        <ListContext.Provider value = {contextData}>
            {children}
        </ListContext.Provider>
    )
}