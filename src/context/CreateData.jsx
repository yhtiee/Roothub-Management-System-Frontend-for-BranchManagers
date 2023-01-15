import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import {useToast} from "@chakra-ui/toast"
import API_URL from "./API";


const CreateContext = createContext()

export default CreateContext

export const CreateProvider = ({children}) => {

    // let API_URL = "https://web-production-0dc8.up.railway.app/"

    // const toast = useToast()
    let [msg, SetMsg] = useState(null)
    let navigate = useNavigate()


    async function createTrainee(formData){
        // console.log(formData)
        let response = await fetch(`${API_URL}trainees/create_trainee/`, {
            method: "POST",
            body: formData
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 201){
                SetMsg(true)  
                // toast({
                //     title: "Trainee Sucessfully created.",
                //     status: "success",
                //     duration: 9000,
                //     isClosable: true,
                //     colorScheme: "green"
                // })
                navigate("/trainees")
                console.log(data)
            }
        }
        else{
            console.log("error")
            SetMsg(false)
    
        }
    }

    async function createTrainer(formData){
        let response = await fetch(`${API_URL}trainers/create_trainer/`, {
            method: "POST",
            body: formData
        })
        if (response.ok){
            let data = await response.json()
            if(response.status === 201){
                navigate("/trainers")

            }
            console.log(data)
        }
        else{
            console.log("error")
    
        }
    }

    async function createIntern(formData){
        // console.log(formData)
        let response = await fetch(`${API_URL}interns/create_intern/`, {
            method: "POST",
            body: formData
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 201){
                // navigate("/trainees")
                navigate("/listInterns")

            }
            console.log(data)
        }
        else{
            console.log("error")
            // setError("Error Occured")
    
        }
    }

    async function createNYSC(formData){
        // console.log(formData)
        let response = await fetch(`${API_URL}NYSC/create_NYSC/`, {
            method: "POST",
            body: formData
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 201){
                // navigate("/trainees")
                navigate("/listNYSC")
            }
            console.log(data)
        }
        else{
            console.log("error")
            // setError("Error Occured")
    
        }
    }

    async function createAlumni(formData){
        // console.log(formData)
        let response = await fetch(`${API_URL}alumni/create_alumni/`, {
            method: "POST",
            body: formData
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                // navigate("/trainees")
            }
            console.log(data)
        }
        else{
            console.log("error")
            
    
        }
    }

    async function createRoles(formData){
        // console.log(formData)
        let response = await fetch(`${API_URL}other_roles/create_other_roles/`, {
            method: "POST",
            body: formData
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Created")   
                // navigate("/trainees")
            }
            console.log(data)
        }
        else{
            console.log("error")
            setError("Error Occured")
    
        }
    }



//  DELETE FUNCTIONS 

    async function deleteTrainee(id){      
        // console.log(id)
        let response = await fetch(`${API_URL}trainees/delete_trainee/${id}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response)
        if (response.ok){
            if(response.status === 204){
                SetSuccess("Successfully Logged In")  
                // navigate("/trainees")

            }
            // console.log(data)
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    async function deleteTrainer(id){      
        // console.log(id)
        let response = await fetch(`${API_URL}trainers/delete_trainer/${id}/`, {
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

    async function deleteIntern(id){      
        // console.log(id)
        let response = await fetch(`${API_URL}interns/delete_intern/${id}/`, {
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

    async function deleteRoles(id){      
        // console.log(id)
        let response = await fetch(`${API_URL}other_roles/delete_other_roles/${id}/`, {
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

    async function deleteNYSC(id){      
        // console.log(id)
        let response = await fetch(`${API_URL}NYSC/delete_NYSC/${id}/`, {
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

    async function deleteAlumni(id){      
        // console.log(id)
        let response = await fetch(`${API_URL}alumni/delete_alumni/${id}/`, {
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
        createAlumni : createAlumni,
        createIntern : createIntern,
        createNYSC : createNYSC,
        createRoles : createRoles,
        deleteTrainee : deleteTrainee,
        deleteTrainer : deleteTrainer,
        deleteAlumni : deleteAlumni,
        deleteIntern : deleteIntern,
        deleteNYSC : deleteNYSC,
        deleteRoles : deleteRoles,
        msg : msg
       }


    return (
        <CreateContext.Provider value = {contextData}>
            {children}
        </CreateContext.Provider>
    )
}