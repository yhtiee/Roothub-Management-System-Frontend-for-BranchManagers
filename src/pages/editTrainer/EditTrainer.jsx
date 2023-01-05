import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./editTrainer.scss"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";
import { useRef, useContext, useEffect } from 'react'
// import CreateContext from '../../context/CreateData';
import { useNavigate } from 'react-router-dom';
import UpdateContext from '../../context/updateContext';
import { idID } from '@mui/material/locale';
import AuthContext from '../../context/authContext';

const EditTrainer = () => {
  const [file, setFile] = useState("");
  const [ImageFile, setFileImage] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState("Frontend Web Development");
  let {updateTrainer} = useContext(UpdateContext)
  let navigate = useNavigate()
  let trainerData = JSON.parse(localStorage.getItem("trainer"))
  let {user} = useContext(AuthContext)

  const handleChangeCourse = (event) => {
    setSelectedCourse(event.target.value);
  };

  let first = useRef()
  let last = useRef()
  let other = useRef()
  let qualification = useRef()
  let bank = useRef()
  let myfile = useRef()
  let location = useRef()
  let phone = useRef()
  let email = useRef()
  let account_number = useRef()

  async function getFile() {
    const response = await fetch(trainerData.profile_picture);
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
    let Qualification = qualification.current.value
    let Bank = bank.current.value
    let AccountNumber = account_number.current.value
    let Location = location.current.value
    let Course = selectedCourse
    let mypic = myfile.current.value
    let userId = trainerData.id
    let formData = new FormData();
    formData.append("profile_picture", file? file : ImageFile);
    formData.append('first_name', firstName);
    formData.append("last_name", lastName);
    formData.append("other_names", otherName);
    formData.append("email", Email);
    formData.append("phone_number", phoneNumber);
    formData.append("course_teaching", Course);
    formData.append("qualification", Qualification);
    formData.append("bank", Bank);
    formData.append("location", Location);
    formData.append("account_number", AccountNumber);

    updateTrainer(formData, userId)
    navigate("/trainers")
   
  }
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h4> Edit Existing Trainer </h4>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={
                file
                  ? URL.createObjectURL(file)
                  : trainerData.profile_picture
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
                <input type="text" required ref={last} defaultValue={trainerData.last_name} />
              </div>
              <div className="formInput">
                <label>First Name</label>
                <input type="text" required ref={first} defaultValue={trainerData.first_name}/>
              </div>
              <div className="formInput">
                <label>Other Name</label>
                <input type="text" required ref={other} defaultValue={trainerData.other_names}/>
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" required ref={email} defaultValue={trainerData.email}/>
              </div>
              <div className="formInput">
                <label>Phone Number</label>
                <input type="number" required ref={phone} defaultValue={trainerData.phone_number}/>
              </div>
              <div className="formInput">
                <label>Course</label>
                <select id="course" name="course" value={selectedCourse} onChange={handleChangeCourse}>
                  <option value="Frontend Web Development">Frontend Web Development</option>
                  <option value="Backend Web Development">Backend Web Development</option>
                  <option value="Full Stack Web Development">Full Stack Web Development</option>
                  <option value="Visual Communications">Visual Communications</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Data Analysis">Data Analysis</option>
                  <option value="App Developement">App Developement</option>
                  <option value="Computer Basics">Computer Basics</option>
                </select>
              </div>
              <div className="formInput" style={{display:"none"}}>
                <label>Location</label>
                <input type="text" defaultValue={user} required ref={location} />
              </div>
              <div className="formInput">
                <label>Qualifications</label>
                <input type="text" required ref={qualification} defaultValue={trainerData.qualification}/>
              </div>
              <div className="formInput">
                <label>Bank</label>
                <input type="text" required ref={bank} defaultValue={trainerData.bank}/>
              </div>
              <div className="formInput">
                <label>Account Number</label>
                <input type="number" required ref={account_number} defaultValue={trainerData.account_number}/>
              </div>
              {/* <Link to="/trainees"> */}
                <button type='submit'>
                  Edit
                </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditTrainer