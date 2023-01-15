import React, { useContext } from 'react'
import { createContext, useState, useEffect } from "react";
import API_URL from './API';

const DataContext = createContext()

export default DataContext

export const TotalDataProvider = ({children}) => {

    // let API_URL = "https://web-production-0dc8.up.railway.app/"


    let [success, SetSuccess] = useState(null)
    let [error, setError] = useState(null)
    let [totalAlumni, setTotalAlumni] = useState(null)
    let [totalTrainee, setTotalTrainee] = useState(null)
    let [totalTrainer, setTotalTrainer] = useState(null)
    let [totalIntern, setTotalIntern] = useState(null)
    let [totalRoles, setTotalRoles] = useState(null)
    let [totalNYSC, setTotalNYSC] = useState(null)
    let [popularCourse, setPopularCourse] = useState({})


    async function getPopularCourses(user){

        let response = await fetch (`${API_URL}courses/popular_courses/`, {  
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': user})
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In")
                setPopularCourse(data)
                // console.log(totalTrainee)
                console.log(popularCourse)
                console.log(data)
            }
            // console.log(data)
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
       } 

   async function getTotalAlumni(user){

    let response = await fetch (`${API_URL}alumni/total_alumni_location/`, {  
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
            // console.log(totalTrainee)
            // console.log(data)
        }
        // console.log(data)
    }
    else{
        console.log("error")
        setError("Invalid Username or Password")

    }
   } 

   async function getTotalTrainee(user){

    let response = await fetch (`${API_URL}trainees/total_trainee_location/`, {  
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

    let response = await fetch (`${API_URL}trainers/total_trainer_location/`, {  
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

   async function getTotalInterns(user){

    let response = await fetch (`${API_URL}interns/total_intern_location/`, {  
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
            setTotalIntern(data)
        }
        // console.log(data)
    }
    else{
        console.log("error")
        setError("Invalid Username or Password")

    }
   }

   async function getTotalRoles(user){

    let response = await fetch (`${API_URL}other_roles/total_other_roles_location/`, {  
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
            setTotalRoles(data)
        }
        // console.log(data)
    }
    else{
        console.log("error")
        setError("Invalid Username or Password")

    }
   }

   async function getTotalNYSC(user){

    let response = await fetch (`${API_URL}NYSC/total_NYSC_location/`, {  
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
            setTotalNYSC(data)
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
    totalTrainer : totalTrainer,
    getTotalInterns : getTotalInterns,
    totalIntern : totalIntern,
    totalRoles: totalRoles,
    getTotalRoles : getTotalRoles,
    totalNYSC : totalNYSC,
    getTotalNYSC : getTotalNYSC,
    getPopularCourses: getPopularCourses,
    popularCourse : popularCourse,

   }
  
  return (
    <DataContext.Provider value={contextData} >
        {children}
    </DataContext.Provider>
  )
}

