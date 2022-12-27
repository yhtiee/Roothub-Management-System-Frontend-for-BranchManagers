import React from 'react'
import Chart from '../../components/charts/Chart'
import Navbar from '../../components/navbar/Navbar'
import PopularCourses from '../../components/popularCourses/PopularCourses'
import Sidebar from '../../components/sidebar/Sidebar'
import Widgets from '../../components/widgets/Widgets'
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widgets/>
          </div>
          <div className="popCourse">
            <PopularCourses/>
          </div>
        </div>
    </div>
  )
}

export default Home