import React from 'react'
import "./popularCourses.scss"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
const PopularCourses = () => {
  return (
    <div className='popularCourses'>
        <h4 className="title"> Popular Courses </h4>
        <div className="courses">
            <div className="course">
                <CircularProgressbar className='progress' value={70} text="70%"/>
                Web Development
            </div>

            <div className="course">
                <CircularProgressbar className='progress' value={70} text="70%" />
                App Development
            </div>

            <div className="course">
                <CircularProgressbar className='progress' value={70} text="70%" />
                Content Development
            </div>

            <div className="course">
                <CircularProgressbar className='progress' value={70} text="70%" />
                UI/UX
            </div>

            <div className="course">
                <CircularProgressbar className='progress' value={70} text="70%" />
                Graphics
            </div>

            <div className="course">
                <CircularProgressbar className='progress' value={70} text="70%" />
                Python Programming
            </div>

            <div className="course">
                <CircularProgressbar className='progress' value={70} text="70%" />
                Data Analysis
            </div>

            <div className="course">
                <CircularProgressbar className='progress' value={70} text="70%" />
                Video Editing
            </div>

            <div className="course">
                <CircularProgressbar className='progress' value={70} text="70%" />
                Photography
            </div>

            <div className="course">
                <CircularProgressbar className='progress' value={70} text="70%" />
                Computer Basics
            </div>
        </div>
           
    </div>
  )
}

export default PopularCourses