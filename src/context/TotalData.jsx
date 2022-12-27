import React, { useContext } from 'react'
import { createContext, useState, useEffect } from "react";

const DataContext = createContext()

export default DataContext

export const TotalDataProvider = ({children}) => {

    let [success, SetSuccess] = useState(null)
    let [error, setError] = useState(null)
    let [totalAlumni, setTotalAlumni] = useState(null)
    let [totalTrainee, setTotalTrainee] = useState(null)
    let [totalTrainer, setTotalTrainer] = useState(null)


    

   async function getTotalAlumni(user){

    let response = await fetch ("http://127.0.0.1:8000/alumni/total_alumni_location/", {  
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'username': user})
    })
    // console.log(response)
    if (response.ok){
        let data = await response.json()
        if(response.status === 200){
            SetSuccess("Successfully Logged In")
            setTotalAlumni(data)
        }
        // console.log(data)
    }
    else{
        console.log("error")
        setError("Invalid Username or Password")

    }
   } 

   async function getTotalTrainee(user){

    let response = await fetch ("http://127.0.0.1:8000/trainees/total_trainee_location/", {  
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'username': user})
    })
    // console.log(response)
    if (response.ok){
        let data = await response.json()
        if(response.status === 200){
            SetSuccess("Successfully Logged In")
            setTotalTrainee(data)
        }
        // console.log(data)
    }
    else{
        console.log("error")
        setError("Invalid Username or Password")

    }
   } 

   async function getTotalTrainer(user){

    let response = await fetch ("http://127.0.0.1:8000/trainers/total_trainer_location/", {  
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'username': user})
    })
    // console.log(response)
    if (response.ok){
        let data = await response.json()
        if(response.status === 200){
            SetSuccess("Successfully Logged In")
            setTotalTrainer(data)
        }
        // console.log(data)
    }
    else{
        console.log("error")
        setError("Invalid Username or Password")

    }
   } 


   let contextData ={
    getTotalAlumni : getTotalAlumni,
    totalAlumni : totalAlumni,
    getTotalTrainee : getTotalTrainee,
    totalTrainee : totalTrainee,
    getTotalTrainer : getTotalTrainer,
    totalTrainer : totalTrainer
   }
  
  return (
    <DataContext.Provider value={contextData} >
        {children}
    </DataContext.Provider>
  )
}

