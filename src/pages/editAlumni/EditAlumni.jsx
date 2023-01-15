import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./editAlumni.scss"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";
import { useRef, useContext, useEffect } from 'react'
// import CreateContext from '../../context/CreateData';
import { useNavigate } from 'react-router-dom';
import UpdateContext from '../../context/updateContext';
import { idID } from '@mui/material/locale';
import AuthContext from '../../context/authContext';

const EditAlumni = () => {
  const [file, setFile] = useState("");
  const [ImageFile, setFileImage] = useState(null);
  let {updateAlumni} = useContext(UpdateContext)
  let navigate = useNavigate()
  let alumniData = JSON.parse(localStorage.getItem("alumni"))
  let {user} = useContext(AuthContext)
  // let user = "Uyo"

  const handleChangeCourse = (event) => {
    setSelectedCourse(event.target.value);
  };

  let first = useRef()
  let last = useRef()
  let other = useRef()
  let myfile = useRef()
  let location = useRef()
  let phone = useRef()
  let email = useRef()
  let regDate = useRef()
  let compDate = useRef()


  async function getFile() {
    const response = await fetch(alumniData.profile_picture);
    const blob = await response.blob();
    return blob;
  }

  useEffect(() => {
    getFile().then(blob => {
      const fileImage = new File([blob], 'image.jpg', { type: 'image/jpeg' });
      setFileImage(fileImage);
    });
  }, []);

  let submitForm = (e) => {
    e.preventDefault()
    let firstName = first.current.value
    let lastName = last.current.value
    let otherName = other.current.value
    let Email = email.current.value
    let phoneNumber = phone.current.value
    let RegDate = regDate.current.value
    let CompDate = compDate.current.value
    let userId = alumniData.id
    let Location = location.current.value
    let formData = new FormData();
    formData.append("profile_picture", file? file : ImageFile);
    formData.append('first_name', firstName);
    formData.append("last_name", lastName);
    formData.append("other_names", otherName);
    formData.append("location", Location);
    formData.append("email", Email);
    formData.append("phone_number", phoneNumber);
    formData.append("registrationDate", RegDate);
    formData.append("completionDate", CompDate);
    updateAlumni(formData, userId)
    navigate("/alumni")
   
  }
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h4> Edit Existing Alumni </h4>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={
                file
                  ? URL.createObjectURL(file)
                  : alumniData.profile_picture
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
                <input type="text" required ref={last} defaultValue={alumniData.last_name} />
              </div>
              <div className="formInput">
                <label>First Name</label>
                <input type="text" required ref={first} defaultValue={alumniData.first_name}/>
              </div>
              <div className="formInput">
                <label>Other Name</label>
                <input type="text" required ref={other} defaultValue={alumniData.other_names}/>
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" required ref={email} defaultValue={alumniData.email}/>
              </div>
              <div className="formInput">
                <label>Phone Number</label>
                <input type="number" required ref={phone} defaultValue={alumniData.phone_number}/>
              </div>
              <div className="formInput" style={{display:"none"}}>
                <label>Location</label>
                <input type="text" defaultValue={user} required ref={location} />
              </div>
              <div className='formInput'>
                <label> Registration Date </label>
                <input type="date" required ref={regDate} defaultValue={alumniData.registrationDate} />
              </div>
              <div className='formInput'>
                <label> Completion Date </label>
                <input type="date" required ref={compDate} defaultValue={alumniData.completionDate} />
              </div>
              <button type='submit'>
                Edit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditAlumni