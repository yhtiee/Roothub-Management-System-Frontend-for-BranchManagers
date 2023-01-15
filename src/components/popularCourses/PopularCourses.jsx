import React from 'react'
import "./popularCourses.scss"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import { useContext } from 'react'
import DataContext from '../../context/TotalData'
import { useEffect } from 'react'
import AuthContext from '../../context/authContext'
const PopularCourses = () => {
    let {user} = useContext(AuthContext)
    let {popularCourse} = useContext(DataContext)
    let {getPopularCourses} = useContext(DataContext)

    useEffect(() => {
        getPopularCourses(user)
        // console.log(popularCourse)
    }, [getPopularCourses])


  return (
    <div className='popularCourses'>
        <h4 className="title"> Popular Courses </h4>
        <div className="courses">
            <div className="course">
                <CircularProgressbar className='progress' value={popularCourse["Frontend Web Development"]} text={`${popularCourse["Frontend Web Development"]}%`}/>
                Frontend Web Dev
            </div>

            <div className="course">
                <CircularProgressbar className='progress' value={popularCourse["App Developement"]}  text={`${popularCourse["App Developement"]}%`}/>
                App Development
            </div>

            <div className="course">
                <CircularProgressbar className='progress' value={popularCourse["Content Development"]}  text={`${popularCourse["Content Development"]}%`} />
                Content Development
            </div>

            <div className="course">
                <CircularProgressbar className='progress' value={popularCourse["UI/UX"]} text={`${popularCourse["UI/UX"]}%`}/>
                UI/UX
            </div>

            <div className="course">
                <CircularProgressbar className='progress' value={popularCourse["Visual Communications"]} text={`${popularCourse["Visual Communications"]}%`}/>
                Visual Communications
            </div>

            <div className="course">
                <CircularProgressbar className='progress' value={popularCourse["Backend Web Development"]} text={`${popularCourse["Backend Web Development"]}%`}/>
                Backend Web Dev
            </div>

            <div className="course">
                <CircularProgressbar className='progress' value={popularCourse["Data Analysis"]} text={`${popularCourse["Data Analysis"]}%`} />
                Data Analysis
            </div>

            <div className="course">
                <CircularProgressbar className='progress' value={popularCourse["Video Editing"]} text={`${popularCourse["Video Editing"]}%`}  />
                Video Editing
            </div>

            <div className="course">
                <CircularProgressbar className='progress' value={popularCourse["Photography"]} text={`${popularCourse["Photography"]}%`}/>
                Photography
            </div>

            <div className="course">
                <CircularProgressbar className='progress' value={popularCourse["Computer Basics"]} text={`${popularCourse["Computer Basics"]}%`}/>
                Computer Basics
            </div>
        </div>
           
    </div>
  )
}

export default PopularCourses