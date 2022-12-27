import React, {useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./trainer.scss"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EmailIcon from '@mui/icons-material/Email';
import ComputerIcon from '@mui/icons-material/Computer'; 
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';

const Trainer = () => {

  let trainerData = JSON.parse(localStorage.getItem("trainer"))

  useEffect(() => {
    console.log(trainerData)
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
              <img src={trainerData.profile_picture} alt="profile" className="itemImg" />
            </div>
          </div>
          <div className="right">
            <div className="information">
              <p> <PersonOutlineOutlinedIcon className='icon'/> Full Name: {`${trainerData.last_name} ${trainerData.first_name} ${trainerData.other_names}`}</p>
              <p> <EmailIcon className='icon'/> Email: {trainerData.email}</p>
              <p> <ComputerIcon className='icon'/> Course: {trainerData.course_teaching}</p>
              <p> <ComputerIcon className='icon'/> Qualification: {trainerData.qualification}</p>
              <p> <LocalPhoneIcon className='icon'/> Phone Number: {trainerData.phone_number}</p>
              <p> <LocationOnIcon className='icon'/> Location: {trainerData.location}</p>
              <p> <AccountBalanceWalletIcon className='icon'/> Bank Name: {trainerData.bank}</p>
              <p> <AccountBalanceWalletIcon className='icon'/> Account Number: {trainerData.account_number}</p>
              <p> <HowToRegIcon className='icon'/> Registration Date: {trainerData.registrationDate}</p>
              {/* <p> <AlarmOnIcon className='icon'/> Course Duration: {trainerData.course_duration}</p> */}
            </div>
          </div>
        </div>
        {/* <div className="bottom"></div> */}
      </div>
    </div>
  )
}

export default Trainer