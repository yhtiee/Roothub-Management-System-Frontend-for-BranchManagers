import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./newNYSC.scss"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";
import { useRef, useContext } from 'react'
import CreateContext from '../../context/CreateData';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/authContext';


const NewNYSC = () => {

  const [file, setFile] = useState("");
  let {createNYSC} = useContext(CreateContext)
  let navigate = useNavigate()
  let {user} = useContext(AuthContext)
  // let user = "Uyo"


  let first = useRef()
  let last = useRef()
  let other = useRef()
  let myfile = useRef()
  let location = useRef()
  let phone = useRef()
  let email = useRef()
  let area = useRef()


  let submitForm = (e) => {
    e.preventDefault()
    let firstName = first.current.value
    let lastName = last.current.value
    let otherName = other.current.value
    let Email = email.current.value
    let phoneNumber = phone.current.value
    let Location = location.current.value
    let Area = area.current.value
    let mypic = myfile.current.value
    let pic = URL.createObjectURL(file)
    let formData = new FormData();
    formData.append("profile_picture", file);
    formData.append('first_name', firstName);
    formData.append('attached_area', Area);
    formData.append("last_name", lastName);
    formData.append("other_names", otherName);
    formData.append("email", Email);
    formData.append("phone_number", phoneNumber);
    formData.append("location", Location);
    createNYSC(formData)
    
   
  }

 
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h4> Add New NYSC </h4>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              } alt="" />
          </div>
          <div className="right">
            <form onSubmit={submitForm} encType="multipart/form-data">
              <div className="formInput">
                <label htmlFor='file'> Image: <DriveFolderUploadIcon className='icon'/> </label>
                <input type="file" id='file' onChange={(e) => setFile(e.target.files[0])} style={{display:"none"}} ref={myfile}/>
              </div>
              <div className="formInput">
                <label>Last Name</label>
                <input type="text" required ref={last} />
              </div>
              <div className="formInput">
                <label>First Name</label>
                <input type="text" required ref={first}/>
              </div>
              <div className="formInput">
                <label>Other Name</label>
                <input type="text" required ref={other}/>
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" required ref={email}/>
              </div>
              <div className="formInput">
                <label>Phone Number</label>
                <input type="number" required ref={phone}/>
              </div>
              <div className="formInput">
                <label>Area Attached</label>
                <input type="text" required ref={area}/>
              </div>
              <div className="formInput" style={{display:"none"}}>
                <label>Location</label>
                <input type="text" defaultValue={user} required ref={location} />
              </div>
              
              {/* <Link to="/trainees"> */}
                <button type='submit'>
                  Add
                </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewNYSC