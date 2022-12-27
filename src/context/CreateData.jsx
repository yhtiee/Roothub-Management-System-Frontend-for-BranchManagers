import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const CreateContext = createContext()

export default CreateContext

export const CreateProvider = ({children}) => {

    let [success, SetSuccess] = useState(null)
    let [error, setError] = useState(null)
    let navigate = useNavigate()


    async function createTrainee(formData){
        // console.log(formData)
        let response = await fetch("http://127.0.0.1:8000/trainees/create_trainee/", {
            method: "POST",
            body: formData
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In")  
                // navigate("/trainees")
            }
            console.log(data)
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    async function createTrainer(formData){
        // console.log(formData)
        let response = await fetch("http://127.0.0.1:8000/trainers/create_trainer/", {
            method: "POST",
            body: formData
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In")  
                // navigate("/trainees")
            }
            console.log(data)
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    async function deleteTrainee(id){      
        // console.log(id)
        let response = await fetch(`http://127.0.0.1:8000/trainees/delete_trainee/${id}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response)
        if (response.ok){
            if(response.status === 204){
                SetSuccess("Successfully Logged In")  
            }
            // console.log(data)
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }


    let contextData ={
        createTrainee : createTrainee,
        createTrainer : createTrainer,
        deleteTrainee : deleteTrainee,
        // createTraineepic: createTraineepic
       }


    return (
        <CreateContext.Provider value = {contextData}>
            {children}
        </CreateContext.Provider>
    )
}