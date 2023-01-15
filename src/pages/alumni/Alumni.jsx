import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./alumni.scss"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EmailIcon from '@mui/icons-material/Email';
import ComputerIcon from '@mui/icons-material/Computer'; 
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';

const Alumni = () => {

  let alumniData = JSON.parse(localStorage.getItem("alumni"))

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
              <img src={alumniData.profile_picture} alt="profile" className="itemImg" />
            </div>
          </div>
          <div className="right">
            <div className="information">
              <p> <PersonOutlineOutlinedIcon className='icon'/> Full Name: {`${alumniData.last_name} ${alumniData.first_name} ${alumniData.other_names}`}</p>
              <p> <EmailIcon className='icon'/> Email: {alumniData.email}</p>
              <p> <LocalPhoneIcon className='icon'/> Phone Number: {alumniData.phone_number}</p>
              <p> <LocationOnIcon className='icon'/> Location: {alumniData.location}</p>
              <p> <HowToRegIcon className='icon'/> Registration Date: {alumniData.registrationDate}</p>
              <p> <HowToRegIcon className='icon'/> Registration Date: {alumniData.completionDate}</p>
            </div>
          </div>
        </div>
        {/* <div className="bottom"></div> */}
      </div>
    </div>
  )
}

export default Alumni