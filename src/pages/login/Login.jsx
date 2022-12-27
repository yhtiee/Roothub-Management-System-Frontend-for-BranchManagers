import React, {useContext} from 'react'
import "./login.css"
import h1 from  "../../assets/11406876_1674791596088618_3902117193401564098_n.jpg"
import AuthContext from '../../context/authContext'
import { useRef } from 'react'

const Login = () => {
  
  let username = useRef()
  let password = useRef()
  let {loginUser} = useContext(AuthContext)

  let Submit = (e)=>{
    e.preventDefault()
    let use = username.current.value
    let pass = password.current.value
    loginUser(use,pass)
  }

  return (
    <div className='main1_wrapper'>
      <div className='login_wrapper'>
        <div className='login'>
          <h4 className='help_text'>Login</h4>
          <form onSubmit={Submit} className='login_form'>
            <div className='username_wrapper'>
              <label>Username:</label>
              <input type="text"  required  ref={username}/>
            </div>
            <div className='password_wrapper'>
              <label>Password:</label>
              <input type="password"  required  ref={password}/>
            </div>
            <button className='login_btn'> Login </button>
          </form>
        </div>
        <div className='login_hero'>
          <div className='hero_inner'>
            <img src={h1} alt="login_hero" className='display_photo'/>
            <div className='motto'>
              <h4>Create</h4> 
              <h4>Engage</h4> 
              <h4>Deploy</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login