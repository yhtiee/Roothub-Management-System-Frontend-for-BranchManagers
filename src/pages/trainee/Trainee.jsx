import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./trainee.scss"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EmailIcon from '@mui/icons-material/Email';
import ComputerIcon from '@mui/icons-material/Computer'; 
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';

const Trainee = () => {

  let [traineeData, setData] = useState("")
  
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("trainee"))
    setData(data)
  }, [])

  return (
    <div  className='trainee'>
      <Sidebar/>
      <div className="traineeContainer">
        <Navbar/>
        <div className="title1">
          <h4>Information</h4>
          <a href="" className='btn'>
            <button> Edit</button>
          </a>
        </div>
        <div className="top">
          <div className="left">
            <div className="item">
              <img src={traineeData.profile_picture} alt="profile" className="itemImg" />
            </div>
          </div>
          <div className="right">
            <div className="information">
              <p> <PersonOutlineOutlinedIcon className='icon'/> Full Name: {`${traineeData.last_name} ${traineeData.first_name} ${traineeData.other_names}`}</p>
              <p> <EmailIcon className='icon'/> Email: {traineeData.email}</p>
              <p> <ComputerIcon className='icon'/> Course: {traineeData.course_learning}</p>
              <p> <LocalPhoneIcon className='icon'/> Phone Number: {traineeData.phone_number}</p>
              <p> <LocationOnIcon className='icon'/> Location: {traineeData.location}</p>
              <p> <AccountBalanceWalletIcon className='icon'/> Amount Paid: {traineeData.amount_paid}</p>
              <p> <AccountBalanceWalletIcon className='icon'/> Balance: {traineeData.balance}</p>
              <p> <HowToRegIcon className='icon'/> Registration Date: {traineeData.registrationDate}</p>
              <p> <AlarmOnIcon className='icon'/> Course Duration: {traineeData.course_duration}</p>
            </div>
          </div>
        </div>
        {/* <div className="bottom"></div> */}
      </div>
    </div>
  )
}

export default Trainee