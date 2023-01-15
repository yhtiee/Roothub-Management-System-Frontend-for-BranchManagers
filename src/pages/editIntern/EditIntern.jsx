import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./editIntern.scss"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";
import { useRef, useContext, useEffect } from 'react'
// import CreateContext from '../../context/CreateData';
import { useNavigate } from 'react-router-dom';
import UpdateContext from '../../context/updateContext';
import { idID } from '@mui/material/locale';
import AuthContext from '../../context/authContext';


const EditIntern = () => {

  let InternData = JSON.parse(localStorage.getItem("intern"))
  const [file, setFile] = useState("");
  const [ImageFile, setFileImage] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(InternData.course_learning);
  const [selectedDuration, setSelectedDuration] = useState(InternData.course_duration);
  const [selectedFee, setSelectedFee] = useState(InternData.training_fee);
  let {updateIntern} = useContext(UpdateContext)
  let {user} = useContext(AuthContext)

  // let user = "Uyo"

  const handleChangeCourse = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleChangeDuration = (event) => {
    setSelectedDuration(event.target.value);
  };

  const handleChangeFee = (event) => {
    setSelectedFee(event.target.value);
  };


  let first = useRef()
  let last = useRef()
  let other = useRef()
  let amount = useRef()
  let balance = useRef()
  let myfile = useRef()
  let location = useRef()
  let phone = useRef()
  let email = useRef()

  async function getFile() {
    const response = await fetch(InternData.profile_picture);
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
    let amountPaid = amount.current.value
    let Balance = balance.current.value
    let Duration = selectedDuration
    let Location = location.current.value
    let Course = selectedCourse
    let Fee = selectedFee
    let userId = InternData.id
    let formData = new FormData();
    formData.append("profile_picture", file? file : ImageFile);
    formData.append('first_name', firstName);
    formData.append("last_name", lastName);
    formData.append("other_names", otherName);
    formData.append("email", Email);
    formData.append("phone_number", phoneNumber);
    formData.append("course_learning", Course);
    formData.append("course_duration", Duration);
    formData.append("amount_paid", amountPaid);
    formData.append("balance", Balance);
    formData.append("location", Location);
    formData.append("training_fee", Fee);
    updateIntern(formData, userId)
   
  }


  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h4> Edit Existing Intern </h4>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={
                file
                  ? URL.createObjectURL(file)
                  : InternData.profile_picture
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
                <input type="text" required ref={last} defaultValue={InternData.last_name} />
              </div>
              <div className="formInput">
                <label>First Name</label>
                <input type="text" required ref={first} defaultValue={InternData.first_name}/>
              </div>
              <div className="formInput">
                <label>Other Name</label>
                <input type="text" required ref={other} defaultValue={InternData.other_names}/>
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" required ref={email} defaultValue={InternData.email}/>
              </div>
              <div className="formInput">
                <label>Phone Number</label>
                <input type="number" required ref={phone} defaultValue={InternData.phone_number}/>
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
              <div className="formInput">
                <label>Course Duration</label>
                <select id="course_duration" name="course_duration" value={selectedDuration} onChange={handleChangeDuration}>
                  <option value="6 Months">6 Months</option>
                  <option value="4 Months">4 Months</option>
                  <option value="3 Months">3 Months</option>
                  <option value="1 Month">1 Month</option>
                </select>
              </div>
              <div className="formInput">
                <label>Training Fee</label>
                <select id="training_fee" name="training_fee" value={selectedFee} onChange={handleChangeFee}>
                  <option value="20000">120000</option>
                  <option value="20000">80000</option>
                  <option value="20000">60000</option>
                  <option value="20000">20000</option>
                </select>
              </div>
              <div className="formInput" style={{display:"none"}}>
                <label>Location</label>
                <input type="text" defaultValue={user} required ref={location} />
              </div>
              <div className="formInput">
                <label>Amount Paid</label>
                <input type="number" required ref={amount} defaultValue={InternData.amount_paid}/>
              </div>
              <div className="formInput">
                <label>Balance</label>
                <input type="number" required ref={balance} defaultValue={InternData.balance}/>
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

export default EditIntern