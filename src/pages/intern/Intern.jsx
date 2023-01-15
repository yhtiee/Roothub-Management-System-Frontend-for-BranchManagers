import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./Intern.scss"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EmailIcon from '@mui/icons-material/Email';
import ComputerIcon from '@mui/icons-material/Computer'; 
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';

const Intern = () => {

  let InternData = JSON.parse(localStorage.getItem("intern"))

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
              <img src={InternData.profile_picture} alt="profile" className="itemImg" />
            </div>
          </div>
          <div className="right">
            <div className="information">
              <p> <PersonOutlineOutlinedIcon className='icon'/> Full Name: {`${InternData.last_name} ${InternData.first_name} ${InternData.other_names}`}</p>
              <p> <EmailIcon className='icon'/> Email: {InternData.email}</p>
              <p> <ComputerIcon className='icon'/> Attcahed Area: {InternData.attached_area}</p>
              <p> <LocalPhoneIcon className='icon'/> Phone Number: {InternData.phone_number}</p>
              <p> <LocationOnIcon className='icon'/> Location: {InternData.location}</p>
              <p> <HowToRegIcon className='icon'/> Registration Date: {InternData.registrationDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intern